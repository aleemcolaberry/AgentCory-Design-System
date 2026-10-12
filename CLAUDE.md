# Project memory

## Author credit (use on all social posts/templates)
- Name: Md Abdul Aleem
- Role: Frontier Product Designer and Analyst | Colaberry | Ex-NTTDATA (exact string, every time; never the older "UX / Product Designer and Analyst @Colaberry")
- Profile picture (DP): always use `assets/author-avatar.png` (colour office portrait, navy blazer, warm bokeh; source `uploads/Confident Office Portrait with Warm Bokeh.png`). Never use any other photo. Copy it into each template's folder and render as a plain circular <img> (object-fit:cover), no image-slot placeholder.

## Writing rules (whole project)
- No em dashes. Use commas, colons, or full stops.
- Text must never overflow or clip. Hard rule, zero exceptions: no `white-space: nowrap` on anything longer than 4 words (numbers, codes, 1 to 4 word labels may use `.cory-nowrap`), no `text-overflow: ellipsis` or `line-clamp` on copy, no fixed heights on boxes that hold a sentence, no `&nbsp;` pinning of sentences, fluid type sizes, `min-width: 0` on flex/grid children, body lines under 80ch. When a line is tight, shorten the copy or let it wrap; never shrink or clip the box.
- Before any page, card, kit or template ships, run `_audit/Audit.html` (default, `?set=templates`, `?set=fit`, `?set=responsive`, `?set=type`) and make the `type` and `clip` counts read 0 for that page. Headings on dark or brand surfaces use `.cory-on-ink` so navy never sits on navy.
- RTL-ready: use logical CSS properties only (inline-start/end, never left/right), multiply horizontal motion by var(--dir), keep numbers/code/emails LTR (.cory-ltr), never letter-space or split Arabic into letters.

## Accessibility and quality gate (every new or edited page, card, kit, template, export)
This is a release gate, not a guideline. A page that fails any line below does not ship. Target: WCAG 2.2 AA.

Colour and theme
- Colour comes from semantic tokens only: `--text-*`, `--surface-*`, `--border-*`, `--on-ink-*`. Never hard-code a hex, `rgb()`, `white`, or a raw palette step (`--navy-800`, `--slate-600`, `--white`) for text, surfaces or borders. Raw steps are allowed only inside `tokens/` and in swatches that display the palette itself.
- Every fluid page must work in both themes. Set text and its surface from the same token family so they flip together; a themed text colour on a hard-coded light surface is the bug that broke dark mode in October 2026.
- A fixed artboard (social post, carousel slide, one-pager, email, deck slide, print page, export) is designed for one theme. Pin it by putting `data-theme="light"` (or `"dark"`) on the same element as `data-screen-label`, and make sure the pinned element (or its backdrop wrapper, pinned the same way) paints its own background, so its text never sits on the page theme's surface. Do not leave an artboard unpinned.
- Contrast: 4.5:1 for text under 24px (under 18.66px bold), 3:1 for larger text, 3:1 for control boundaries, icons that carry meaning and focus rings. White text sits on `--gradient-brand-deep` or an ink surface, never on `--gradient-brand`. Link blue on light is `#1568D4` or darker, never `#1B79EC` below 24px.
- Never signal state by colour alone: pair it with an icon, label or shape.

Text and layout
- No overflow, no clipping, at 320, 360, 768, 1024 and 1440 wide, and at 200% zoom. The text rules above apply. Rows of label plus value use `flex-wrap: wrap`; flex and grid children that hold text get `min-width: 0`; large numerals use `clamp()`.
- No horizontal page scroll at any width. Body text is 16px or larger on fluid pages; nothing under 12px anywhere.
- Text must survive WCAG 1.4.12 spacing (line-height 1.5, paragraph spacing 2em, letter-spacing .12em, word-spacing .16em) without clipping, so no fixed heights on text boxes.

Structure and interaction
- `<html lang>` is set, one `<h1>` per page or artboard, heading levels never skip (h1, h2, h3). If a heading needs a smaller look, keep the level and restyle it with a class.
- Every interactive element has an accessible name (visible text, `<label for>`, or `aria-label`), is reachable by keyboard, and shows `:focus-visible` with a 3:1 ring. Never `outline: none` without a replacement.
- Hit targets are at least 24x24px, and 44x44px on touch layouts (under 768px wide).
- Images that inform have `alt`; decoration has `alt=""` or `aria-hidden="true"`. Icon-only buttons have `aria-label`.
- Motion respects `prefers-reduced-motion`. Nothing flashes more than three times a second.
- Form fields have a visible label, errors are text tied with `aria-describedby`, and status changes use `aria-live`.

Proof (run before saying a page is done)
- Add the page to the right set in `_audit/Audit.html`, then run `node _audit/run.mjs` (all sets, light and dark). It must report 0 for `contrast`, `clip`, `canvas`, `name`, `type`, `misc`, `offscreen` and `overlap`. Open `_audit/Audit.html?set=…&theme=dark` in a browser to see details.
- `data-audit-ok="clip"` (or `contrast`, `overlap`) silences the probe for one element. Use it only for decoration the probe cannot judge (a marquee, glyphs drawn over an SVG fill) and say why in a comment next to it. It is never a way to pass real text.
- Record each audit pass in `guidelines/heuristic-audit.md`.

## Responsive rule (every new or edited page)
Every page must be correct on every screen from 320px to 1920px wide, not only at the widths it was designed at.

- Every HTML file carries `<meta name="viewport" content="width=device-width, initial-scale=1">`. Never set `user-scalable=no` or `maximum-scale`.
- Build mobile first. Use the system breakpoints only: 640, 768, 1024, 1280, 1536. Prefer intrinsic layout (`repeat(auto-fit, minmax(min(100%, Npx), 1fr))`, `flex-wrap: wrap`, `clamp()`) over a breakpoint; a breakpoint is for a change of structure, not for squeezing.
- No horizontal page scroll at any width. A row of items (swatches, stats, tiles, chips, columns) must wrap; no fixed pixel width wider than 280px on anything outside a fixed artboard; images and media are `max-width: 100%`.
- A horizontal scroller is allowed only as a deliberate component (a rail). It needs `scroll-padding-inline-start` equal to its gutter, `scroll-snap-type: x proximity` (never `mandatory` when a heading scrolls with it), keyboard reach, and its heading outside the snap flow.
- When a grid collapses, anything that depended on column alignment (a separate row of labels under a row of tiles) moves inside the tile or is hidden; never leave labels pointing at the wrong item.
- A single column layout centres or stretches its child; nothing is left hugging one edge with `margin-inline-start: auto`.
- Fixed elements (chat launcher, sticky header, toolbars) reserve room: content they could cover gets matching padding, and anchored sections use `scroll-margin-top`.
- Fixed artboards scale as a whole with `data-fit-canvas`; they never reflow and never overflow the viewport.
- Proof: `node _audit/responsive.mjs` (ten widths, every tracked page) must print `pages with overflow: 0`, and you must look at a screenshot at 360, 768 and 1280 before calling a page done. A probe cannot see a bad layout that happens to fit.

## State coverage rule (every new or edited surface)
A surface is not designed until every state the reader can land in is designed. The happy path is one state out of seven.

- Every surface that shows data or accepts input answers all of these, using the system components, not ad hoc markup:
  - **Loading:** `Skeleton` when the layout is known, `Spinner` or `Button loading` for one action, `ProgressBar` when progress is measurable. Announce it (`role="status"`, `aria-live="polite"`). Nothing stays blank for more than 300ms.
  - **Empty:** `EmptyState` saying what belongs here and offering one action. Never a blank area, never a bare "No data".
  - **Error:** `Alert tone="danger"` or an inline field error, in plain language, first person ("I couldn't send that"), saying what happened and what to do next, with a retry. Never a code alone, never blame the reader, and keep what they typed.
  - **Partial:** show what loaded and mark what did not; one failed block never blanks the page.
  - **Offline and slow:** say so and queue or retry; do not fail silently.
  - **Success:** confirm in words (`Toast`, `Alert tone="success"`), not by colour alone.
  - **Disabled:** explain why nearby instead of only greying out.
- Every form: visible labels, validation on blur and on submit, errors as text tied with `aria-describedby`, focus moves to the first error, submit shows `loading` and cannot double-fire.
- Every page that depends on scripts ships three page-level states: a loading state in the markup, a `<noscript>` message, and an error with "Try again" if the scripts never arrive or the app throws. React kits get all three from `ui_kits/kit-shell.css` and `ui_kits/kit-shell.js` (`kitMount('App')`); copy that pattern.
- Every image has a fallback: `Avatar` falls back to initials, `MediaFrame` to its placeholder; a plain `<img>` needs `alt` and a sized box so a failed load does not collapse the layout.
- Long or missing content is a state too: design for a 3x longer name, an empty list, one item and many items.
- Animated entrances must never be the only way content becomes visible: if the script or observer fails, content shows (`html.cory-js` and `html.anim` gates, the 2.5s safety net in `tokens/reveal.js`).
- The site has a `404.html`; any new top-level area gets a link there if it is a common destination.
- Proof: for each new surface, list its states in the PR or hand-off note and show a screenshot of loading, empty and error. `guidelines/cards/start-states.html` is the reference.

## Design quality rule: above the fold, content, type and icons (every new or edited page)
The first screen has one job: say what this is, why it matters, and what to do next, in five seconds.

Above the fold (the first 900px at 1440 wide, the first 780px at 390 wide)
- One `h1` that states the outcome, not the feature. One supporting sentence of 12 to 24 words. One primary action and at most one secondary. Proof (a number, a logo row, a quote) visible without scrolling on desktop.
- One focal point. One gradient or accent element per screen (the headline phrase or the lead metric, not both and not every stat). Decorative chips and glows never touch or cover the headline, the copy or an action.
- Nothing essential depends on animation finishing. Take the screenshot after the intro settles and check that the headline, copy and actions do not overlap.

Sections
- Each section follows the same pattern: overline (what it is), title (the claim), one line of support, then the content. No section opens with decoration.
- Section rhythm comes from `--section-y`; cards in one grid share height, padding, radius and elevation. Three sizes of radius and three levels of elevation per page at most.
- Alternate surfaces (`--surface-page`, `--surface-card`, one ink section) to mark sections; do not stack two ink sections.

Content
- First person for Cory ("I answer every inquiry"), "you" for the reader. Lead with the number. Short, concrete, no filler, no em dashes.
- Every number, count and date in copy must be true for the repo today (component count, template count, the year). When you add or remove a template or component, update the copy that counts them, and its translation key in `scripts/showcase-i18n.js`.
- Casing is consistent within a surface: sentence case by default. Button labels are 1 to 4 words and start with a verb.
- The author credit string and avatar rules above apply to every social template.

Typography
- Use the type scale tokens (`--text-*`, `--text-fluid-*`), `--leading-*` and `--tracking-*`; no one-off font sizes on fluid pages. Display and headings in Plus Jakarta Sans 700 to 800 with tight tracking; body 400 to 500 at 16px or more; numbers, codes and token names in JetBrains Mono.
- Headings use `text-wrap: balance`, body uses `text-wrap: pretty`, measure stays within 45 to 75 characters. No orphaned single word under a headline at 1440, 768 or 390.
- Overlines are 12 to 13px, bold, uppercase, tracked, in `--text-link`; never use an overline style for body copy.

Iconography
- Icons come from the owned set (`<Icon name>`; Lucide names alias). One style: 24px grid, 1.75 stroke, `currentColor`. Never mix in emoji, brand logos or another icon family as UI icons (the wave in Cory's greeting is copy, not an icon).
- If the set has no icon for a concept, use a text label or add the icon to the set. Never ship an empty tile, circle or placeholder where an icon should be.
- An icon that carries meaning has a text label next to it or an `aria-label`; decorative icons are `aria-hidden`. Icon sizes are 16, 20, 24 or 32. Directional icons flip in RTL.

## Motion, hover and card layout rule (every new or edited page)
Motion
- Durations and easings come from `tokens/motion.css` (`--duration-*`, `--ease-*`); no magic numbers. Animate `transform`, `opacity`, `filter` and `clip-path` only. Never animate `width`, `height`, `top`, `left`, `inset`, `margin` or `padding`, and never write `transition: all`.
- One signature animation per screen. Entrances run once, last under 700ms, and stagger by 60 to 160ms.
- An animation must end in the natural layout of the element. Never finish with `clearProps: 'transform'` (or by removing a class) when a stylesheet still sets a start pose for that element; set the rest pose explicitly (`transform: none`). This is the bug that dropped the Showcase headline onto its subtitle.
- Content is visible without the animation: start poses apply only under `html.cory-js` or `html.anim`, and a timer reveals everything if the observer or the animation clock never runs. A fully clipped element (`clip-path: inset(100%)`) is invisible to IntersectionObserver, so reveal it by its layout rect (see `tokens/reveal.js`).
- `prefers-reduced-motion: reduce` keeps state changes and drops movement, parallax, loops and smooth scroll. Test with it on.
- Horizontal motion is multiplied by `var(--dir)` so it mirrors in RTL.

Hover, focus, press
- Every link and control changes on hover, shows the focus ring on keyboard focus, and has a pressed state (`--press-scale`). Check the three together.
- An inline `color` or `text-decoration` beats `a:hover`. Give links their colour through a class, or rely on the `base.css` fallbacks (underline for links in `nav` and `footer`, a brightness shift for buttons). Do not ship a link whose hover does nothing.
- Hover is an enhancement, never the only way to reach content or an action; anything revealed on hover is also revealed on focus and visible on touch. Hover lifts sit inside `@media (hover: hover)`.
- Hover never moves neighbours: lift with `transform` and shadow, not with margin, border width or size.

Cards
- Cards in one row are the same height (`align-items: stretch`, the default; do not set `start` on a card grid) and share padding, radius, border and elevation. Actions and footers pin to the bottom (`margin-top: auto`).
- Card grids are intrinsic: `repeat(auto-fit, minmax(min(100%, 260px), 1fr))` with `--grid-gap`. A last row with one orphan card is acceptable only when it spans or centres.
- Inside a card: one title, one supporting line, at most one action; text children carry `min-width: 0`; media has a fixed aspect ratio so cards do not jump when it loads.
- A whole-card link has one accessible name and one focus ring; never nest interactive elements inside it.
- Proof: hover and tab through every control on the page, and compare card heights per row at 1440, 1024 and 768.

## Contrast rule, measured on real pixels (every new or edited page)
The gate above states the ratios. This rule says how to meet them and how to prove it, because a colour pair that passes on paper can fail on the surface it actually lands on.

- Judge text against what is really behind it: the gradient stop, the photo, the tinted overlay, the faded state. A probe that reads only CSS colours cannot see gradients or images, and the October 2026 pass found 74 failures it had missed, most of them white text on the bright brand gradient (about 2.5:1).
- White text goes on `--gradient-brand-deep` (`#1568D4` to `#0E7F9E`), on `--gradient-ink`, or on an ink surface. It never goes on `--gradient-brand` (`#258AFD` to `#29BEDD`) at any size under 24px. On a deep-gradient card every piece of text is white or an on-ink token; navy text on the deep gradient is about 3.2:1 and fails.
- Gradient text: on a light surface use `--gradient-brand-text` (`#1B79EC` to `#1193B5`) and only at 24px or more; for a numeral sitting on a tinted glow use the deep stops. On an ink surface use the bright `--gradient-brand`. Never use gradient text for body copy or labels.
- Never lower contrast to show a state. Do not dim text with `opacity` for sending, loading, read-only or secondary content; use a label, an icon or a muted token that still passes (`--text-muted`, `--text-subtle`). Only a truly disabled control is exempt, and its meaning must not depend on reading it.
- Text over an image sits on a scrim that guarantees the ratio for any image (`MediaFrame` overlay), never on the bare image.
- Placeholders use `--text-subtle` (set once in `base.css`); a placeholder is never the only label.
- Small grey text on the page tint: `#4F5F75` or darker on `#F4F5FA`. `#5B6B80` is 4.3:1 and fails.
- Non-text contrast is 3:1: control boundaries use `--border-interactive`, never `--border-strong` or `--border-default`; icons that carry meaning and focus rings meet 3:1 against their surface.
- Check every state, not only rest: hover, focus, pressed, selected, error, sending, and both themes for fluid pages.
- Proof: `node _audit/run.mjs` (DOM probe, both themes) and the pixel probe `node _audit/contrast-pixels.mjs <page> <width> <light|dark|-> <out>` followed by `python _audit/contrast-pixels.py <out>`. The pixel probe hides the text, screenshots the page and compares each text colour with the pixels behind it. Read its findings with a screenshot beside you: large display text that overlaps a neighbouring line can be a false alarm; small text never is.

## Performance and file rule (every new or edited page)
The site is static files on GitHub Pages. It should paint in well under a second on a normal connection and stay light.

Budgets per page (measure with `node _audit/perf.mjs <page>`)
- Under 40 requests and under 700 KB transferred for a fluid page; under 1.5 MB for a social artboard with artwork. LCP under 1.5s locally, CLS under 0.05. No HTTP errors, no broken images.

Loading
- Styles are linked from the markup in `<head>`, never injected by script: the first paint must already be styled. Add `preconnect` for the font and CDN origins and link the font stylesheet directly as well as through `styles.css`.
- Scripts that are not needed for the first paint are `defer`. Never ship a development build, and never compile in the browser: no Babel standalone, no `react.development.js` on a live page. The UI kits load production React plus a precompiled `kit.js`; after editing any kit JSX run `node scripts/build-kits.mjs` (`--check` fails when a `kit.js` is stale).
- Never embed a live page in an `<iframe>` as a preview. Use a static picture from `assets/previews/` (`node _audit/previews.mjs` regenerates them) and link to the page.
- Load each library once. Do not load a whole icon library for a handful of icons when the owned `Icon` set has them.

Images
- Size the file for how it is shown: at most twice the displayed width (three times for artwork that is exported as a PNG). An avatar shown at 56px is a 256px file, not a 500 KB one. Photos are JPEG or WebP; flat art and logos are SVG; PNG only when transparency is needed.
- Every `<img>` has `alt`, and `width` and `height` (or an `aspect-ratio` box) so nothing shifts when it loads. Images in the first screen load eagerly; everything below it gets `loading="lazy"` and `decoding="async"`. Never lazy-load the LCP image, and never lazy-load an image that an export script captures.

Files
- One source of truth per thing. Sources: `tokens/`, `components/`, `ui_kits/*/*.jsx`, `templates/`. Generated: `_ds_bundle.js`, `ui_kits/*/kit.js`, `assets/previews/`. Never hand-edit a generated file without making the same change in its source, and say which script regenerates it.
- Shared assets live in `assets/`; a template keeps only what is unique to it in its own folder. Deliverables (PNG and PDF exports) live in `exports/` and are never referenced by a page. Scratch work, screenshots and raw downloads stay out of the repo (`archive/`, `uploads/`, `Claude Design Files/`).
- File and folder names are lowercase kebab-case for anything new, with no spaces, so URLs need no escaping.
- Every live page has a `<title>`, a meta description, the favicon link and `lang`. Missing paths land on `404.html`.
