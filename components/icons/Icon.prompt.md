# Icon

Owned Cory icon set: 24px grid, 1.75 stroke, round caps, 20% currentColor duotone tint. Replaces the Lucide CDN.

```jsx
const { Icon, FeatureCard, IconButton, Button } = window.DesignSystem_ebeb85;

<Icon name="phone-incoming" />                       // 20px, inherits text colour
<Icon name="calendar-check" size={24} />             // feature tile size
<Icon name="check" size={16} duotone={false} strokeWidth={2} />  // inline with 14px text
<Icon name="search" label="Search" />                // standalone: label gives it a name

<FeatureCard icon={<Icon name="zap" size={24} />} title="Lightning-fast outreach">…</FeatureCard>
<IconButton label="Mute"><Icon name="bell-off" /></IconButton>
<Button iconEnd={<Icon name="arrow-right" size={16} duotone={false} />}>Book a demo</Button>
```

Rules
- Sizes: 16 inline, 20 in controls, 24 in tiles, 32 in hero tiles. Never scale between.
- Colour comes from the parent: `--blue-600` in a `--blue-100` tile, `--text-muted` in nav, white on gradient or ink.
- `duotone` off at 16px and on photos or gradients; keep it in tiles and empty states.
- Directional icons (arrows, chevrons, send, log-in, trending-up) mirror in RTL automatically. Search, check, close never flip.
- Lucide names still resolve (`x`, `refresh-cw`, `messages-square`, `alert-triangle`), so old kit code works without edits.
