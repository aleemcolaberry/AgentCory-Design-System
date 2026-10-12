Selectable pill for filter bars, tag pickers, and toggles, the interactive counterpart to `Badge`.

```jsx
<Chip selected={filter==='all'} onToggle={() => setFilter('all')}>All work</Chip>
<Chip icon={<Icon name="video" size={16} duotone={false} />}>Motion</Chip>
<Chip removable onRemove={() => drop(tag)}>UX research</Chip>
<Chip disabled>Archived</Chip>
```

Selected = solid navy (inverts in dark). Outline uses `--border-interactive` so the control reads without a fill. Sizes `sm` (32px) / `md` (40px). `removable` renders a separate remove button (keyboard reachable, labelled "Remove {text}"); `disabled` dims and blocks both.
