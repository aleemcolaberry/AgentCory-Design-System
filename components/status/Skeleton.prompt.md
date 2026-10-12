Loading placeholder when the layout is known and the wait may exceed about a second (lists, cards, dashboards). Mirror the real content's shape so nothing jumps when it arrives.

```jsx
<div aria-busy="true" style={{ display: 'grid', gap: 14 }}>
  <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
    <Skeleton variant="circle" width={40} />
    <Skeleton lines={2} width="60%" />
  </div>
  <Skeleton variant="rect" height={160} />
  <Skeleton lines={3} />
</div>
```

Set `aria-busy="true"` on the region and swap it for content (or an `EmptyState` / `Alert tone="danger"` with Retry) once loaded. Do not show a skeleton for under 300 ms; keep the previous content visible on refetch. Skeleton for layout, `Spinner` for a single action, `ProgressBar` when progress is measurable.
