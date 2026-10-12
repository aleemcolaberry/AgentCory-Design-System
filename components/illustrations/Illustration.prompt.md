# Illustration

Cory spot illustrations: the solid mascot tile is the subject, props around it are duotone shapes from the icon set, a soft cyan glow sits behind. Colours are tokens, so light, dark and on-ink resolve automatically.

```jsx
const { Illustration, EmptyState, Button } = window.DesignSystem_ebeb85;

<Illustration scene="search" width={160} />
<Illustration scene="cover" width={360} onInk />          // navy slide, dark CTA panel, email header
<EmptyState scene="empty" title="I haven't booked any calls yet" action={<Button>Share your number</Button>}>…</EmptyState>
```

Scenes and where they go
- `empty`, `search`: EmptyState (nothing here yet, no results).
- `error`, `offline`: failure and connectivity panels, the 404 page uses `not-found`.
- `success`: after a completed flow (demo booked, import done).
- `connect`, `invite`, `launch`: onboarding steps 1 to 3.
- `hero`, `cover`, `email`: landing hero, deck cover, email header (use `onInk` on navy).

Rules
- One illustration per screen, never two side by side. Width 120 in panels, 200 in page states, 320 to 480 in heroes and covers.
- Always pair with a title and one action; the drawing never carries the message alone.
- No emoji, no stock art, no photos behind it. Glow off when the section already has a radial glow.
