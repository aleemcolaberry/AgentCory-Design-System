Inline feedback banner for page- or section-level messages that stay until resolved (a Toast is for brief confirmations after an action).

```jsx
<Alert tone="info" title="Estimates, not guarantees">Figures assume a 30% application-to-enrollment yield.</Alert>
<Alert tone="success" title="Demo booked">I'll call you Tuesday at 10:00. Check your inbox for the invite.</Alert>
<Alert tone="warning" title="Slate sync is 2 hours behind" action={<Button size="sm" variant="secondary">Retry sync</Button>} />
<Alert tone="danger" title="I couldn't save your changes" onDismiss={close}>Check your connection and try again.</Alert>
```

Tones map to `--surface-/--border-/--text-{info|success|warning|danger}`, so they re-theme in dark mode. Copy rules: lead with what happened, then what to do; errors are from Cory in first person on conversational surfaces ("I couldn't reach the server") and neutral on admin surfaces ("Sync failed"). Never colour alone: the glyph and title carry the meaning. Use `compact` inside cards. One Alert per region; stack problems into one message rather than several banners.
