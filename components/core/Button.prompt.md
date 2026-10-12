Pill-shaped CTA button, use for any primary or secondary action; one `primary` (brand gradient) per view.

```jsx
<Button variant="primary" size="lg">Try Cory Now</Button>
<Button variant="secondary">Book a Demo</Button>
<Button variant="ink" iconEnd={<span className="cory-arrow">→</span>}>Get Called by Cory</Button>
<Button href="/work" variant="ghost">View case study</Button>
<Button loading>Sending…</Button>
```

Variants: `primary` (AA-safe blue→cyan gradient, the hero CTA), `ink` (solid navy; inverts in dark theme), `secondary` (outline, 4.6:1 border), `ghost` (text-only link button), `onInk` (translucent outline for navy panels), `onInkSolid` (white on navy, the secondary CTA beside a primary on dark). Sizes: `sm` / `md` / `lg` (36 / 44 / 52px tall). Pass `iconStart` / `iconEnd` for icons (they follow reading direction; wrap text arrows in `.cory-arrow` so they mirror in RTL), `fullWidth` to stretch, `disabled` to dim, `loading` for a spinner, `href` to render an anchor. Hover, keyboard focus ring, and press are built in.
