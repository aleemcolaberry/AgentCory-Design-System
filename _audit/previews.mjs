// Regenerates the static template previews shown in the Showcase (assets/previews/*.jpg).
// The Showcase used to embed four live templates in iframes: 370 requests and 8 MB for one section. A picture costs 40 KB.
// Run after changing any of the four templates below.
// Setup: npm i playwright-core, serve the repo root (python -m http.server 8765). Usage: node previews.mjs [baseUrl] [outDir]
import { chromium } from 'playwright-core';
import fs from 'node:fs';
import path from 'node:path';

const base = process.argv[2] || 'http://localhost:8765';
const outDir = process.argv[3] || 'assets/previews';
// name, page, viewport the template is designed at, and the region the card shows (card is 440x300, i.e. 22:15)
const SHOTS = [
  ['landing-page', 'templates/landing-page/LandingPage.dc.html', 1280, 873],
  ['pitch-deck', 'templates/pitch-deck/PitchDeck.dc.html', 1280, 873],
  ['one-pager', 'templates/one-pager/OnePager.dc.html', 816, 556],
  ['outreach-email', 'templates/outreach-email/OutreachEmail.dc.html', 680, 464],
];
fs.mkdirSync(outDir, { recursive: true });
let browser;
for (const channel of ['msedge', 'chrome']) { try { browser = await chromium.launch({ channel, headless: true }); break; } catch (e) { /* next */ } }
if (!browser) { console.error('No Edge or Chrome found for playwright-core.'); process.exit(2); }
for (const [name, page_, w, h] of SHOTS) {
  // 880px wide output: twice the 440px card, sharp on high-density screens
  const ctx = await browser.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 880 / w, reducedMotion: 'reduce' });
  const page = await ctx.newPage();
  await page.goto(`${base}/${page_}`, { waitUntil: 'load' });
  await page.waitForTimeout(4000);
  const file = path.join(outDir, name + '.jpg');
  await page.screenshot({ path: file, type: 'jpeg', quality: 82 });
  console.log(file, Math.round(fs.statSync(file).size / 1024) + 'k');
  await ctx.close();
}
await browser.close();
