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
