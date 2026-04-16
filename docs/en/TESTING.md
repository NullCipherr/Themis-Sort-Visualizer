# Testing

## Current Status

No automated test suite is currently configured in `package.json`.

## Manual Smoke Checklist

1. Start app with `npm run dev`.
2. Open `http://localhost:5173`.
3. Navigate through `Home`, `Studio`, `Insight`, and `Guide`.
4. In `Studio`, validate:
   - `Play`, `Pause`, `Step`, and `Reset`;
   - speed and array-size sliders;
   - algorithm switching;
   - audio toggle.
5. Build and preview:

```bash
npm run build
npm run preview
```

## Recommended Test Plan

- Unit tests for each sorting generator:
  - sorted output correctness,
  - step integrity contract,
  - edge cases (empty, single-element, repeated values).
- Component tests for visualizer controls and route transitions.
- E2E smoke tests for full user flow.
