// Responsive probe: loads every tracked page at ten widths (320 to 1920) and fails on horizontal overflow or a missing viewport meta.
// Setup: npm i playwright-core, serve the repo root (python -m http.server 8765), list pages one per line in pages.txt
//   (git ls-files "*.html" | grep -v "^AgentCory System Brief/\|^archive/" > pages.txt)
// Usage: node responsive.mjs [out.json] [light|dark] [widths,comma,separated]
import { chromium } from 'playwright-core';
import fs from 'node:fs';
const pages = fs.readFileSync('pages.txt', 'utf8').split(/\r?\n/).filter(Boolean).filter(p => !p.startsWith('_audit/'));
const widths = (process.argv[4] || '320,360,390,480,600,768,1024,1280,1440,1920').split(',').map(Number);
const theme = process.argv[3] || '';
const browser = await chromium.launch({ channel: 'msedge', headless: true });
const out = {};
const conc = 4; let idx = 0;
async function worker() {
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 }, reducedMotion: 'reduce' });
  const page = await ctx.newPage();
  while (idx < pages.length) {
    const p = pages[idx++];
    out[p] = {};
    for (const w of widths) {
      try {
        await page.setViewportSize({ width: w, height: 900 });
        await page.goto('http://localhost:8765/' + encodeURI(p), { waitUntil: 'load', timeout: 30000 });
        if (theme) await page.evaluate((t) => document.documentElement.setAttribute('data-theme', t), theme);
        await page.waitForTimeout(1400);
        out[p][w] = await page.evaluate(() => {
          const de = document.documentElement, vw = de.clientWidth;
          const sw = Math.max(de.scrollWidth, document.body ? document.body.scrollWidth : 0);
          const off = [];
          if (sw > vw + 1) {
            for (const el of document.querySelectorAll('body *')) {
              const r = el.getBoundingClientRect();
              if (r.width > 0 && r.height > 0 && (r.right > vw + 1 || r.left < -1)) {
                const cs = getComputedStyle(el);
                if (cs.position === 'fixed') continue;
                // skip elements inside a scroll or clip container (intended scrollers)
                let a = el.parentElement, clipped = false;
                while (a && a !== document.body) { const o = getComputedStyle(a); if (/(auto|scroll|hidden|clip)/.test(o.overflowX)) { clipped = true; break; } a = a.parentElement; }
                if (clipped) continue;
                off.push(`${el.tagName.toLowerCase()}${el.id ? '#' + el.id : ''}${typeof el.className === 'string' && el.className ? '.' + el.className.trim().split(/\s+/)[0] : ''} [${Math.round(r.left)}..${Math.round(r.right)}] "${(el.textContent || '').trim().slice(0, 30)}"`);
                if (off.length >= 4) break;
              }
            }
          }
          const tiny = [...document.querySelectorAll('button, a[href], input, select, textarea, [role="button"]')].filter(e => { const r = e.getBoundingClientRect(); return r.width > 0 && (r.width < 24 || r.height < 24) && getComputedStyle(e).display !== 'inline'; }).length;
          return { vw, sw, over: sw - vw, off, meta: !!document.querySelector('meta[name="viewport"]'), tiny };
        });
      } catch (e) { out[p][w] = { err: String(e).slice(0, 120) }; }
    }
  }
  await ctx.close();
}
await Promise.all(Array.from({ length: conc }, worker));
await browser.close();
fs.writeFileSync(process.argv[2] || 'resp.json', JSON.stringify(out, null, 1));
let bad = 0;
for (const [p, r] of Object.entries(out)) {
  const lines = [];
  for (const [w, v] of Object.entries(r)) { if (v.err) lines.push(`  ${w}: ERR ${v.err}`); else if (v.over > 1) lines.push(`  ${w}: +${v.over}px  ${v.off.slice(0, 2).join(' | ')}`); }
  if (lines.length) { bad++; console.log(p + (Object.values(r)[0].meta === false ? '  [no viewport meta]' : '')); console.log(lines.join('\n')); }
}
const noMeta = Object.entries(out).filter(([, r]) => Object.values(r)[0].meta === false).map(([p]) => p);
if (noMeta.length) console.log('no viewport meta:', noMeta.join(', '));
console.log('pages with overflow:', bad, 'of', Object.keys(out).length);
process.exit(bad || noMeta.length ? 1 : 0);
