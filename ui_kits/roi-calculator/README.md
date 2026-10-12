# ROI Calculator UI Kit, AgentCory

A faithful, fully-interactive recreation of the ROI calculator shown on
https://agentcory.ai. This is a *real* product surface from the live site
(not invented): the same input fields, adjustable impact sliders, and projected
annual-impact readout.

## Run
Open `index.html`. Depends on `_ds_bundle.js` (project root); icons come from the bundled `Icon` set.

## Files
- `RoiCalculator.jsx`, the whole tool: current-metrics inputs, Cory-impact
  sliders, and a sticky gradient results panel that recomputes live.

## Interactions
Edit any input or drag any slider, Additional Applications, Enrollments,
Revenue Lift, Hours Saved, and the headline ROI % all update instantly. The
results panel is an `aria-live` region.

## States
- Inputs clamp at 0; rates over 100% and zero inquiries show inline field errors.
- With no inquiries or tuition the results panel shows an on-ink `EmptyState`
  (Cory voice) instead of fake numbers.
- The model note is an `Alert tone="info"`.

## Model note
Outputs use a transparent model (30% application→enrollment yield, ~1 min/touch,
and an illustrative annual platform cost) so the demo is dynamic. Swap in the
real model constants if/when available.
