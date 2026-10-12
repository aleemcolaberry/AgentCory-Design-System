# Website UI Kit, AgentCory marketing homepage

A high-fidelity, click-through recreation of the AgentCory marketing site
(https://agentcory.ai). Built from the live site's content and structure.

## Run
Open `index.html`. It depends on the compiled `_ds_bundle.js` (generated at the
project root); icons come from the bundled `Icon` set.

## Surfaces
- `SiteHeader.jsx`, sticky blurred nav with wordmark + primary CTA.
- `Hero.jsx`, headline, gradient stat row, floating Cory chat preview.
- `Workflows.jsx`, the five "How Cory Works" automated workflows with metric chips.
- `Features.jsx`, "Why teams choose Cory" 3-col benefit grid (FeatureCard).
- `Proof.jsx`, testimonials, dark closing CTA, and footer.
- `ChatWidget.jsx`, floating Cory chat widget (typing indicator, sending / sent / failed + Retry, offline banner, presence dot) + demo-request Dialog (validation on submit, submitting state, success).
- `App.jsx`, composes the page and wires chat/demo open state.

## Interactions
- Click **Try Cory Now** or the chat FAB → opens the Cory chat widget; sending a
  message shows it as sending, then sent; Cory's typing indicator plays before the
  canned reply. Go offline (DevTools) to see the warning Alert and a failed send with Retry.
- Click **Book a Demo / Book My Demo** → opens the demo-call Dialog (focus trap,
  Escape). Submit empty to see field errors; valid input shows the loading button
  then the success state.

## Components used
Button, IconButton, Badge, Avatar, StatCard, FeatureCard, Testimonial, ChatBubble,
TypingIndicator, Input, Dialog, Alert, all from the design-system bundle
(`window.DesignSystem_ebeb85`).
