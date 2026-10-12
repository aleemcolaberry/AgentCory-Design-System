Benefit/feature card: icon tile, heading, copy, and capability tags. Lifts on hover.

```jsx
<FeatureCard
  icon={<Icon name="zap" size={24} />}
  title="Lightning-Fast Outreach"
  tags={['30s avg response', 'Natural AI conversation', 'Voicemail detection']}
>
  Cory engages every new inquiry within 60 seconds, ensuring no lead goes cold.
</FeatureCard>
```

`tags` render as small cyan-dotted capability chips. Provide any icon node via `icon`.
