Labelled text field with soft rounding and a blue focus ring.

```jsx
<Input label="Full Name" required placeholder="Jane Doe" />
<Input label="Phone Number" required type="tel" error="Enter a 10-digit number" />
<Input label="Work Email" warning="Not a .edu address. Still send the demo here?" />
<Input label="Work Email" loading hint="Checking your institution…" />
<Input label="Message" multiline hint="Tell us about your institution" />
```

States: `hint` (default help), `loading` (validating: spinner at inline-end, aria-busy), `error` (red, role=alert, aria-invalid), `warning` (amber: valid but worth a look), `success` (green). Validate on blur, not on every keystroke; on submit, focus the first invalid field. Error copy says how to fix it, not just that it is wrong. `multiline` for a textarea, `required` for the asterisk.
