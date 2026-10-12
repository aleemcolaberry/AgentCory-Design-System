Round icon-only button, close, menu, play, mute, theme toggle. `label` is required (it becomes the aria-label).

```jsx
<IconButton label="Close">×</IconButton>
<IconButton label="Play" variant="primary" size="lg">▶</IconButton>
<IconButton label="Menu" variant="onInk">☰</IconButton>
<IconButton label="Send" variant="primary" loading />
<Tooltip label="Mute"><IconButton label="Mute">🔇</IconButton></Tooltip>
```

Variants mirror Button plus `onInk` for dark panels. Never below 36px. `disabled` dims; `loading` swaps the icon for a spinner and blocks clicks. Wrap in `Tooltip` when the icon is not universally understood.
