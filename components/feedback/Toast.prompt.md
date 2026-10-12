Brief confirmation after an action ("Saved", "Call booked", "Message sent"), gone in 6 seconds. Not for errors the user must act on: those are an `Alert` in place.

```jsx
const [toasts, setToasts] = useState([]);
const push = (t) => setToasts((l) => [...l, { id: Date.now(), ...t }]);
const drop = (id) => setToasts((l) => l.filter((t) => t.id !== id));

<ToastRegion>
  {toasts.map((t) => (
    <Toast key={t.id} tone={t.tone} title={t.title} onDismiss={() => drop(t.id)}
      action={t.undo && <Button size="sm" variant="onInk" onClick={t.undo}>Undo</Button>}>{t.body}</Toast>
  ))}
</ToastRegion>
```

Rules: one `ToastRegion` per page; newest at the bottom; at most three visible. Keep copy to a title and one short line. Offer `Undo` instead of a confirm dialog for reversible actions. Toasts pause while hovered or focused. `duration={0}` only for a toast with an action the user must choose.
