Reading-direction switch. Put it next to `ThemeToggle` in the header; it sets `dir` and `lang` on `<html>` and the whole system mirrors.

```jsx
<DirectionToggle />
<DirectionToggle labels={{ ltr: 'EN', rtl: 'عربي' }} />
<DirectionToggle variant="onInk" size="sm" />   // on navy panels
```

Persists to `localStorage` (`cory-dir`). Scripts that cache horizontal positions (scroll pins, carousels) should listen for the `cory:direction` event and re-measure. The control itself is always LTR so its two segments never swap places under the user's finger.
