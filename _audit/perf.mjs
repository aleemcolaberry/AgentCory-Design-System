// Load-performance probe: requests, bytes, timings, largest resources, images without dimensions, lazy images above the fold.
// usage: node perf.mjs [page ...]
import { chromium } from 'playwright-core';
const pages = process.argv.slice(2);
const browser = await chromium.launch({ channel: 'msedge', headless: true });
for (const p of pages) {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  const reqs = [];
  page.on('response', async (r) => { try { const b = await r.body(); reqs.push({ u: r.url(), n: b.length, s: r.status(), t: r.request().resourceType() }); } catch (e) { reqs.push({ u: r.url(), n: 0, s: r.status(), t: r.request().resourceType() }); } });
  const errs = []; page.on('pageerror', (e) => errs.push(String(e).slice(0, 100))); page.on('requestfailed', (r) => errs.push('FAILED ' + r.url().slice(-60)));
  await page.goto((process.env.AUDIT_BASE || 'http://localhost:8765') + '/' + encodeURI(p), { waitUntil: 'load' });
  await page.waitForTimeout(3500);
  const m = await page.evaluate(() => new Promise((res) => {
    const nav = performance.getEntriesByType('navigation')[0];
    let lcp = 0, lcpEl = ''; let cls = 0;
    try { new PerformanceObserver((l) => { for (const e of l.getEntries()) { lcp = e.startTime; lcpEl = (e.element ? e.element.tagName.toLowerCase() : '') + ' ' + (e.url ? e.url.split('/').pop() : ''); } }).observe({ type: 'largest-contentful-paint', buffered: true }); } catch (e) {}
    try { new PerformanceObserver((l) => { for (const e of l.getEntries()) if (!e.hadRecentInput) cls += e.value; }).observe({ type: 'layout-shift', buffered: true }); } catch (e) {}
    setTimeout(() => {
      const imgs = [...document.images];
      const vh = innerHeight;
      res({
        dcl: Math.round(nav.domContentLoadedEventEnd), load: Math.round(nav.loadEventEnd), lcp: Math.round(lcp), lcpEl, cls: +cls.toFixed(3),
        fcp: Math.round((performance.getEntriesByName('first-contentful-paint')[0] || {}).startTime || 0),
        noDims: imgs.filter((i) => !(i.getAttribute('width') && i.getAttribute('height')) && !/aspect-ratio|height|block-size/.test(i.getAttribute('style') || '') && getComputedStyle(i).aspectRatio === 'auto').map((i) => (i.currentSrc || i.src).split('/').pop()).slice(0, 6),
        lazyAbove: imgs.filter((i) => i.loading === 'lazy' && i.getBoundingClientRect().top < vh).map((i) => (i.currentSrc || i.src).split('/').pop()).slice(0, 6),
        eagerBelow: imgs.filter((i) => i.loading !== 'lazy' && i.getBoundingClientRect().top > vh * 2).length,
        broken: imgs.filter((i) => i.complete && i.naturalWidth === 0).map((i) => (i.getAttribute('src') || '').slice(-50)),
        blocking: [...document.querySelectorAll('head script[src]:not([async]):not([defer]):not([type="module"])')].map((s) => s.src.split('/').pop()),
      });
    }, 600);
  }));
  const tot = reqs.reduce((a, r) => a + r.n, 0);
  const big = reqs.sort((a, b) => b.n - a.n).slice(0, 6).map((r) => `${Math.round(r.n / 1024)}k ${r.u.replace('http://localhost:8765/', '').slice(-58)}`);
  const bad = reqs.filter((r) => r.s >= 400).map((r) => r.s + ' ' + r.u.slice(-60));
  console.log(`\n## ${p}\n  requests ${reqs.length}  bytes ${Math.round(tot / 1024)}k  FCP ${m.fcp}ms  LCP ${m.lcp}ms (${m.lcpEl.trim()})  DCL ${m.dcl}ms  load ${m.load}ms  CLS ${m.cls}`);
  console.log('  largest: ' + big.join(' | '));
  if (m.blocking.length) console.log('  render-blocking head scripts: ' + m.blocking.join(', '));
  if (m.noDims.length) console.log('  images without reserved size: ' + m.noDims.join(', '));
  if (m.lazyAbove.length) console.log('  lazy images above the fold: ' + m.lazyAbove.join(', '));
  if (m.eagerBelow) console.log('  eager images far below the fold: ' + m.eagerBelow);
  if (m.broken.length) console.log('  BROKEN images: ' + m.broken.join(', '));
  if (bad.length) console.log('  HTTP errors: ' + bad.join(', '));
  if (errs.length) console.log('  errors: ' + [...new Set(errs)].slice(0, 4).join(' ; '));
  await ctx.close();
}
await browser.close();
