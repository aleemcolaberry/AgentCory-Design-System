Switch for settings that take effect immediately (notifications, autoplay, dark theme in a settings page).

```jsx
<Toggle label="Call me back automatically" defaultChecked />
<Toggle label="Autoplay reels" hint="Muted by default" labelPosition="start" style={{width:'100%'}} />
<Toggle label="Weekly summary" checked={on} loading={saving} onChange={save} />
<Toggle label="SMS alerts" checked={false} error="Couldn't save. Try again." />
```

Needs no Save button. Flip optimistically, set `loading` while the request runs (knob shows a spinner, clicks are ignored), and on failure revert `checked` and set `error`. For choices submitted with a form, use `Checkbox`.
