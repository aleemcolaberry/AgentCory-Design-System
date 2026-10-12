# State coverage audit, AgentCory Design System
Date: 2026-10-02. Scope: all 17 components, tokens, base helpers, both UI kits, guideline cards.

## Verdict
Interaction states (hover, focus-visible, press, disabled) are consistent and well tokenised. Field-level validation (Input, Select) and Button loading exist. But the system has **no empty, loading, error-feedback, dialog, toast, tooltip, or conversational (chat) state patterns**, even though the tokens for them already exist (`--z-modal`, `--z-toast`, `--z-tooltip`, `cory-shimmer`, `--text-success/warning/danger`, `.cory-scrim`). Consumers are hand-rolling these today (DemoModal, ROI info callout), each slightly differently. Not yet solved.

## Scorecard (per component)
| Component | Hover/Focus/Press | Disabled | Loading | Error | Empty | Notes |
|---|---|---|---|---|---|---|
| Button | yes | yes | yes | no `danger` variant | n/a | Spinner breaks under reduced-motion (label hidden, spinner frozen to 1 frame: button looks blank). No visually-hidden "Loading" text. |
| IconButton | hover only | **no** | **no** | n/a | n/a | Relies on `title` for tooltip; no disabled prop. |
| Chip | yes | **no** | n/a | n/a | n/a | Remove "×" is a `<span>`, not keyboard reachable. |
| Badge | static | n/a | n/a | tones ok | n/a | Fine. |
| Avatar | n/a | n/a | n/a | **no image fallback** | n/a | Broken `src` shows browser broken-image icon; should fall back to initials. No presence dot. |
| Card | yes | **no** | **no skeleton** | n/a | **no** | Selected state exists. |
| MediaFrame | yes | n/a | **no** (no fade-in / poster hold) | **no** (failed load) | yes (striped placeholder) | Play button uses physical `left`. |
| Tabs | active | **no disabled tab** | n/a | n/a | renders nothing | No arrow-key navigation (WAI-ARIA tabs). No overflow hint when scrolling. |
| Input | yes | yes | **no** (validating) | yes (aria-invalid, alert) | n/a | No warning state, no counter, placeholder colour uncontrolled in dark. |
| Select | yes | yes | **no** (options loading) | yes | **no** (empty options) | No success state. |
| Checkbox | yes | yes | n/a | **no** (required consent) | n/a | Hint not linked via aria-describedby. |
| Toggle | yes | yes | **no** (async pending) | **no** | n/a | Hint not linked via aria-describedby. |
| ChatBubble | n/a | n/a | **no typing indicator** | **no "failed to send / retry"** | n/a | No system message, no delivered/read, no Cory-away / human handoff. |
| StatCard / FeatureCard / Testimonial | yes | n/a | **no skeleton** | n/a | n/a | Content blocks, fine. |

## Missing system-level patterns
1. **Alert / inline feedback banner** (info, success, warning, danger). ROI kit hand-rolls one with raw `--blue-100` / `--blue-700`.
2. **Toast / snackbar.** `--z-toast` exists, no component, no guidance (duration, stacking, undo).
3. **Tooltip.** `--z-tooltip` exists, no component. IconButton only has `title`.
4. **Dialog / Modal.** `.cory-scrim` and `--z-modal` exist. DemoModal has no `role="dialog"`, `aria-modal`, focus trap, Escape, focus return, or close-button label, and uses `zIndex: 100` (overlay layer) with a raw rgba scrim.
5. **Empty state.** No component or guideline. Cory's first-person voice is the obvious fit ("I haven't booked any calls yet. Share your number and I'll start.").
6. **Loading.** `cory-shimmer` keyframe exists but no `Skeleton`, no standalone `Spinner`, no `ProgressBar`, no page-level loading guidance, no `aria-busy` / live-region guidance.
7. **Error states.** No "something went wrong + retry", no 404 / offline guidance, no error boundary pattern.
8. **Form-level patterns.** Field errors exist but nothing on when to validate (blur vs submit), form summary errors, submit-in-progress, or success confirmation. DemoModal jumps straight to success with no submitting state.
9. **Destructive actions.** No `Button variant="danger"`, no confirm pattern. Note: white on `--red-500` is about 3.9:1, fails AA; a danger fill needs `--red-700`.
10. **Disabled guidance.** No rule on disable vs hide vs explain. Thoughtful default: keep submit enabled and show validation, disable only when the reason is visible nearby.
11. **Chat conversational states.** Typing indicator, send failure + retry, offline/reconnecting, "Cory is handing you to a counselor", unread count on the launcher. These are the product's core surface and are all absent.
12. **Live regions.** ROI results and new chat messages change silently for screen readers.

## Kit-level findings
- `ui_kits/website/ChatWidget.jsx`: 600 ms silent delay before reply (no typing indicator); send button has no aria-label; close "×" has no label; raw `#fff` / `#9FE6F4` instead of on-ink tokens.
- `ui_kits/roi-calculator`: accepts 0 or negative inputs without feedback; results not announced; info callout not a component.

## Recommended additions (priority order)
1. `Alert` (4 tones, optional action, dismiss) and `Toast` (uses `--z-toast`, aria-live).
2. `EmptyState` (Cory voice, illustration slot = Cory tile, one primary action).
3. `Skeleton` + `Spinner` + `ProgressBar`, plus a "Loading" guideline card (skeleton for layout, spinner for actions under 1 s, progress when measurable).
4. `Dialog` (focus trap, Escape, `aria-modal`, scrim token, `--z-modal`) and refactor DemoModal onto it.
5. `Tooltip` for IconButton.
6. ChatBubble: `status="sending|sent|failed"` with retry, plus `TypingIndicator` and a `system` variant.
7. Fix: Button reduced-motion loading fallback, Avatar `onError` fallback, Chip remove as `<button>`, Tabs arrow keys + disabled, IconButton `disabled`, Checkbox/Toggle `aria-describedby`, Checkbox `error`, Toggle `loading`.
8. Guideline card "States" in Start here: the 6 states every surface must answer (default, loading, empty, error, partial, success) and a "disable vs explain" rule.
