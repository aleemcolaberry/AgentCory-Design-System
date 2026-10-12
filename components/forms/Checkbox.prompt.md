Labelled checkbox for consent, multi-select lists, and bulk selection.

```jsx
<Checkbox label="Send me the recording" defaultChecked />
<Checkbox label="Select all" indeterminate />
<Checkbox label="I agree to the terms" hint="Required to book" onChange={setOk} />
<Checkbox label="I agree to the terms" error="Tick this to book your demo" />
```

Use `Toggle` for immediate on/off settings; use `Checkbox` when the choice is submitted with a form. Show `error` only after submit (never while the user is still reading), and keep the submit button enabled so the message can appear.
