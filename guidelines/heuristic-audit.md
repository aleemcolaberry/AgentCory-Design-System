# Heuristic and accessibility audit, October 2026

Scope: tokens, base styles, all 29 components, 33 Design System cards, both UI kits, the Showcase, the NotebookLM guide, the project thumbnail and all 20 templates. Method: a static scan of every source file (em dashes, `nowrap`, `text-overflow`, physical `left/right`, type under 11px, images without `alt`), WCAG contrast math on every token pair, a code review of each component for roles, names, focus and hit targets, and a rendered probe of every page (`_audit/Audit.html`) that measures computed text contrast, clipped or escaping text, pointer-target size, accessible names, type size, heading order and `lang`.

## Findings and fixes

### Tokens and base styles
- Brand gradient as text failed WCAG at the cyan end (#29BEDD on white is 2.2:1, below even the 3:1 large-text bar). Added `--gradient-brand-text` (#1B79EC → #1193B5, every stop ≥ 3:1 on page and white, 270° in RTL, resolves to the bright gradient in dark). `.cory-gradient-text`, `StatCard`, `Testimonial`, the Showcase, the brand-voice card and every template now clip into it. `--gradient-brand` is decoration only.
- Link hover (`--blue-600`) was 4.2:1 on white. Added `--blue-800` and pointed `--text-link-hover` at it (7.1:1), so a hovered link never drops below AA.
- `--on-ink-border-strong` at 28% white was 2.5:1 against navy; raised to 36% (3.1:1) so on-ink controls keep a perceivable boundary. `.cory-btn-on-ink` strengthens its border on hover.
- Added `--gradient-brand-deep-135` for diagonal fills that carry white text (brand `Card`, chat launcher).
- `base.css` now gives every button, tab, switch, input and select a 24px minimum box (WCAG 2.5.8).
- Readme contrast figures corrected to measured values (text-subtle is 4.9:1 on page, border-interactive 4.2:1 on page).

### Components
- `Button`: inline `outline: none` suppressed the global focus ring, and the focus shadow was built as `var(--shadow-focus), none` for ghost and on-ink variants, which is invalid CSS, so those variants had no visible focus at all. Focus now draws the 2px outline plus a valid shadow.
- `Input`, `Select`, `Toggle`: removed inline `outline: none` so the global `:focus-visible` ring applies.
- `Toggle`: off-state track was `--border-strong` (1.9:1 on white, 2.2:1 in dark), below the 3:1 non-text minimum; now `--border-interactive`. The control gets a 2px transparent border so the small size meets a 24px pointer target without changing its look; the error state is drawn as a ring.
- `Chip`: removable chips had a 20×20 remove button and a 14px-tall label button; both are now ≥ 24px.
- `ChatBubble`: the Retry text button was 28×17; padded to 24px. The "Sent" check now has `role="img"`.
- `Tooltip`: `white-space: nowrap` with `max-width: 240px` would have let long labels spill past the bubble; labels now wrap inside `max-content` up to 240px.
- `ProgressBar`: success / warning / danger fills (the 500 hues) were 1.6 to 2.0:1 against the track; they use the 700 text tones (≥ 4.9:1).
- `Card variant="brand"`: white text on the bright gradient failed; uses the deep diagonal gradient.
- `MediaFrame`: overlay scrim deepened (0 → 84% navy) so white overlay copy stays ≥ 4.5:1 over light placeholders; the empty placeholder now has `role="img"`.
- `ThemeToggle`: a `role="switch"` whose `aria-label` flipped with state read as "Switch to light theme, on". Label is now stable ("Dark theme") and state is carried by `aria-checked`.
- `Alert`, `Toast`: dismiss button margins were physical (`-6px` on the right); now `margin-inline-end`.

### Cards and UI kits
- Type under the 11px minimum (10px / 10.5px) in brand-mascot, color-neutral, spacing-scale, spacing-radius and start-states cards: raised to 11px.
- Physical `margin-left`, `left`, `text-align: left` in color, motion and type cards: converted to logical properties; the motion-scale demo bar now uses `--gradient-brand-deep`.
- Contrast card: figures corrected, the gradient-text row now documents `--gradient-brand-text`, the 22px sample became 24px (the documented minimum), and a line about link hover was added.
- Website kit: em dashes removed from four copy strings (project writing rule); footer column headings were `h4` after `h2` (skipped level), now `h3`.
- ROI calculator: section headings were `h3` directly under `h1`, now `h2`; range sliders were 6px tall (pointer target), now a 24px control with the 6px track painted inside, using the AA blue / cyan 700 fills.

### Showcase and guide
- Every gradient-text use (hero stats, type specimen, giant wordmark, StatCard demo) moved to `--gradient-brand-text`.
- Marquee (moving content > 5 s, WCAG 2.2.2) now pauses on hover and keyboard focus and does not run under `prefers-reduced-motion`.
- Copy said "Eight components" and "Four starting points" while the system ships 29 components and 20 templates; corrected (Arabic dictionary updated to match).
- Nav links were under 24px tall; padded. Physical `left/right` in the header, scroll cue, CTA glow, section head, progress bar and template thumbnails converted to logical properties with `--dir` for centring transforms.
- NotebookLM guide: pill text #1B79EC (4.2:1) → #1568D4; the +24% stat (green-500, 2.6:1 at 32px) → green-700; mock-up labels floored at `max(11px, …)`; header and footer links padded to 24px; "Always / Never" headings were `h4` under `h2`, now `h3`; physical padding converted.
- `thumbnail.html` declares `lang="en"`; every template's `ds-base.js` sets `lang="en"` on the DC page (WCAG 3.1.1).

### Templates (20)
- Rendered probe found no clipped text, no element leaving its 1080×1350 canvas, no type under 11px.
- 64 computed contrast failures across 13 social templates, all fixed by colour substitution: muted step numbers #8A97A8 (3.0:1) → #636B7E; label blue #1B6FE0 (4.2 to 4.4:1 on tinted tiles) → #1568D4; cyan #127E99 → #095A70; amber #9A6A00 → #7A4F00; slate-500 captions → #636B7E; white labels on #258AFD / #169FC0 / #1FB877 / #E5484D / #1F9D6B / #E0457A fills → #1568D4 / #0E7F9E / #0E7A4E / #B42318 / #0E7A4E / #B8285A; white labels on the bright gradient → the deep gradient; gradient-clipped type → the text gradient. Token-based templates (one-pager, email, pitch deck) swapped `var(--gradient-brand)` text clips and `--blue-600` pill text the same way.
- Figma plugins post: six 18px-tall links padded to 24px.
- Landing page: the chat launcher was a `div role="button"` with no keyboard handler (WCAG 2.1.1); it is a real `<button>` on the deep gradient now.
- 172 physical `left/right/margin-left/text-align:right` declarations across 16 templates converted to logical properties; centring transforms multiplied by `--dir` so RTL stays centred. One one-word pill ("Skills") is pinned with `nowrap` because the DC runtime occasionally laid it out at its static position before the inset resolved.

## Responsiveness pass (same day)
Probe: `_audit/Audit.html?set=responsive` renders the eight fluid pages at 360 / 768 / 1024 / 1440 and `?set=fit` renders the fixed artboards at 390 / 768 / 1024; both now report zero horizontal overflow, zero text clipping and zero overlapping text (per line box).
- Fixed artboards (15 social posts, the 6-slide deck, the Letter one-pager) overflowed any viewport narrower than themselves. Every template's `ds-base.js` now measures the first `[data-fit-canvas]` and sets `--fit` (0..1) on `<html>`; each canvas sits in a `.fit-box` sized `calc(W * var(--fit))` and is scaled inside it (origin flips for RTL), so phones see the whole artboard, exports still capture the untransformed canvas, and print (one-pager) forces scale 1. The deck and one-pager paddings became `clamp(16px, 4vw, 40px)`.
- Outreach email: `width: 600px` → `width: 100%; max-width: 600px`.
- Career plan (doc-page, Letter): below 900px the sheet width is `min(8.5in, 100vw - 64px)`; every size inside is in `--u` (container units) so pages scale as one piece on screen; print keeps 8.5in. Schedule header labels (slate-500, 4.2:1) → `--text-subtle`; the routine bars on blue-600 / cyan-600 → the 700 steps for white text.
- `base.css`: the under-400px "buttons may wrap" rule no longer targets `role="switch"`, `role="tab"` or `aria-pressed` buttons, which was splitting "RTL" / "LTR" onto two lines.
- Website kit header: at 360px the logo, DirectionToggle and primary button fought for space and the button collapsed to 33px wide. The logo may now shrink (`object-fit: contain`), the action group never does, nav links have 24px targets.
- Showcase: text nav links hide below 960 (they overflowed between 641 and 960), the language toggle is `flex: none`, colour bands go 3-up below 960 (token names were wrapping mid-word at 768).
- Landing page and Portfolio: the text nav showed from 768 but only fits from 1024 ("Book My Demo" was pushed 32px off-screen at 768); both now show it from 1024 and give links 24px targets. Portfolio's brand name may shrink instead of pushing the toggles out.

## Typography pass (October 6, 2026)
Rule made hard: **text never overflows, clips, or truncates, anywhere.** `_audit/audit.js` gained a `type` category that fails a page for `white-space: nowrap` on anything longer than 4 words, `text-overflow: ellipsis`, `line-clamp`, text spilling past or below its own box (fixed heights), em dashes, letter-spacing on Arabic, body leading under 1.15 and body measure over about 90ch; `?set=type` covers the pages the other sets missed (career plan, NotebookLM v2, DevDay recap, exports). Every set must report `type: 0` and `clip: 0` before a page ships (see "Writing and text rules" in the readme and the "Text never overflows" Type card).
- Templates: 70 `nowrap` declarations on sentences removed across 14 templates (author role lines, repost labels, eyebrows, nav and footer columns, HCD Maps headline and captions), plus five `&nbsp;`-pinned "Save for later & Repost" labels. Everything still fits because the artboards are fixed; nothing re-wrapped. One-to-four-word labels (pills, tags, numbers) keep their pin, now as the explicit `.cory-nowrap` where they are HTML, not inline.
- `MediaFrame ratio="auto"` collapsed to 0px when given `height: 100%` (the surfaces card's cover tile was blank and its overlay text sat, clipped, over the Tabs row). The frame now fills its figure for `auto` with a 160px floor.
- `Card variant="ink"` rendered headings in navy on navy (base `h3` colour). Ink and brand cards now carry `.cory-on-ink`, which `base.css` maps to `--on-ink-strong` / `--on-ink-link`; use the class on any custom dark surface.
- Component cards: the fixed RTL / theme toolbar overlapped the Tabs row (surfaces) and the Role field label (forms); content now leaves it room.
- NotebookLM guide: step and rule copy ran to ~102 characters per line at 1280px; capped at 68ch. `.cory-prose` added to `base.css` for the same job elsewhere.
- Career plan: `.sec h2`, hero date and `.tag` pills were `nowrap` sentences; they wrap now, and the section rule shrinks first.
- `base.css`: `:where(p, li, dd, dt, blockquote, figcaption, h1-h4, label, legend, summary)` is `white-space: normal; text-overflow: clip` at zero specificity, so a sentence can only be pinned on purpose.
- `ds-base.js` (all 21 templates): the artboard fit now also runs on `load`, `DOMContentLoaded` and a 120ms timer, because `requestAnimationFrame` is paused in background tabs and the fit never applied there.
- Known and accepted: metrics set at `line-height: 1` report a 3 to 7px font-metric overhang (ascender/descender box), which the probe ignores below 0.3em; the Contrast card's three failing samples; the Showcase marquee and template rail (aria-hidden decoration and a scroll-pinned rail); the Letter document scaling to 5 to 9px type at 360px, which is the PDF-viewer behaviour described above.

## Theme and accessibility pass (October 12, 2026)
Scope: every page in all six probe sets, run headless in **both themes** for the first time (`?theme=light|dark`, `node _audit/run.mjs`). Before: contrast failures per set in light / dark were 6 / 75 (default), 9 / 56 (type), 10 / 68 (templates), 0 / 49 (mobile), 0 / 287 (responsive), 0 / 103 (fit). After: 0 in every set, both themes, with `clip`, `type`, `name`, `offscreen` and `overlap` also at 0.

- **Dark mode was the main defect.** Pages mixed theme tokens with hard-coded light colours, so text flipped and its surface did not. The Showcase, the NotebookLM guide and five guideline cards now use semantic tokens only (`--surface-card`, `--surface-sunken`, `--surface-header`, `--text-strong|body|muted`, `--surface-info|success`).
- **Fixed artboards are pinned.** 26 files (all social templates, one-pager, outreach email, pitch deck, the four LinkedIn exports, the career plan) carry `data-theme="light"` beside `data-screen-label`. `tokens/colors.css` now applies the light tokens to `[data-theme="light"]` on any element, and `:where([data-theme]) { color: var(--text-body) }` stops a pinned subtree inheriting the page theme's computed text colour (the cause of light grey body copy on white in the pitch deck and email).
- **Showcase hero.** After the intro, `clearProps: 'transform'` handed the headline letters back to their CSS start pose, so the headline sat .55em low, tilted, and over the subtitle; section titles had the same fault. The rest pose is now pinned. Hero stats ran the number into its label (`<60sRESPONSE TIME`) and the scroll cue sat on the last stat on phones; stats stack and the block reserves room for the cue. The type rows collapsed their label column to 50px under 640px.
- **Form controls (WCAG 1.4.11).** `Input`, `Select`, the ROI calculator fields and the chat input drew their boundary in `--border-strong` (1.84:1). They use `--border-interactive` (4.6:1) now; `_ds_bundle.js` is patched to match.
- **`MediaFrame` overlay.** The scrim started at 30% and reached .84, leaving a badge in the weak zone near 3.3:1. It now runs 0 at 15%, .78 at 50%, .94 at the foot, so white overlay text clears 4.5:1 on any image.
- **ROI calculator** overflowed by 6px at 1024px (60px metric beside its label). The row wraps and the metric is `clamp(40px, 5vw, 60px)`.
- **Exports.** `#1B79EC` at 12 to 13px was 4.21:1; now `#1568D4`. `#6E7689` placeholder text raised to `#5A6275`. The MCP exports skipped from `h1` to `h3`; the 7-word author line is no longer `nowrap`.
- **Career plan.** `h1` to `h3` skip fixed (level kept, look kept with `.as-h3`); the disclaimer measure capped at 40em.
- **Templates.** Claude Skills index numbers `#5B7CA6` on `#EAF3FF` (3.85:1) raised to `#4A6A93`. Research Inventory formula wrapped as `RAS` / `=`; it holds one line now. Seven templates carried an old author title or a placeholder avatar; all use the exact credit string and `author-avatar.png`.
- **Outreach email** stat grid no longer forces three columns at 360px.
- **Probe.** Theme forcing; visually hidden text skipped; "short label wraps" counts real line boxes and applies to labels and controls (under 16px or inside a control), not to headings or inline spans; `label[for]` counts as a name; scroll containers are not clip ancestors; `data-audit-ok="clip|contrast|overlap"` marks decoration the probe cannot judge (marquee, template rail, giant specimen type, mascot glyphs over SVG, overlay text on images, the contrast card's three failing samples, the card toolbar).
- **Out of scope:** the nested `AgentCory System Brief/` folder is a separate site, not part of the design system. It has its own audit (`Version 1/Site Audit.dc.html`) and was not changed in this pass.

## Seven-pass review (October 13, 2026)
Scope: the design system only (the nested `AgentCory System Brief/` site is separate and untouched). Each pass ended with a standing rule in `CLAUDE.md`.

### 1. Responsiveness
- New probe `_audit/responsive.mjs`: every tracked page at ten widths from 320 to 1920. Fluid pages and all 23 templates already held; 13 guideline cards and the thumbnail overflowed on phones (fixed rows of swatches, tiles and stats). They wrap now. 41 files had no viewport meta; all have one. Result: 0 of 67 pages overflow at any width, both themes.
- Found by looking, not by the probe: the website kit footer showed five empty circles where social icons should be (the owned icon set has no brand marks), now text links; the chat launcher covered the last footer line; the hero chat card hugged the right edge at tablet width; the Showcase template rail snapped its own heading off screen (`scroll-snap-type: mandatory`); the colour band labels pointed at the wrong bands once the grid wrapped.

### 2. State coverage
- Components already covered loading, empty, error, offline and retry (ChatWidget, the demo form, the ROI calculator). The gaps were at page level: no `404.html`; the React kits showed a blank page while loading, with scripts blocked, and for ever if a CDN script never arrived. Added `404.html`, `ui_kits/kit-shell.css` and `ui_kits/kit-shell.js` (loading state in the markup, `noscript` message, error with Try again, error boundary).
- Landing page: the testimonial quote never appeared. `data-reveal="clip"` starts fully clipped, and IntersectionObserver never reports a fully clipped element. `tokens/reveal.js` now reveals those by layout rect.

### 3. Above the fold, content, type, icons
- Reviewed the first screen of the Showcase, both kits, the landing page, the portfolio and the guide at 1440, 768 and 360. Structure, hierarchy and type scale hold. Corrected copy that no longer matched the repo ("twenty templates" is twenty-three; footer year 2025), and the empty icon tiles above.
- Three pages were missing from the audit sets (UX Reading List template and two exports); added.

### 4. Motion, hover, cards
- Hover probe: nav and footer links styled with an inline colour did nothing on hover in the website kit, the landing page and the portfolio; the direction toggle and one mock input did nothing either. `base.css` now carries zero-specificity fallbacks (underline for nav and footer links, a brightness shift for buttons). All keyboard focus rings were already present.
- ROI calculator panels were three different heights in one row; they stretch now. The motion demo animated `inset`; it animates `transform`.

### 5. Contrast on real pixels
- New pixel probe (`_audit/contrast-pixels.mjs` and `.py`): hides the text, screenshots the page, and compares each text colour with the pixels behind it. Fluid pages: 1,392 text boxes in both themes, one failure (default placeholder grey on dark, fixed in `base.css`).
- Templates, exports and cards: 74 failures the DOM probe could not see, because it cannot read gradients. Most were white text on the bright brand gradient (about 2.5:1), in ten templates and three exports, plus bright gradient text on light backgrounds in the exports, grey credit text at 4.3:1 in 18 files, and a chat bubble dimmed with opacity while sending. All fixed: deep gradient under white text, white text on deep-gradient cards, `--gradient-brand-text` stops on light, `#4F5F75` grey, no dimming.
- Left as they are, with reasons: two display numerals the probe misreads because their boxes overlap the next line (checked by screenshot); the disabled demo controls; the visually hidden "Saving" labels; the placeholder caption under the `MediaFrame` scrim.

### 6. Self-check
- Re-ran everything after the fixes. Two of my own changes had regressed something and were corrected: mounting the kits before their JSX compiled rendered the older copies in `_ds_bundle.js`, and swapping gradients left navy text on a deep gradient in five templates.

### 7. Performance and files
- Showcase: the templates section embedded four live pages in iframes. 373 requests and 8.2 MB became 23 requests and 375 KB with static previews (`assets/previews/`, regenerated by `_audit/previews.mjs`).
- UI kits: 4.6 MB each (Babel standalone and development React) became 556 KB with production React and a precompiled `kit.js` (`scripts/build-kits.mjs`; the JSX stays the source).
- Templates: styles were injected by script, so the first paint was unstyled and the layout jumped (CLS 1.61 on the portfolio). Styles are linked in the markup; CLS is 0.03.
- The author avatar was a 498 KB file shown at 56px, copied into twelve folders; it is 256px and 94 KB.
- Live pages gained preconnects, a direct font link, a favicon link and a meta description.
- Not changed: about 60 MB of PNG and PDF deliverables in `exports/` and `archive/` are tracked in git. They slow a clone, not a page; moving them is a decision for the owner.

## Re-sync with Claude Design (October 13, 2026)
Claude Design had moved on since the export this repo was built from. Brought in, without overwriting local fixes: three LinkedIn posts (`posts/ruflow-ecosystem-bento`, `-v2`, `-v3`, each with its caption), two templates (`directory-map-bento`, `rag-ux-bento`), `scripts/png-export.js` (export opens a Save / Copy dialog and loads html-to-image on demand), the matching `ds-base.js`, the export change in seven templates, and two new sections in `CLAUDE.md` (where posts live, the PNG export rule). Text files were recovered byte for byte and checked against the remote sizes. The five new pages got the local treatment (styles linked in the head, `lang`, pinned theme, audit set) and pass the audit in both themes; three small contrast flags on them were fixed. Not synced: Claude Design's regenerated `_ds_bundle.js` and manifest (the local bundle carries fixes theirs lacks) and its scratch screenshots in `_audit/`.

## Known, intentional
- The Contrast card's "Never as information" column deliberately renders three failing samples (text-disabled, green-500, red-500) beside their ratios; they are teaching examples, not UI.
- The Showcase marquee and template rail report "text exceeds container" in the probe: the marquee is `aria-hidden` moving decoration and the rail is scroll-pinned (horizontal scroll-snap below 960 and under reduced motion); both are reachable (keyboard focus scrolls the rail).
- Fixed artboards and the Letter document scale down uniformly on phones (a 1080px post at 360px renders at a third), the same behaviour as a PDF or deck viewer; pinch-zoom reads the detail. Design-system cards render at their declared card viewport and are not responsive surfaces.
- `ChatWidget` disables Send while the field is empty; the guideline "explain, don't disable" is otherwise followed.

## Re-running the probe
Open `_audit/Audit.html` (cards, kits, Showcase, guide, thumbnail), `?set=templates` (all 21 templates), `?set=type` (career plan, NotebookLM v2, DevDay recap, exports, the token-based templates), `?set=responsive` (fluid pages at 360 / 768 / 1024 / 1440), `?set=fit` (fixed artboards on phones) or `?set=mobile` (390px viewport). Keep the tab visible while it runs: hidden tabs pause `requestAnimationFrame`, which skews layout-dependent results. Each page loads in an iframe and the summary line shows counts per category; details list every hit with the measured ratio, colours, size and text snippet. Component cards read the compiled `_ds_bundle.js`, so run it after the bundle has rebuilt.
