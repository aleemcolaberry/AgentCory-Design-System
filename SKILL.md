---
name: agentcory-design
description: Use this skill to generate well-branded interfaces and assets for AgentCory (Agent Cory, the AI-powered admissions assistant by Colaberry), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick orientation
- **Brand:** Agent Cory, AI admissions assistant (by Colaberry). Cory is a first-person persona ("Hi, I'm Cory 👋").
- **Color:** navy `#0B1F36` + blue→cyan gradient `#258AFD → #29BEDD` on cool off-white `#F4F5FA`.
- **Type:** Plus Jakarta Sans (substitute) + JetBrains Mono for data. Soft pill/round corners. Stats lead with big numbers.
- **Entry CSS:** link `styles.css` for all tokens + fonts + both themes + `.cory-*` grid/motion helpers. Dark mode: `<html data-theme="dark">` or `<ThemeToggle />`.
- **Accessibility:** use semantic tokens only (all pass WCAG 2.2 AA); white-label CTAs use `--gradient-brand-deep`; `--gradient-brand` is for decoration and ≥24px text. Focus rings are global.
- **Layout:** `.cory-container`, `.cory-grid` (+ `--span`), `.cory-cards`, `.cory-bento`, `.cory-split`: mobile-first, breakpoints 640/768/1024/1280/1536.
- **Components:** load `_ds_bundle.js`, read from `window.DesignSystem_ebeb85`: Button, IconButton, Chip, Badge, Avatar · Icon, Illustration · Card, MediaFrame, Tabs, ThemeToggle, DirectionToggle · StatCard, FeatureCard, Testimonial, ChatBubble, TypingIndicator · Input, Select, Checkbox, Toggle · Alert, Toast + ToastRegion, Dialog, Tooltip, EmptyState · Skeleton, Spinner, ProgressBar. See each component's `.prompt.md` and the "Which control?" guide in `readme.md`.
- **States:** every surface answers default / loading / empty / error / partial / success. Skeleton (layout known) · Spinner or `Button loading` (one action) · ProgressBar (measurable) · EmptyState (what belongs here + one action) · field `error` / `warning` / `success` props · Alert (region problem, stays) · Toast (brief confirmation, Undo) · Dialog `tone="danger"` for destructive confirms (no danger button). Explain, don't disable; validate on blur, focus the first error on submit; never motion or colour alone.
- **Motion:** load `tokens/reveal.js`; `data-stagger` on parents, `data-reveal` on elements, `data-count` on numbers. Hover = lift + shadow via tokens, press = `--press-scale`. One signature animation per screen.
- **Direction:** LTR and RTL from one `dir` attribute (`<DirectionToggle />`). Logical properties only (inline-start/end, never left/right); multiply horizontal motion by `var(--dir)`; wrap text arrows in `.cory-arrow`; keep numbers/code/emails LTR with `.cory-ltr`; never letter-space or letter-split Arabic.
- **Text rules:** no em dashes anywhere; text must never overflow or be clipped. Hard rule: no `nowrap` beyond 4 words (`.cory-nowrap` for numbers and short labels only), no ellipsis or line-clamp on copy, no fixed heights on text boxes, fluid sizes, `min-width: 0` on layout children, let it wrap. Verify with `_audit/Audit.html`: the `type` and `clip` columns must read 0.
- **Release gate:** every new or edited page must pass `node _audit/run.mjs` (all sets, light and dark, zero blocking findings). Semantic tokens only, both themes or a pinned `data-theme` on fixed artboards, WCAG 2.2 AA, no overflow, no skipped headings. Full rule: `CLAUDE.md`, "Accessibility and quality gate".
- **Plain HTML CTAs:** `.cory-btn .cory-btn-primary|-secondary|-ink|-ghost|-on-ink|-on-ink-solid` + `-sm|-lg`.
- **Icons and illustrations:** `<Icon name="calendar-check" size={24} />`, the owned duotone set (24px grid, 1.75 stroke, currentColor, RTL-aware; Lucide names alias). `<Illustration scene="search" />` for empty, error, onboarding, hero, cover and email surfaces; `onInk` on navy. `EmptyState scene="empty"`. Mascot glyph in `assets/` and via `Avatar`. No icon CDN.
- **UI kits:** `ui_kits/website/` (marketing) and `ui_kits/roi-calculator/` (tool) show real composed surfaces.

## Key files
- `readme.md`: full brand, content, and visual guidelines (read first).
- `styles.css` + `tokens/`: design tokens and webfonts.
- `assets/`: logos and the Cory mascot tiles/glyph.
- `components/**`: reusable React primitives (`.jsx` + `.d.ts` + `.prompt.md`).
- `ui_kits/**`: full-screen recreations.
