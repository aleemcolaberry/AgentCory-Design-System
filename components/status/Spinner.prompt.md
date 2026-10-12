Activity indicator for one action or a small area where the layout is not known yet. For buttons use `Button loading` instead; for whole lists use `Skeleton`.

```jsx
<Spinner />
<Spinner size={28} showLabel label="Finding your programs…" />
<Spinner tone="onInk" size={16} />
<Spinner tone="current" size={16} />   // inherits text colour inside a link or chip
```

Always pass a meaningful `label` (it is announced). Pair it with a sentence when the wait is over about 3 seconds. Under reduced motion the ring becomes static dots and the label shows, so the state is never conveyed by motion alone.
