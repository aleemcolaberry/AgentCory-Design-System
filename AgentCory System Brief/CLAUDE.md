# AIUXAleem project rules (apply to every page and component, always)

Design system: AgentCory (`_ds/…`, compiled into `shared/site.css`). WCAG 2.2 AA is the floor. A page is not done until its audit passes with 0 failures.

The live site is `Version 1/`: every public page, Admin, `Header`, `Footer`, `data.js` (all content, EN + AR), `boot.js`, `motion.js`. It is checked by `Version 1/Site Audit.dc.html`. `Archive/` is the previous site, kept for reference and for parts to reuse; it is not deployed. When something from Archive moves to Version 1, rebuild it to Version 1's rules (tokens, data.js content, states); never import an Archive file from Version 1.

## Adding a page (Version 1/)
- Copy an existing `Version 1/` page's helmet: viewport meta, `<title>`, description, the Open Graph + Twitter block (`og:title`, `og:description`, `og:image` = `assets/og-home.jpg`), theme-color, favicon, both font preconnects, `boot.js`, fonts, `../shared/site.css`, `_ds_bundle.js`, `data.js`.
- Structure: `<dc-import name="Header" current="…">` → `<main id="main" tabindex="-1">` → `<dc-import name="Footer">`. The header provides the skip link and the load-failure alert. Exactly one `<h1>`; headings never skip a level.
- Add the page to the `pages` list in `Version 1/Site Audit.dc.html`, to the Sitemap, and to `docs/DEPLOY.md` (ships / stays out).
- Run it: open `Version 1/Site Audit.dc.html` and keep the tab in front. It finishes with `Done · PASSED` or `Done · FAILED`. `?pages=home,work` scopes a run, `?fails=1` hides warnings. Every page × light/dark × EN/AR × 12 widths × landscape × `?stress=1` × text-spacing × `?state=empty`, plus a source lint.
- Archive pages keep their own tools (`Archive/QA Sweep.dc.html`, `Archive/A11y Audit.dc.html`): open each file and keep the tab in front. They start on their own and finish with a status line `Done · PASSED` or `Done · FAILED` above the report. `?pages=<short>` scopes a run; `?manual=1` turns the timer off so you can step it with `AIUXSweep.tick()` / `AIUXA11y.tick()`. "Running…" means not finished, not passed. Any page also accepts `?audit=1` (prints its audit to the console).

## Colour, theme, contrast
- Only semantic tokens: `--text-*`, `--surface-*`, `--border-*`, `--action-*`; on `--surface-ink` / `--gradient-ink` use `--on-ink-*`. No hex, `rgb()`, `white`/`black` or alpha-muted text in templates. Light and dark then switch for free; never hard-code a colour that only works in one theme.
- Text 4.5:1, large text (≥24px, or ≥18.66px bold) and UI boundaries 3:1. `--gradient-brand` / `--gradient-text` only on text ≥24px; white labels sit on `--gradient-brand-deep` (DS Button primary does this).
- Never colour alone: current nav item = weight + underline (`[data-nav-link][aria-current]`); links inside running text are underlined; errors carry an icon and words.

## Contrast (every state, both themes)
- Approved text on page / card / raised / sunken surfaces: `--text-strong`, `--text-body`, `--text-muted`, `--text-subtle` (the lowest allowed for any readable text), `--text-link`, `--text-success`, `--text-warning`, `--text-danger`. On ink panels only `--on-ink-strong/body/muted/link`. White labels only on `--gradient-brand-deep`.
- `--text-disabled`, `--border-subtle` and `--border-default` are decorative: never the only colour of something a person must read or find. A control whose outline is its only affordance uses `--border-interactive` (3:1).
- Every state keeps contrast: hover, focus, active, selected and visited colours meet the same 4.5:1 as rest. Hover goes darker in light theme and lighter in dark (`--text-link-hover`), never toward the background.
- Animated text is readable at every frame: reveals fade from transparent (no text is shown half-faded at rest), and colour transitions such as the manifesto ink-in start at `--text-subtle` or stronger.
- Never lower text contrast with `opacity`, `rgba` or `color-mix` toward the background. Muted text means a muted token.
- Text over a photo or screenshot sits on a solid or `--surface-overlay` scrim that gives 4.5:1 against the image's lightest area. Purely decorative text on covers is `aria-hidden`.
- Gradient-clipped text (`--gradient-text`, `--gradient-brand`) only at 24px or larger, on page or card surfaces (3:1 per stop).
- Focus rings use `--border-focus`: 3:1 against page, card and ink surfaces.
- Feedback surfaces (`--surface-success|info|warning|danger`) carry `--text-strong` / `--text-body` / `--text-link` and their own tone; all pairs are in the matrix, light and dark.
- The audit checks this two ways on every page, light and dark: a live scan of every visible text node against its real background (including gradients and alpha), and a token matrix of every pair above, which covers hover and focus colours a scan can't trigger. New tokens or surfaces get added to that matrix in `shared/a11y-audit.js`.

## Type and measure
- Sizes only from tokens (`--text-fluid-*`, `--text-h*`, `--text-body*`, `--text-caption`, `--text-mono*`, `--text-metric-*`). Minimum 12px (11px only for DS badges).
- Paragraph width: `--measure-body` (≈75 characters) or `--measure-lead` (≈65). Headlines `text-wrap: balance`; body `text-wrap: pretty`.
- No em dashes in copy. Numbers, emails, URLs and code stay LTR (`<bdi>` or `lang="en" dir="ltr"`). Arabic strings live in `i18n.js` with the same keys as English.

## Text never overflows
- Never `white-space: nowrap` on anything longer than a 1–2 word label or a number; never `text-overflow: ellipsis`; never a fixed height on a box that holds text.
- Grids use `minmax(0, 1fr)` tracks, `.cory-cards`, or container queries (`data-cq`, `data-cq-grid`, `data-cq-3`). Never a bare `repeat(n, 1fr)`.
- Don't override the global wrapping rules in `site.css` (block copy breaks anywhere; inline labels break only to avoid overflow).
- Layout is logical: `margin-inline-*`, `padding-inline-*`, `inset-inline-*`, `text-align: start`. Never left/right.
- Must hold at 320, 360, 375, 390, 414, 600, 768, 820, 1024, 1280, 1440 and 1920px, in landscape phones (≤500px tall), in Arabic, with `?stress=1`, and under the WCAG 1.4.12 text-spacing override.

## Consistency (every page looks like one site)
- Page width: always `.cory-container` (add `.cory-container-narrow` for reading pages). Never a hand-built `max-inline-size` + `padding-inline` box: the gutter must match the header and footer.
- Type scale by role: page `<h1>` = `--text-fluid-display` (reading pages: `--text-fluid-title`); section `<h2>` = `--text-fluid-title`; sub-section `<h2>`/`<h3>` = `--text-h2` / `--text-h3`. Headings extrabold, `--tracking-tight` or tighter.
- Section header = `<p class="cory-overline">` + heading. Never re-type the overline styles inline.
- Vertical rhythm: sections use `--section-y`; stacks use `gap` with `--space-*`. No literal px spacing outside fixed-size artboards (OG Card).
- One label per action, everywhere: calendar link = "Book a 15-min call", email = "Email me" (context may add "about this"), resume = "View resume" (Drive viewer, opens in a new tab). The header "Get in touch" (v3: "Let's talk") opens Contact; closing CTA sections still carry `data-contact`.
- Card groups of 3 use `data-cq` + `data-cq-balance` (or `data-cq-3`) so no width leaves one orphan card.
- The audit fails off-scale headings and hand-built containers, and warns on copied overlines.

## Responsive and viewport (every page, every screen)
- Every page's `<helmet>` has `<meta name="viewport" content="width=device-width, initial-scale=1">`. Never `maximum-scale` or `user-scalable=no` (people must be able to zoom).
- Design mobile-first and let content set the breakpoints. Use the `shared/site.css` breakpoints (640 / 768 / 1024 / 1280) for page layout, and container queries (`data-cq`, `data-cq-grid`, `data-cq-3`, `data-cq-balance`) for anything that sits inside a card or a column. Never add a one-off `@media` width for a single component.
- Full-height blocks use `min-block-size` with `svh` (`calc(100svh - var(--header-height))`), never `100vh` or a fixed height. Short landscape phones (≤500px tall) get the compact header and the smaller display type from `site.css`; don't undo that.
- Media sits in an `aspect-ratio` box (`--aspect-case`, `--aspect-video`, `--aspect-portrait`) with `object-fit: cover`; never a fixed pixel height. Repo and product screenshots use `object-position: top center` so the header of the screen stays in view.
- Fixed pixel widths only for icons, avatars and tap targets. Everything else is `min(100%, Npx)`, `max-inline-size`, `%` or a grid track.
- Links and buttons never grow past their container (`site.css` caps them at `max-inline-size: 100%`). When a link or button holds an icon and text, put the text in its own `<span>` so it can wrap next to the icon.
- Pinterest-style layouts use CSS columns (`columns: 3 300px`) with `break-inside: avoid` and `margin-block-end: var(--grid-gap)` on each card, so there are no empty gaps inside the grid. Uneven column bottoms are expected; use a fixed grid when the edges must line up.
- Horizontal scrolling is only allowed inside a deliberate scroller (the Work row) that fits the screen width itself. The page never scrolls sideways.
- Hidden helper text uses `.cory-visually-hidden` only. Never move text off-screen with negative `left`/`right` or `text-indent`.
- A two-column hero (`.cory-split`) stacks under 1024px: the h1, value line and primary action come first, the visual follows. Never let a visual push the primary action below the fold on a phone.
- Nav and footer links are at least 44×44 (`min-inline-size` and `min-block-size: var(--tap-target)`), so a two-letter Arabic label is still a full target.
- Before calling a page done: Site Audit passes at every width above, landscape (740×360) and `?stress=1`, in light and dark, in Arabic (RTL), under text spacing and with `?state=empty`.

## States (every surface answers six: default, loading, empty, error, partial, success)
- Empty: every list read from `data.js` (`AX.list`) handles zero items. Index pages (Work, Case Studies, Blog, Videos, Read) show a `[data-empty-state]` block: 44px ink icon tile, a title that says what is missing, one line on what happens next, one action. Composite pages (Home) omit the block instead of showing an empty frame, and keep layout whole (columns follow what is present). Filters distinguish "nothing matches" (Clear filters) from "nothing exists yet". Controls that only make sense with several items (deck arrows, pagers) hide with fewer than two.
- Prove it with `?state=empty` (every collection empty); the audit runs it on every page and fails an empty list with no empty state.
- Loading: any wait over 300 ms shows a state (DS `Button loading`, skeleton in an `aria-busy` region). Embeds load on request and time out into an error with Retry.
- Error: never claim success that did not happen. A form only says "sent" after a real delivery (`site.formEndpoint`); without one it hands off to the mail app and says so; a failed send keeps the words in the form, explains, and offers another route. Clipboard copy falls back to selecting the text and saying "press Ctrl+C". If `data.js` never loads, the Header shows a bilingual alert with Reload after 8 s.
- Broken images never show the browser icon: `data.js` fades a failed `<img>` out (alt text kept) and the ink panel behind every media box shows. Every media box therefore has a `--gradient-ink` (or card) background.
- Not found: unknown `?slug=` shows a designed not-found state with a way back; unknown URLs go to `404.dc.html`.
- Validation: on blur, never per keystroke; on submit, a `role="alert"` summary ("2 fields need a fix") and focus on the first invalid field. Error copy says how to fix it. Results live in a persistent `role="status"` region that exists before the message arrives.
- Feedback surfaces: `--surface-success|info|warning|danger` + `--border-*` of the same tone, an icon in `--text-*` tone and words. Never colour alone.
- Voice: first person on public pages ("I could not send that"), neutral in Admin. No "Oops", no blame.
- Admin ships with the site and is reached from the footer's "Admin sign-in" link. It is `noindex` and disallowed in `robots.txt`. Its sign-in is a prototype gate and its edits live in the browser (`localStorage`) until `AX.save()` points at a real backend; say so in Admin, never imply a published change reached other visitors.

## Design quality (every section, every page)
- Above the fold, at 1280×720 and 390×844 without scrolling: what you do (`<h1>`), one sentence of value, and the page's primary action.
- One primary (gradient) button per view, not counting the header's "Let's talk". Sample UI inside a page (demos, mock screens) uses `ink` or `secondary`, never `primary`.
- Say each fact once. A number, project or claim shown in one section is not repeated in another; link to it instead. Proof numbers are outcomes (what changed), not outputs (what was made).
- Section rhythm: backgrounds alternate `--surface-page` and `--surface-card` (with a `--border-subtle` hairline); two card sections never touch. A section that continues the one above (`padding-block-start: 0`) shares its background.
- Icons: Lucide outline, `stroke-width="1.75"`, always `aria-hidden` beside real text. Sizes: 16px inline with text, 20px in buttons, 22px inside a 44×44px `--gradient-ink` tile with `--on-ink-strong` icon. A diagonal arrow opens another site in a new tab; a straight arrow stays on this site in the same tab.
- Repeated lead-ins go in the overline once ("A designer who"), not in every item of a list.
- Card tiles carry a meaningful Lucide icon, not a running number; numbers belong to ordered steps only. Icon sizes are 16 / 20 / 22 only (never 14 or 18); the audit warns on anything else.
- Copy shape: overline 1 to 3 words; section heading one line of up to about 8 words where it fits; lead paragraph within `--measure-lead`. Every card has one action, and its link text says where it goes.
- `role="status"` and `aria-live` only on content that changes after load.
- The audit fails a second primary button in the first view (sample UI inside `[data-demo]` or `[data-sample-ui]` is exempt) and two touching card-background sections.

## Performance (every page loads fast)
- Images are real files in `assets/`, never data URLs: covers 1,600 px JPEG or WebP under about 120 KB, avatars and icons at 2× their display size. Below-the-fold images get `loading="lazy" decoding="async"` and sit in an `aspect-ratio` box so nothing shifts. Nothing in the first view is lazy.
- An `<image-slot>` that ships with a picture gets a `src` to a file in `assets/`; don't rely on the editor's dropped-image store for anything public.
- Heavy enhancements (three.js, video players, large libraries) load only when they will actually run: after first paint, and never under reduced motion, save-data or low-power. No `modulepreload`/`preload` for optional code.
- Every page that loads Google Fonts preconnects to fonts.googleapis.com and fonts.gstatic.com. Only the weights in use; no italics unless the page sets italic text.
- Glows are radial gradients; never stack `filter: blur()` on top of one. `backdrop-filter` only on the sticky header.
- Every public page ships Open Graph + Twitter tags (`og:image` 1200×630 JPEG under 150 KB); the audit fails a page without them.
- `<img>` in the first view: no `loading="lazy"`. Below it: `loading="lazy" decoding="async"`. Every image has a reserved box (`aspect-ratio` on itself or its parent, or width/height). Never ship an image more than ~2.5× its displayed width. The audit fails broken and data-URL images and warns on the rest.
- The raw template is parsed by the browser before holes resolve, so `<img src="{{ x }}">` requests the literal URL unless it is `loading="lazy"` inside `<sc-for>` (with `srcset`/`sizes` before `src`). Every other data-driven image (first-view covers, single images) is built with `AX.img(src, props)` in `renderVals()` and placed with `{{ x.img }}`. Never set `src`/`srcset` on an `<img>` already in the page. The lint fails it.
- Hover transforms live in `site.css` (`data-lift`, `data-pop`) behind `@media (hover: hover)`; never `style-hover="transform…"` (the lint fails it).

## File system and deploy
```
/                      config only: CLAUDE.md, github.md, index.html, 404.html, vercel.json, .vercelignore, robots.txt, .nojekyll
/Version 1/            the live site: public pages, Admin, Header, Footer, data.js, boot.js, motion.js, admin-schema.js, support.js, Site Audit
/Archive/              previous site (pages, components, i18n.js, cases.js, its QA tools). Reference only, never deployed
/shared/               used by both versions: site.css (the one stylesheet), aiuxaleem.css (its source), site.js, a11y-audit.js
/assets/               final media only: cases/, media/, certs/, downloads/, favicon, og-home.jpg, portraits
/_ds/                  bound design system, never hand-edited
/docs/                 DEPLOY.md, CONTENT.md, State Coverage Audit.md, AgentCory System Brief.md
/uploads/              raw source material, never deployed
```
- Pages in `Version 1/` reach shared files with one `../`: `../shared/site.css`, `../shared/site.js`, `../assets/…`, `../_ds/…`. Nothing in `Version 1/` loads from `Archive/`.
- `shared/site.css` is the one stylesheet: every addition goes in `shared/aiuxaleem.css` and `shared/site.css` together. No page-level `<style>` beyond `@font-face`/`@keyframes`.
- A new top-level folder needs a reason that fits none of the above; put it in this map and in `.vercelignore` if it must not ship.
- Entry points: `index.html` and `vercel.json` send `/` to `Version 1/Home.dc.html`; `404.html` to `Version 1/404.dc.html`.
- `.vercelignore` entries start with `/` (anchored to the root), so a name in one folder never drops a same-named file in another.
- Review screenshots, bundles and scratch files are never kept in the project; delete them when the review is done.
- Renaming beats overwriting for any file under `assets/` once it is live (it is cached for a year as immutable).
- New pages and tools go in the lists in `docs/DEPLOY.md` (ships / stays out).

## Interaction and semantics
- Use the DS components (Button, IconButton, Chip, Badge, Card, Tabs, Input…). Targets ≥44×44px (24px is the legal minimum, 44 is ours).
- The accessible name starts with the visible text (2.5.3). Don't put an `aria-label` that replaces visible text; add context with `<span class="cory-visually-hidden">`. Icon-only controls get a `label`.
- Never `outline: none` on focusable elements; the global `:focus-visible` ring must show. Dialogs: focus moves in, Tab stays inside, Escape closes, focus returns to the opener.
- Decorative SVGs and duplicate visuals get `aria-hidden="true"`, with nothing focusable inside them. Images: `<image-slot>` with a placeholder, or `<img alt>`.
- Live updates (counters, toasts, form results) go in `role="status"` / `aria-live="polite"`.

## Motion, hover and cards
- Motion is transform and opacity only, with duration and easing tokens (`--duration-*`, `--ease-*`). Never animate width, height, top or margin. Reduced motion then applies automatically.
- Reveal with `data-reveal` / `data-reveal-group`: content is visible without JS, and the reveal never re-hides something already shown. Numbers count up through `data-stat` + `countUp`. One signature motion per screen (hero lines, the manifesto ink-in, the work row). No flashing; the only loops are the marquee and the glow drift.
- Hover language, one per element type:
  - Text links get `data-link`: underline on hover and keyboard focus, arrow nudges 3px toward where it goes. Never colour alone.
  - Buttons are DS `Button` / `IconButton` (their own hover, press and focus). Never hand-build a button hover.
  - A card lifts on hover only when the whole card is the link (DS `Card interactive` / `href`). A card with a button or link inside stays still; its action carries the hover.
  - Transform hovers sit behind `@media (hover: hover)` so touch screens never get stuck states. Every hover has a matching `:focus-visible`.
- Card anatomy: radius `--radius-xl` (rows and list items `--radius-lg`, CTA panels `--radius-2xl`); padding `--space-6` (compact `--space-5`, feature or ink `--space-8`); `--shadow-sm` at rest; `--border-subtle` hairline. Media first in an `aspect-ratio` box, then overline, title, body, and one action pinned to the bottom with `margin-block-start: auto` inside a flex column.
- Cards in one row are equal height: let grid items stretch (never `align-items: start` on a card grid). A child DC that renders a card puts `data-card-fill` on its root so the card fills the cell. Groups of 2–4 use `data-cq-balance`, `data-cq-grid` or `.cory-cards`; masonry (`data-masonry`, CSS columns) is the only place heights may differ.
- Icon tiles are 44×44px with a 22px icon, in every card and section.
- The audit fails a text link with no hover treatment, and cards in one grid row with different heights.
