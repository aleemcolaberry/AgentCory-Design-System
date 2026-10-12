# AgentCory Design System

The brand + UI system for **Agent Cory**, an AI-powered admissions assistant
that engages prospective students in under 60 seconds across call, text, chat,
and email, qualifies them, books appointments, and hands off to human
counselors. Agent Cory is a product of **Colaberry**, a 25-year AI / data
transformation company.

> Cory is a *persona*, not just a product, the brand speaks in Cory's own
> first-person voice ("Hi, I'm Cory 👋").

## Quick start
1. `<link rel="stylesheet" href="styles.css">`: tokens, fonts, both themes, grid + motion helpers.
2. `<script src="_ds_bundle.js"></script>` → `const { Button } = window.DesignSystem_ebeb85`.
3. Optional: `<html data-theme="dark">` or drop in `<ThemeToggle />`.
4. Lay out with `.cory-container` / `.cory-grid` / `.cory-cards` / `.cory-bento`; never a fixed `repeat(n,1fr)`.
5. Only semantic tokens in components (`--text-*`, `--surface-*`, `--border-*`, `--action-*`); raw scales are for tokens.css only.

## Motion in practice
- **Reveal engine** (`tokens/reveal.js`, loaded by every `ds-base.js`): put `data-stagger="90"` on a parent to cascade its children, or `data-reveal="up|fade|scale|blur|clip|left"` on one element; `data-delay` adds ms. Content is visible by default and only animates once the script runs, so nothing can stay hidden.
- **Counters:** `data-count="94" data-suffix="%"` on any number animates it when revealed. Numbers always use `.cory-metric` so they stay LTR.
- **Helpers:** `.cory-float` (idle bob for launchers), `.cory-ring` (pulse ring on a status dot), `.cory-sweep` (gradient sweep across `.cory-gradient-text` on entry), `.cory-draw` (line grows in), `.cory-glow-drift` (slow glow wander), `.cory-lift` (card hover).
- **Hover language:** cards lift `--lift-hover` on `--duration-slow`; buttons lift 2px and spring back (`--ease-spring`); icon tiles fill with `--gradient-brand-deep`; nav links grow a gradient underline from inline-start. Never animate colour alone.
- **Press:** `--press-scale` 0.97 on `--duration-fast`.
- One signature per screen: a hero gets the sweep, a quote gets the clip, a CTA panel gets the scale. Don't stack them.

## Direction: LTR and RTL
- **Switch:** `<html dir="rtl" lang="ar">`, or drop in `<DirectionToggle />` (sets both, persists to `cory-dir`, fires a `cory:direction` event). Works on any subtree too: `<section dir="rtl" lang="ar">`.
- **Layout is logical everywhere.** Use `margin-inline-start`, `padding-inline-end`, `inset-inline-start`, `border-start-end-radius`, `text-align: start`. Never `left`/`right`/`margin-left` in components, kits or templates. Flex, grid and `gap` mirror for free.
- **Motion:** multiply horizontal values by `--dir` (1 in LTR, -1 in RTL): `translateX(calc(8px * var(--dir)))`. GSAP code reads `dir` once and multiplies `x`/`xPercent`.
- **Mirror what points, not what is:** wrap text arrows in `.cory-arrow`; Lucide arrows and chevrons flip automatically; add `.cory-flip-rtl` to custom directional icons. Logos, check marks, play, search and media never flip.
- **Always LTR:** numbers, metrics, code, token names, emails, phones and URLs. `.cory-metric`, `code`, `.cory-ltr` and email/tel/url/number inputs are isolated LTR so "<60s" never renders as ">60s".
- **Arabic type:** IBM Plex Sans Arabic is second in every font stack, so Arabic glyphs use it automatically. Under `lang="ar"` letter-spacing is forced to 0 (negative tracking breaks letter joining) and leading opens up (`--leading-*` +0.2 to 0.25).
- **Never split connected scripts into letters** for animation; split by words (Showcase does this automatically).
- **Gradient:** `--gradient-brand` runs 270deg in RTL so the signal still flows in reading direction.
- **Controls:** `iconStart` / `iconEnd` (Button, Input), `labelPosition="start|end"` (Toggle), `align="start"` (StatCard). Old left/right names remain as aliases.
- Preview: every component card has an RTL button; "Direction: LTR and RTL" in Start here shows English and Arabic side by side; Showcase has an العربية switch.

## Writing and text rules
- **No em dashes.** Use a comma, a colon, or a full stop. (Applies to UI copy, docs, code comments, and card titles.)
- **Text never overflows. This is a hard rule, checked by the probe.** Every page, card, kit and template must report `type: 0` and `clip: 0` in `_audit/Audit.html` (all sets) before it ships. `base.css` enforces `overflow-wrap`, `min-width: 0` on layout children, `white-space: normal` on every text element, and wrapping buttons under 400px. The probe fails a page for: `white-space: nowrap` on anything longer than 4 words, `text-overflow: ellipsis` or `line-clamp` on copy, text spilling past or below its own box (fixed heights), text leaving a clipping parent or the canvas, overlapping text, type under 11px, body leading under 1.15, body measure over about 90ch, em dashes, and letter-spacing on Arabic.
- **Allowed on one line:** numbers and metrics, codes, and labels of 1 to 4 words (buttons, pills, tags, nav links). Use `.cory-nowrap` for those so the intent is explicit; never pin a sentence with `&nbsp;`.
- **When a line is tight, shorten the copy or let it wrap.** Never shrink the box, never clip, never add a fixed height.
- Headlines use fluid sizes (`--text-fluid-*`) and `text-wrap: balance`; body uses `text-wrap: pretty`. Long-form copy sits in `.cory-prose` (68ch body, 56ch lead).
- Dark and brand surfaces carry `.cory-on-ink` (the `Card` ink and brand variants add it) so headings and links switch to on-ink tones; navy type must never sit on navy.

## Accessibility gate (every new page)
WCAG 2.2 AA is a release gate. The full rule lives in `CLAUDE.md` under "Accessibility and quality gate"; the short form:
- **Tokens only.** Text, surfaces and borders use semantic tokens (`--text-*`, `--surface-*`, `--border-*`, `--on-ink-*`), never a hex or a raw palette step, so both themes flip together.
- **Both themes or one pinned theme.** Fluid pages must pass in light and dark. Fixed artboards (posts, slides, one-pagers, emails, print pages, exports) carry `data-theme="light"` or `"dark"` beside `data-screen-label`.
- **Contrast.** 4.5:1 for text, 3:1 for large text, control boundaries and focus rings.
- **No overflow at 320 to 1440 wide or at 200% zoom.** No horizontal page scroll.
- **Structure.** `lang` set, one `h1`, no skipped heading levels, every control named and keyboard reachable with a visible focus ring, targets 24px (44px on touch), `alt` on images, reduced motion honoured.
- **Proof.** `python -m http.server 8765`, then `node _audit/run.mjs` runs every set in light and dark and exits 1 on any contrast, clip, name, type, heading, offscreen or overlap finding. `data-audit-ok="clip|contrast|overlap"` is for decoration the probe cannot judge, never for real text.
- **More rules, same file.** `CLAUDE.md` also holds the responsive rule, the state coverage rule, the design quality rule, the motion, hover and card rule, the pixel contrast rule and the performance and file rule. Their probes live in `_audit/`: `responsive.mjs` (ten widths), `contrast-pixels.mjs` (text against rendered pixels), `perf.mjs` (requests, bytes, LCP, CLS).
- **Generated files.** After editing any `ui_kits/*/*.jsx` run `node scripts/build-kits.mjs`; after changing a template shown on the Showcase run `node _audit/previews.mjs`.

## Which control? (decision guide)
- The one action a screen exists for → `Button variant="primary"` (one per view). Second action → `secondary` (on navy: `onInk`). Icon-only → `IconButton` with `label`.
- Filters / multi-select → `Chip`. Read-only status or metric → `Badge`.
- 2–4 exclusive views → `Tabs variant="segmented"`; section nav → `Tabs underline`; 5+ options → `Select`.
- Setting that applies immediately → `Toggle`; choice submitted with a form → `Checkbox`.
- Blank surface / bento tile / cover → `Card`; opinionated marketing blocks → `FeatureCard`, `StatCard`, `Testimonial`.
- Image or video with aspect lock → `MediaFrame`.
- Something went wrong or is stale in a region → `Alert` (danger / warning) with Retry. Brief confirmation after an action → `Toast` (Undo if reversible). Nothing here yet → `EmptyState`. Waiting → `Skeleton` (layout known) / `Spinner` or `Button loading` (one action) / `ProgressBar` (measurable) / `TypingIndicator` (chat). Must-finish task or destructive confirm → `Dialog` (`tone="danger"`). Name an icon → `Tooltip`.

## States (every surface answers six)
Default · Loading · Empty · Error · Partial · Success. See the "States" card in Start here and `guidelines/states-audit.md`.
- **Explain, don't disable.** Keep submit enabled and show the field `error`; disable only when the reason is visible next to the control. `--text-disabled` is decorative, never informational.
- **Validate on blur, summarise on submit.** Never per keystroke. On submit focus the first invalid field; messages have `role="alert"`. Error copy says how to fix it ("Enter a 10-digit number"), not just that it is wrong.
- **Nothing silent.** Any wait over 300 ms shows a state; results, chat logs and toasts live in `aria-live` / `role="status"` regions. Skeletons sit in an `aria-busy` region.
- **Never motion or colour alone.** `Spinner`, `Button loading` and `IconButton loading` fall back to static dots plus a visible label under `prefers-reduced-motion`; every feedback tone carries a glyph and words.
- **Field states:** `hint` → `loading` (validating) → `warning` (valid but check) → `error` → `success` on Input; `loading` / `emptyMessage` / `error` / `success` on Select; `error` on Checkbox; `loading` / `error` on Toggle.
- **Chat states:** `TypingIndicator` while Cory composes; `ChatBubble status="sending|sent|failed"` with `onRetry`; `from="system"` for handoffs and delays; `Avatar status` for presence; offline → `Alert tone="warning"` in the log.
- **Destructive actions:** no danger button. `Dialog tone="danger"`, a question as the title, and an `ink` button that names the action and count ("Delete 3 inquiries").
- **Voice:** errors and empty states are first-person Cory on conversational surfaces ("I couldn't save that"), neutral on admin surfaces ("Sync failed"). Avoid "Oops" and blame.

## Component status
Stable: Button, Badge, Avatar, Input, StatCard, FeatureCard, Testimonial, ChatBubble.
v2: IconButton, Chip, Card, MediaFrame, Tabs, ThemeToggle, DirectionToggle, Select, Checkbox, Toggle.
v3 (states release): Alert, Toast + ToastRegion, Dialog, Tooltip, EmptyState, Skeleton, Spinner, ProgressBar, TypingIndicator; plus `loading` / `error` / `disabled` / status props across the existing set.
v4 (visual language): Icon (owned duotone set), Illustration (twelve Cory scenes), CoryMark; EmptyState `scene`.
Every component card in the Design System tab has a ◐ button to preview it in dark theme.

## Sources
- **Live website:** https://agentcory.ai (content + structure extracted from the
  homepage; design language inferred from the site and brand assets).
- **Brand asset provided:** `uploads/Logo_Cory-BpxDw6Ld.svg` (primary wordmark).
- No codebase or Figma file was provided. UI kits are recreations of surfaces
  that are publicly visible on the live site (marketing homepage, ROI
  calculator, chat widget). The internal admissions dashboard is **not** publicly
  shown and was intentionally **not** invented.

---

## CONTENT FUNDAMENTALS

**Voice, Cory speaks in first person.** The defining trait. Cory addresses the
reader directly as "I" and "me": *"Ready to see what I can do for your admissions
team?"*, *"Let me call you"*, *"Chat with me"*, *"I'm ready to help your team…"*.
Marketing chrome around Cory uses third person ("How Cory Works", "Why teams
choose Cory"). When in doubt: section labels are about Cory; CTAs and
conversational copy are *from* Cory.

**Tone.** Confident, benefit-led, and warm, never stiff or jargon-heavy.
Outcome-first sentences: *"Strike while the iron is hot."*, *"Turn prospects into
enrolled students."* Short, punchy, active voice.

**Audience.** Higher-ed admissions & enrollment leaders (Directors of Admissions,
VPs of Enrollment). Copy respects their world: "inquiries", "yield", "Slate",
"Banner", "counselors", "show rate".

**Casing.** Headlines are sentence case or Title Case used consistently within a
section ("Boost Admissions with AI Precision"). Overlines/eyebrows are UPPERCASE
with wide tracking. Avoid ALL-CAPS body copy.

**Numbers do the talking.** Nearly every claim is quantified and leads with the
figure: `<60s`, `94%`, `10x`, `847%`, `$2.4M`, `2,100 hours`. Stats are the hero,
labels are the footnote. Use comparison framing ("from 40% to 94% overnight").

**"You / your", not "we".** Copy centers the customer's team and outcomes -
"*your* admissions team", "*your* counselors", "save *your* team time".

**Emoji & symbols.** Used *sparingly* as accents, never decoration: the waving
hand 👋 next to Cory's greeting, and a ⚡ before speed claims ("⚡ < 60s Response
Time"). One emoji per moment, max. No emoji in headings or body paragraphs.

**Examples to emulate**
- Greeting: *"Hi, I'm Cory 👋 Ready to see what I can do for your admissions team?"*
- Benefit: *"Meet prospects where they are with seamless coordination across voice, SMS, email, and chat."*
- Proof: *"We went from 40% contact rates to 94% overnight."*
- CTA: *"Book My Demo"*, *"Try Cory Now"*, *"Get Called by Cory"*.

---

## VISUAL FOUNDATIONS

**Themes.** Light is the default; **dark** is a first-class theme. Set
`<html data-theme="dark">` (`ThemeToggle`, or the one-line script noted in `colors.css`, applies
the OS preference). Every semantic alias (`--text-*`, `--surface-*`, `--border-*`,
`--action-*`, `--shadow-*`, `--gradient-ink`) re-maps; raw scales never change.
Dark surfaces step `--navy-900` page → `--navy-850` card → `--navy-700` raised;
shadows switch to black and gain `--shadow-glow`. Text and borders placed on
`--surface-ink` / `--gradient-ink` use the theme-stable `--on-ink-*` tokens
(`--on-ink-strong/body/muted/link/border/fill`), never raw `rgba(255,255,255,…)`.
`ThemeToggle` writes the attribute and persists the choice.

**Color.** A two-part identity: deep **navy `#0B1F36`** (the Cory mascot's ink -
used for primary text, dark sections, the mascot body) paired with a bright
**blue→cyan gradient `#258AFD → #29BEDD`** that is the brand's signature "signal."
Surfaces are a cool off-white **`#F4F5FA`**. Neutrals are cool-toned slate.
Semantic green `#1FB877` marks positive metrics. The gradient appears on primary
CTAs, headline stat numbers, key words in headlines (gradient text-clip), and as
soft radial glows behind hero/CTA art. Dark sections use a navy `--gradient-ink`.

**Contrast (WCAG 2.2 AA, verified by `_audit/Audit.html`).** `--text-strong/body/muted/subtle` and `--text-link`
all pass 4.5:1 on page and card (15.3 / 9.2 / 6.4 / 4.9 / 4.9); `--text-link-hover` is `--blue-800` (7.1:1), a hover
never drops below AA. `--text-success/warning/danger/info` are the AA text versions of the semantic hues; the 500s
(`--fill-*`) are fills, dots and borders only. Feedback surfaces are `--surface-info/success/warning/danger`
with `--border-*` hairlines of the same tone, re-themed in dark; over ink use `--on-ink-info/success/warning/danger`.
Loading placeholders use `--surface-skeleton` and `--surface-skeleton-shine`. Gradients come in three jobs:
`--gradient-brand` is decoration only (bars, glows, dots, swatches); `--gradient-brand-text` (#1B79EC → #1193B5,
every stop ≥ 3:1 on page and white) is what `.cory-gradient-text`, `StatCard gradient` and `Testimonial` clip
into type, and it is for large type (≥ 24px, or ≥ 18.66px bold) only; anything carrying a white label at any size,
primary buttons, pills, the brand `Card`, the chat launcher, uses `--gradient-brand-deep` / `--gradient-brand-deep-135`
(#1568D4 → #0E7F9E, ≥ 4.6:1). In the dark theme `--gradient-brand-text` resolves to the bright gradient, because on
navy both stops already pass. `--border-interactive` (4.2:1 on page, 4.6:1 on card) is the only border allowed to be
a sole affordance, and it is also the off-state track of `Toggle`; `--on-ink-border-strong` is 36% white (3.1:1)
so on-ink controls keep a visible boundary. `--text-disabled` is decorative only. Progress fills in success /
warning / danger use the 700 text tones so the bar reads ≥ 3:1 against its track. Glows: `--glow-cyan`,
`--glow-blue`, `--glow-cyan-strong`; scrim: `--surface-overlay`.

**Focus and targets.** Every focusable element shows the global `:focus-visible` ring from `base.css` (2px
`--border-focus` outline, 2px offset, plus `--shadow-focus`); components never set `outline: none` inline, so the
ring is never lost (ghost and on-ink buttons included). `base.css` gives every button, tab, switch, input and select
a 24px minimum box (WCAG 2.5.8); inline text actions such as ChatBubble's Retry and Chip's remove button pad up to 24px.

**Type scale.** Fixed steps for components (`--text-h1…h4`, `--text-md`, `--text-body-lg/sm`,
`--text-caption`, `--text-overline`, `--text-micro` 11px minimum); UI control text
`--text-ui-sm/ui/ui-lg` 14/15/17 + `--text-label` 13; metric steps
`--text-metric-xl/lg/md/sm`; fluid display `--text-fluid-display/title/h2/lead`
for marketing and portfolio pages; mono `--text-mono-sm/mono/mono-lg`. Measures
`--measure-body` 68ch, `-lead` 56ch, `-display` 18ch. `.cory-metric` renders the
hero number. Do not introduce off-scale sizes.

**Typography.** Friendly geometric humanist sans, **Plus Jakarta Sans**
(substitute, see *Caveats*), across the whole brand, with **JetBrains Mono** for
data/code readouts. Display/headlines are Extrabold (800) with tight tracking
(`-0.03em`) and snug leading; body is 16–18px at 1.5–1.65 leading. Big stat
numbers are the largest type on most screens.

**Spacing & layout.** 8px base grid. Fluid rhythm tokens replace hard-coded
values: `--gutter` 16–28px, `--grid-gap` 16–24px, `--section-y` 56–96px.
Containers `--container-max` 1200 / `-wide` 1400 / `-narrow` 760 / `-prose` 68ch.
Sticky blurred header via `.cory-header` (`--surface-header`, `--blur-header`,
`--z-sticky`). Layer tokens `--z-*`, blur `--blur-*`, opacity `--opacity-*`,
aspect ratios `--aspect-video/photo/square/portrait/story/cover`.

**Responsive.** Mobile-first breakpoints `--bp-sm` 640 · `--bp-md` 768 ·
`--bp-lg` 1024 · `--bp-xl` 1280 · `--bp-2xl` 1536 (repeat literally in
`@media`). `--cols` is 4 → 6 → 12. Helpers in `tokens/responsive.css`:
`.cory-container`, `.cory-section`, `.cory-grid` (+ `--span`), `.cory-cards`
(auto-fit, `--card-min`), `.cory-bento` (1 → 2 → 4 cols; `.hero` 2×2, `.span-2`,
`.span-3`, `.tall`), `.cory-split` (stacks under 1024), `.cory-hide-mobile/desktop`.
Never write a fixed `grid-template-columns` in a kit or template.

**Corners.** Soft and generous everywhere, the brand signature. The mascot tile
rounds at ~22.7% of its size. Cards use 18–24px radius, buttons and chips are
fully pill-shaped (`999px`), inputs ~14px.

**Shadows.** Soft, cool, low-spread, navy-tinted (`rgba(11,31,54,…)`), never
harsh or black. Elevation is subtle; cards sit on `--shadow-sm` and lift to
`--shadow-lg` on hover. Primary buttons carry a colored `--shadow-brand` (blue
glow).

**Borders.** Hairline 1px in cool slate (`--border-subtle` / `--border-default`).
Cards = soft border + subtle shadow + white fill. No heavy outlines, no
colored-left-border accent cards.

**Backgrounds.** Mostly flat cool off-white or white. No photographic hero, no
repeating texture, no busy patterns. Visual interest comes from: the gradient,
radial gradient *glows* (low-opacity cyan/blue circles bleeding off-edge), and
dark navy "spotlight" panels for CTAs. The mascot tile is the recurring motif.

**Motion.** Two tiers. *UI*: `--ease-out`, 140–380ms, press `--press-scale`
0.97, hover lift `--lift-hover` −3px with `--shadow-sm → --shadow-lg`. *Cinematic*
(portfolio / hero reveals): `--ease-cinematic`, `--duration-enter` 600 ·
`-cinematic` 900 · `-epic` 1200ms, `--stagger` 70ms per item via `--i`,
`--reveal-distance` 24px. `--ease-spring` only for chips/toggles. Keyframe
library `cory-fade-up / fade-in / scale-in / blur-in / clip-up / marquee / pulse /
glow-drift / shimmer`; helpers `.cory-reveal(.is-visible)`, `.cory-reveal-auto`,
`.cory-reveal-scroll` + `.cory-parallax` (scroll-driven, progressive), `.cory-marquee`,
`.cory-lift`. `prefers-reduced-motion` zeroes distances and long durations and
stops loops, always use the tokens so this applies for free. Still: fades over
flashy movement; the only infinite loops are marquee and glow drift.

**Hover / press states.** Hover = lift + deeper shadow (cards), darker gradient/
fill (buttons), color shift (links to `--blue-600`). Press = brief `scale` down.
Inputs focus to a blue border + soft `--shadow-focus` ring. Every focusable
element shows a 2px `--border-focus` outline on `:focus-visible` (global rule in
`base.css`), never remove it.

**Transparency & blur.** Used deliberately: the sticky header is
`rgba(255,255,255,0.85)` + `backdrop-filter: blur(12px)`; modal scrims are navy
at ~55% with a light blur. Otherwise surfaces are opaque.

**Imagery vibe.** Cool, clean, bright, product-forward (chat previews, dashboards,
stat cards) rather than stock photography. When people appear, they're avatars/
headshots in rounded tiles. No grain, no heavy filters.

---

## ICONOGRAPHY

- **Mascot first.** The strongest "icon" in the system is the **Cory glyph**, a
  rounded-square tile (light `#F4F5FA`, dark navy, or transparent) holding a navy
  headset/agent silhouette under a blue→cyan brim. It serves as app icon,
  favicon, chat avatar, and assistant marker. Assets:
  `assets/cory-tile.svg`, `assets/cory-tile-dark.svg`, `assets/cory-icon.svg`.
  The `Avatar` component renders it inline (no asset path needed); `CoryMark` is the same
  art as an SVG `<g>` for composing inside larger drawings.
- **UI icons: the owned Cory set (`Icon`).** `components/icons/Icon.jsx`, about 100 glyphs on a
  24px grid, 2px safe area, 1.75 stroke, round caps and joins, with a 20% currentColor **duotone
  tint** under the stroke (the brand's soft, friendly weight). Everything follows `currentColor`.
  Sizes are fixed steps: 16 inline (tint off, stroke 2), 20 in controls, 24 in feature tiles,
  32 in hero tiles. Directional glyphs (arrows, chevrons, send, log-in, trending-up) carry
  `.cory-flip-rtl` and mirror in RTL; search, check, close never do. Lucide names resolve through
  `ICON_ALIASES`, so older kit code keeps working, but new work uses Cory names. No CDN.
- **Illustrations (`Illustration`).** `components/illustrations/Illustration.jsx`: twelve spot
  scenes in one language, the solid Cory tile as subject, duotone props drawn from the icon set,
  a cyan glow behind. `empty` / `search` (EmptyState via its `scene` prop), `error` / `offline`,
  `success`, `connect` / `invite` / `launch` (onboarding), `not-found` (404), `hero`, `cover`
  (deck), `email` (header). Every colour is a token, so dark theme resolves by itself; `onInk`
  switches to the light tile and cyan lines for navy panels. One illustration per screen, always
  with a title and one action.
- **No emoji-as-icon** in UI. Emoji (👋, ⚡) are reserved for conversational/
  marketing accents only.
- Feature icons sit in a tinted tile (blue-100 bg, blue-600 glyph) or, on dark
  workflow rows, a navy gradient tile with a white glyph.

---

## VISUAL FORMATS / INDEX

Folder map (root holds only the entry points):

- `index.html`: the default page of the design system, the Showcase (foundations, components, templates, voice). Open this first.
- `readme.md`, `SKILL.md`, `CLAUDE.md`: guidelines, Agent-Skill manifest, project rules.
- `styles.css`: global entry point (import this one file). `@import`s the token
  closure below.
- `thumbnail.html`: homepage tile. `_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json` are compiler output, never hand-edited.
- `docs/`: human how-to pages. `NotebookLM Style Guide.html` (on-brand NotebookLM prompts).
- `scripts/`: page scripts, `showcase.js` + `showcase-i18n.js` (index.html motion and Arabic copy), `doc-page.js` (paged documents).
- `pages/`: standalone documents built on the system (the 90-day career plan).
- `exports/`: rendered LinkedIn posts. `archive/`: superseded versions, audit runs and old screenshots. `uploads/`: source material.
- `_audit/`: `Audit.html` + `audit.js`, the type / clip / contrast probe.
- `tokens/`: `colors.css` (light + dark themes, on-ink, glows),
  `typography.css` (fixed + fluid + metric scales), `layout.css` (spacing, fluid
  gutters, radius, shadow, z-index, blur, opacity, aspect), `direction.css` (LTR/RTL values, Arabic metrics, LTR isolation, icon mirroring), `motion.css` (easings,
  durations, stagger, keyframes, reduced-motion), `responsive.css` (breakpoints,
  container, grid, bento), `fonts.css`, `base.css` (resets, focus-visible, helpers:
  `.cory-gradient-text`, `.cory-eyebrow-pill`, `.cory-overline`, `.cory-ink`,
  `.cory-header`, `.cory-scrim`, `.cory-metric`, `.cory-visually-hidden`).
- `assets/`: `logo-agentcory.svg`, `logo-agentcory-darkmode.svg`,
  `cory-tile.svg`, `cory-tile-dark.svg`, `cory-icon.svg`.
- `guidelines/cards/`: "Start here" (adoption, decision guide, the six states), Colors incl. dark
  theme and contrast rules, Type incl. the "Text never overflows" rule card, Spacing incl. breakpoints/grid, Motion, Brand
  (logo, mascot, voice; the Illustrations card lives with its component in `components/illustrations/`).
- `guidelines/states-audit.md`: the state-coverage audit that drove the v3 release.
- `guidelines/heuristic-audit.md`: the October 2026 heuristic / WCAG audit (findings, fixes, how to re-run `_audit/Audit.html`), including the typography pass.

**Components** (`window.DesignSystem_ebeb85.*`):
- `components/core/`: `Button` (hover, focus ring, loading with reduced-motion fallback, `href`), `IconButton` (disabled, loading),
  `Chip` (selectable, removable, disabled), `Badge`, `Avatar` (image fallback to initials, presence `status`) + `CoryMark`.
- `components/icons/`: `Icon` (the owned duotone set, `ICON_NAMES`, `ICON_ALIASES`).
- `components/illustrations/`: `Illustration` (twelve Cory spot scenes, `ILLUSTRATION_SCENES`).
- `components/surfaces/`: `Card` (generic tile: default / sunken / outline / ink /
  brand), `MediaFrame` (image / video, aspect ratio, play + mute, overlay),
  `Tabs` (underline / segmented / pills, arrow keys, disabled items), `ThemeToggle`.
- `components/content/`: `StatCard`, `FeatureCard`, `Testimonial`, `ChatBubble` (cory / user / system, delivery status + Retry), `TypingIndicator`.
- `components/forms/`: `Input` (focus, loading, warning, error, success, disabled, icons), `Select` (loading, empty, error, success),
  `Checkbox` (indeterminate, error), `Toggle` (role=switch, loading, error).
- `components/feedback/`: `Alert`, `Toast` + `ToastRegion`, `Dialog` (focus trap, Escape, `tone="danger"`), `Tooltip`, `EmptyState` (cory / neutral voice, `scene` illustration, onInk).
- `components/status/`: `Skeleton`, `Spinner`, `ProgressBar`.

**UI kits:**
(Design System tab group "UI kits".)
- `ui_kits/website/`: marketing homepage (header, hero, workflows, features,
  testimonials, CTA, footer, live chat widget with typing / failed / offline states + demo Dialog with validation).
- `ui_kits/roi-calculator/`: the interactive ROI calculator tool (field errors, empty results state, live region).

**Templates** (`templates/`: copy-ready starting points for consuming projects):
- `landing-page/`: full marketing homepage (hero, how-it-works, features, proof, CTA, footer; chat launcher toggleable via Tweaks).
- `pitch-deck/`: 6-slide 16:9 sales deck.
- `one-pager/`: printable Letter-size product overview sheet.
- `outreach-email/`: 600px marketing email from Cory.

- Plus 17 LinkedIn bento and carousel post templates (`*-bento/`, `*-carousel/`), `portfolio/`, `component-specs-cover/`.

---

## CAVEATS / SUBSTITUTIONS
- **Typeface is a substitute.** AgentCory's production font could not be read from
  the live site; **Plus Jakarta Sans** is used as a close match. Swap the
  `@font-face`/import in `tokens/fonts.css` when the real font is available.
- **Icon set is owned.** The Cory `Icon` set replaced the Lucide CDN substitute; Lucide names still resolve via aliases.
  The LinkedIn bento templates still fetch a few `lucide-static` glyphs for their published artwork.
- **Dashboard omitted by design.** Only publicly-visible surfaces were recreated;
  the internal admissions dashboard was not invented.
- Brand colors, the mascot, and copy voice are taken **directly** from the live
  site and brand asset, and are accurate.
