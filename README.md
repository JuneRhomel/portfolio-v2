# June Rhomel Portfolio V2

A statically rendered, frontend-only portfolio built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4.

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Commands

- `npm test` — run the content and interaction tests
- `npm run lint` — run ESLint
- `npm run typecheck` — validate TypeScript
- `npm run build` — create the production build

## Updating content

Portfolio copy, skills, projects, links, and social profiles live in `src/data/portfolio.ts`. Static images and the downloadable résumé live under `public/`.

The site intentionally has no backend, CMS, API token, or contact-form service. Contact actions use the configured email address.
