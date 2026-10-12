# Deploying aiuxaleem.com

## Layout
- `Version 1/` is the live site. `/` rewrites to `Version 1/Home.dc.html` (`vercel.json`, `index.html`); unknown URLs go to `Version 1/404.dc.html` (`404.html`).
- `shared/` (site.css, site.js), `assets/` and `_ds/` are loaded by Version 1 with `../`.
- `Archive/` is the previous site, kept for reference. It is not deployed.

## What ships
- Every `Version 1/*.dc.html` except Site Audit: Home, Work, Project, Case Studies, Case Study, Services, Read, Blog, Post, Videos, About, Now, Resume, Contact, Sitemap, 404, Admin, plus Header and Footer.
- `Version 1/` scripts: data.js, boot.js, motion.js, admin-schema.js, support.js.
- `shared/site.css`, `shared/site.js`, `assets/` (incl. `downloads/component-spec-template.md`), `_ds/`, `robots.txt`, `index.html`, `404.html`.

## Stays out (`.vercelignore`)
`Archive/`, `docs/`, `uploads/`, root `*.md`, `shared/aiuxaleem.css` (source of site.css), `shared/a11y-audit.js`, `Version 1/Site Audit.dc.html`.

## Admin
- Reached from the footer link "Admin sign-in" (`Admin.dc.html#/sign-in`). `noindex`, disallowed in robots.txt.
- The sign-in is a prototype gate (sessionStorage) and edits are stored in that browser (`localStorage`). To publish for every visitor, point `AX.save()` in `data.js` at a backend and put real auth in front of Admin.

## Contact form
Set `site.formEndpoint` in `data.js` (Formspree or a serverless function that accepts JSON). Until then Send opens the visitor's mail app with the message ready and says so.

## Hosting
- **Vercel (recommended):** framework preset "Other", no build command, output directory `.`. Brotli is automatic.
- **GitHub Pages:** deploy from branch, root folder. `.nojekyll` is required (Jekyll drops `_ds/` otherwise). Delete `Archive/`, `docs/` and `uploads/` from the branch you publish.
- Add the custom domain in the host's settings and turn on HTTPS.

## Server settings that matter most
- Brotli or gzip on `.js`, `.css`, `.html`, `.json`. `_ds_bundle.js` is ~546 KB raw, ~90 KB compressed.
- Cache: `assets/*` for a year, immutable (rename files when they change); `_ds/*` 30 days; HTML, `shared/*` and page scripts revalidate.
- HTTP/2 or HTTP/3.

## Budgets (check before each release)
- First view JS: support.js + _ds_bundle.js + data.js + site.js. GSAP + Lenis load after first paint; three.js only when the node field will run (not reduced motion, low power or save-data).
- Images: covers 1,600 px under ~120 KB with an 800/640 px variant for phones (`VARIANTS` in data.js); OG image 1200×630 JPEG under 150 KB. No data-URL images.
- Fonts: Plus Jakarta Sans 400 to 800, JetBrains Mono 400 to 600, Arabic families only when Arabic renders.
- Run `Version 1/Site Audit.dc.html` to `Done · PASSED`; Lighthouse LCP under 2.5 s on 4G, CLS under 0.1.
