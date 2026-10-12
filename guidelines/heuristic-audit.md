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

## Known, intentional
- The Contrast card's "Never as information" column deliberately renders three failing samples (text-disabled, green-500, red-500) beside their ratios; they are teaching examples, not UI.
- The Showcase marquee and template rail report "text exceeds container" in the probe: the marquee is `aria-hidden` moving decoration and the rail is scroll-pinned (horizontal scroll-snap below 960 and under reduced motion); both are reachable (keyboard focus scrolls the rail).
- Fixed artboards and the Letter document scale down uniformly on phones (a 1080px post at 360px renders at a third), the same behaviour as a PDF or deck viewer; pinch-zoom reads the detail. Design-system cards render at their declared card viewport and are not responsive surfaces.
- `ChatWidget` disables Send while the field is empty; the guideline "explain, don't disable" is otherwise followed.

## Re-running the probe
Open `_audit/Audit.html` (cards, kits, Showcase, guide, thumbnail), `?set=templates` (all 21 templates), `?set=type` (career plan, NotebookLM v2, DevDay recap, exports, the token-based templates), `?set=responsive` (fluid pages at 360 / 768 / 1024 / 1440), `?set=fit` (fixed artboards on phones) or `?set=mobile` (390px viewport). Keep the tab visible while it runs: hidden tabs pause `requestAnimationFrame`, which skews layout-dependent results. Each page loads in an iframe and the summary line shows counts per category; details list every hit with the measured ratio, colours, size and text snippet. Component cards read the compiled `_ds_bundle.js`, so run it after the bundle has rebuilt.
