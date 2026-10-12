Blank surface tile. Compose anything inside; pair with `.cory-bento` / `.cory-cards` grids.

```jsx
<Card interactive href="/work/cory">…</Card>
<Card variant="ink" padding="lg"><h3>Spotlight</h3><p>On-ink text is automatic.</p></Card>
<Card variant="sunken" padding="sm">metadata list</Card>
```

Variants: `default` (white, hairline, soft shadow), `sunken`, `outline`, `ink` (navy gradient + glow), `brand` (gradient fill). `interactive` adds the 3px lift; `selected` adds the focus border; `padding="none"` for media-first tiles.
