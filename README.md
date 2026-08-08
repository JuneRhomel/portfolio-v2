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

## Railway deployment

The repository includes a production multi-stage `Dockerfile`, standalone Next.js output, a `/api/health` endpoint, and `railway.json` deployment settings.

1. In Railway, create a project from the `JuneRhomel/portfolio-v2` GitHub repository.
2. Deploy the `main` branch. Railway will automatically use the root `Dockerfile`.
3. Under **Networking**, generate a public domain.
4. Add `NEXT_PUBLIC_SITE_URL` with the generated HTTPS URL, without a trailing slash, then redeploy. This updates canonical metadata, structured data, `robots.txt`, and `sitemap.xml`.

No database or other environment variables are required.
