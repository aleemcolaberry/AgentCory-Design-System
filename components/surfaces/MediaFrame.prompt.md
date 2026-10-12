Image / video in a rounded, aspect-locked tile. Zooms 2–3% on hover; video shows a gradient play button and mute toggle.

```jsx
<MediaFrame src="cover.jpg" alt="Dashboard redesign" ratio="4 / 3" />
<MediaFrame video src="reel.mp4" poster="reel.jpg" autoplay />
<MediaFrame src="cover.jpg" overlay={<h3 style={{color:'#fff'}}>Agent Cory, admissions AI</h3>} />
```

Ratios map to `--aspect-*` tokens (`16 / 9`, `4 / 3`, `1 / 1`, `4 / 5`, `9 / 16`). No `src` renders a striped placeholder labelled by `alt`.
