Names an icon-only control or clarifies a short label on hover and keyboard focus. Never hides essential instructions or error text (those go in `hint` / `Alert`).

```jsx
<Tooltip label="Mute notifications"><IconButton label="Mute notifications">🔔</IconButton></Tooltip>
<Tooltip label="Copied from Slate" placement="bottom"><Badge tone="neutral">Slate CRM</Badge></Tooltip>
```

The child must be one focusable element; it gets `aria-describedby` pointing at the tooltip. Keep the label to a few words (the pill does not wrap). The tooltip hides on Escape, mouse leave and blur. Touch devices show it on focus only, so the control's own `label` must already be complete.
