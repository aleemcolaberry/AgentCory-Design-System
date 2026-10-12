Light / dark theme switch. Drop one in the header; it flips `data-theme` on `<html>`, which re-maps every semantic color, shadow, and gradient token.

```jsx
<ThemeToggle />
<ThemeToggle variant="onInk" />   // inside .cory-ink / navy footer
```

Defaults to the OS preference; the choice persists in `localStorage` under `cory-theme`.
