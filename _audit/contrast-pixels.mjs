// Pixel contrast probe: measures text colour against the pixels actually rendered behind it (gradients, images, overlays included).
// usage: node px.mjs <page> <width> <theme|-> <outPrefix>
import { chromium } from 'playwright-core';
import fs from 'node:fs';
const [p, w, themeArg, out] = process.argv.slice(2);
const theme = themeArg === '-' ? '' : themeArg;
const browser = await chromium.launch({ channel: 'msedge', headless: true });
const page = await (await browser.newContext({ viewport: { width: +w, height: 900 }, reducedMotion: 'reduce' })).newPage();
await page.goto((process.env.AUDIT_BASE || 'http://localhost:8765') + '/' + encodeURI(p), { waitUntil: 'load' });
if (theme) await page.evaluate((t) => document.documentElement.setAttribute('data-theme', t), theme);
await page.waitForTimeout(4500);
const h = await page.evaluate(() => document.documentElement.scrollHeight);
for (let y = 0; y < h; y += 500) { await page.evaluate((yy) => window.scrollTo(0, yy), y); await page.waitForTimeout(220); }
await page.evaluate(() => window.scrollTo(0, 0)); await page.waitForTimeout(700);
await page.addStyleTag({ content: '*,*::before,*::after{animation:none!important;transition:none!important;caret-color:transparent!important} html{scroll-behavior:auto!important}' });
const items = await page.evaluate(() => {
  const res = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let n; const seen = new Set();
  while ((n = walker.nextNode())) {
    const t = n.textContent.trim(); if (t.length < 2) continue;
    const el = n.parentElement; if (!el || seen.has(el)) continue; seen.add(el);
    const cs = getComputedStyle(el);
    if (cs.visibility === 'hidden' || cs.display === 'none') continue;
    if (el.closest('[aria-hidden="true"], [data-audit-ok~="contrast"], script, style, noscript, template')) continue;
    let op = 1, a = el; while (a) { op *= parseFloat(getComputedStyle(a).opacity); a = a.parentElement; } if (op < 0.05) continue;
    const range = document.createRange(); range.selectNodeContents(n);
    const rects = [...range.getClientRects()].filter((r) => r.width > 3 && r.height > 3);
    if (!rects.length) continue;
    const r = rects[0];
    const fill = cs.webkitTextFillColor;
    const grad = /gradient/.test(cs.backgroundImage) && /text/.test(cs.webkitBackgroundClip || cs.backgroundClip || '');
    res.push({ x: r.left + scrollX, y: r.top + scrollY, w: r.width, h: r.height, color: grad ? 'GRAD:' + cs.backgroundImage : (fill && fill !== cs.color ? fill : cs.color), fs: parseFloat(cs.fontSize), fw: parseInt(cs.fontWeight, 10) || 400, op, t: t.slice(0, 44), dis: !!el.closest(':disabled,[aria-disabled="true"]') });
  }
  // placeholders
  for (const el of document.querySelectorAll('input[placeholder], textarea[placeholder]')) {
    if (el.value) continue; const r = el.getBoundingClientRect(); if (r.width < 4) continue;
    const cs = getComputedStyle(el, '::placeholder'); const ecs = getComputedStyle(el);
    res.push({ x: r.left + scrollX + parseFloat(ecs.paddingLeft), y: r.top + scrollY + r.height * 0.3, w: Math.min(120, r.width - 20), h: r.height * 0.4, color: cs.color, fs: parseFloat(ecs.fontSize), fw: 400, op: parseFloat(cs.opacity) || 1, t: 'placeholder: ' + el.placeholder.slice(0, 30), dis: el.disabled });
  }
  return res;
});
await page.addStyleTag({ content: '*,*::before,*::after{color:transparent!important;-webkit-text-fill-color:transparent!important;text-shadow:none!important} ::placeholder{color:transparent!important;opacity:0!important}' });
// gradient-clipped text paints its gradient as the glyphs: remove that paint so only the real backdrop is left
await page.evaluate(() => { for (const el of document.querySelectorAll('body *')) { const cs = getComputedStyle(el); if (/text/.test(cs.webkitBackgroundClip || cs.backgroundClip || '')) el.style.setProperty('background-image', 'none', 'important'); } });
await page.waitForTimeout(250);
await page.screenshot({ path: out + '.png', fullPage: true });
fs.writeFileSync(out + '.json', JSON.stringify({ page: p, w: +w, theme, items }));
await browser.close();
