# ColoRosetta

A static React + TypeScript app with no backend. A one-to-many color translation tool — the user inputs a color value in one of many supported formats and gets translations across 8+ other formats (hex, rgb, rgba, hsl, hsla, lch, named colors, etc).

## Stack

- **React 18** + **TypeScript 5**
- **Vite** (build tool) — replaced Create React App in April 2026
- **Vitest** (test runner) — replaced Jest
- **Node 24**
- Deployed on **Netlify**

## Commands

- `yarn start` — start local dev server at http://localhost:5173
- `yarn build` — production build to `dist/`
- `yarn test` — run Vitest in watch mode
- `yarn test --run` — run tests once (used in CI)
- `yarn preview` — serve the production build locally

## Project structure

- `src/utils/` — all color conversion logic; extensively unit tested
- `src/components/` — UI components (`Input`, `Swatch`, `Footer`)
- `src/App.tsx` — root component
- `public/` — static assets served as-is (favicon, manifest, robots.txt, PWA icons)

## Notes

- Build output is `dist/` (not `build/`)
- `src/history.tsx` is unused — can be deleted along with `@types/history`
- `src/App.test.tsx` is intentionally skipped
- Node version is pinned via `.nvmrc` (read by Netlify and nvm)
- Netlify build config is in `netlify.toml`
- CI runs on GitHub Actions (`.github/workflows/node.js.yml`)
- There is no need to be conservative with this project - we should keep things as up to date as possible
