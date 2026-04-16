# Deployment

## Static Hosting (Recommended)

This is a client-side React SPA. Deploy the `dist/` output from Vite.

## Build artifact

```bash
npm run build
```

Generated folder: `dist/`

## Cloudflare Pages

Suggested settings:

- Framework preset: `Vite`
- Build command: `npm run build`
- Build output directory: `dist`
- Node.js: `20+`

SPA routing support is already configured in `public/_redirects`:

```text
/* /index.html 200
```

## GitHub Pages

Use a GitHub Actions workflow to:

1. install dependencies,
2. run `npm run build`,
3. publish `dist/`.

Remember to configure SPA fallback if routing is expanded in the future.
