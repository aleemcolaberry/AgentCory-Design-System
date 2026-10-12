// Headless run of the audit harness: every set, in light and dark. Exits 1 when a blocking category is not 0.
// Setup (once, outside the repo is fine): npm i playwright-core   (uses the installed Edge or Chrome)
// Serve the repo root first:               python -m http.server 8765
// Usage: node _audit/run.mjs [baseUrl] [set ...]      e.g. node _audit/run.mjs http://localhost:8765 templates fit
import { chromium } from 'playwright-core';

const args = process.argv.slice(2);
const base = args[0] && /^https?:/.test(args[0]) ? args.shift() : 'http://localhost:8765';
const sets = args.length ? args : ['', 'type', 'templates', 'mobile', 'responsive', 'fit'];
const CATS = ['contrast', 'clip', 'canvas', 'target', 'name', 'tiny', 'type', 'misc', 'offscreen', 'overlap'];
const BLOCKING = ['contrast', 'clip', 'canvas', 'name', 'type', 'misc', 'offscreen', 'overlap'];

let browser;
for (const channel of ['msedge', 'chrome']) {
  try { browser = await chromium.launch({ channel, headless: true }); break; } catch (e) { /* try the next browser */ }
}
if (!browser) { console.error('No Edge or Chrome found for playwright-core.'); process.exit(2); }

let failed = false;
for (const theme of ['light', 'dark']) {
  for (const set of sets) {
    const page = await (await browser.newContext({ viewport: { width: 1600, height: 1000 } })).newPage();
    await page.goto(`${base}/_audit/Audit.html?${set ? 'set=' + set + '&' : ''}theme=${theme}`, { waitUntil: 'load' });
    await page.waitForFunction(() => window.__audit && window.__audit.done, null, { timeout: 30 * 60 * 1000 });
    const results = await page.evaluate(() => window.__audit.results);
    await page.context().close();
    const totals = Object.fromEntries(CATS.map((c) => [c, 0]));
    for (const [key, r] of Object.entries(results)) {
      for (const c of CATS) {
        const items = (r[c] || []).filter((x) => !(c === 'misc' && x === 'no headings'));
        totals[c] += items.length;
        if (BLOCKING.includes(c)) for (const x of items) console.log(`  ${theme} ${key.replace('../', '')} ${c}: ${x}`);
      }
    }
    const bad = BLOCKING.some((c) => totals[c] > 0);
    failed = failed || bad;
    console.log(`${bad ? 'FAIL' : 'PASS'} set=${set || 'default'} theme=${theme} pages=${Object.keys(results).length} ${JSON.stringify(totals)}`);
  }
}
await browser.close();
process.exit(failed ? 1 : 0);
