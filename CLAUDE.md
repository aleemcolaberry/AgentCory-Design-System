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
