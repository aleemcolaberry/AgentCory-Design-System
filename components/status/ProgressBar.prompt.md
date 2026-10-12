Progress when it can be measured (uploads, imports, multi-step onboarding) or an indeterminate sweep for a page-level wait.

```jsx
<ProgressBar label="Importing 2,100 inquiries" value={64} showValue />
<ProgressBar label="Syncing with Slate" />                       // indeterminate
<ProgressBar size="sm" tone="success" value={100} />
<ProgressBar label="Step 2 of 4" value={2} max={4} />
```

Use `label` so screen readers get a name; the value is exposed via `aria-valuenow`. Never fake progress: if you cannot measure it, leave `value` out. Switch to `tone="success"` at 100% and follow with a `Toast` or `Alert tone="success"`; on failure show `Alert tone="danger"` with Retry.
