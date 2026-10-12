Modal for a focused task (short form, confirmation) that must finish before the page continues. Prefer inline UI or a Toast with Undo when the action is reversible.

```jsx
<Dialog open={open} onClose={close} title="Let me call you" description="A 5-minute live demo of my voice."
  actions={<><Button variant="secondary" onClick={close}>Not now</Button><Button loading={busy} onClick={submit}>Request call</Button></>}>
  <Input label="Phone" type="tel" required error={err} />
</Dialog>

<Dialog open={confirm} onClose={cancel} tone="danger" size="sm" title="Delete 3 inquiries?"
  description="They leave Slate too. This cannot be undone."
  actions={<><Button variant="secondary" onClick={cancel}>Keep them</Button><Button variant="ink" onClick={remove}>Delete 3 inquiries</Button></>} />
```

Built in: scrim at `--z-modal`, focus moves to the first field, Tab is trapped, Escape and scrim click close, focus returns to the opener, body scroll locks. Destructive confirms use `tone="danger"`, a question as the title, and an `ink` button whose label names the action and count (never "OK" / "Yes"). While submitting set `dismissible={false}` and `loading` on the primary. One primary per dialog.
