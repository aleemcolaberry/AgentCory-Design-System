Use wherever a list, panel, or search result has nothing to show. Every empty state says what belongs here and offers the one action that fills it; it is never a bare "No data".

```jsx
// Conversational surfaces: Cory speaks
<EmptyState title="I haven't booked any calls yet" action={<Button>Share your number</Button>}>
  Give me a phone number and I'll start reaching out within 60 seconds.
</EmptyState>

// Admin / data surfaces: neutral product voice
<EmptyState scene="search" size="sm" title="No inquiries match"
  action={<Button variant="secondary" size="sm">Clear filters</Button>}>Try a wider date range or fewer filters.</EmptyState>

// Inside an ink panel
<EmptyState onInk variant="plain" title="Tell me your monthly inquiries">I'll project applications, enrollments and revenue.</EmptyState>
```

Three kinds, same component: first-run (teach + primary action), no results (explain the filter + clear it), cleared (celebrate briefly, no action needed). Cory voice is first person and warm; neutral voice is a noun phrase title. Avoid blame ("You haven't…"), avoid "Oops". The action is the only primary on the view.
