# Carrie Rong Portfolio

Static Astro site for portfolio showcase.

## Setup

Install dependencies:
```
npm install
```

Run local development server:
```
npm run dev
```

Build for production:
```
npm run build
```

Preview production build:
```
npm run preview
```

## Structure

- `src/pages/` — Page routes
- `src/layouts/` — Shared layout templates
- `src/components/` — Reusable components
- `src/content/design/` — Design project markdown files
- `src/styles/` — CSS files
- `src/content.config.ts` — Content collection schema
- `public/` — Static assets (fonts, images, CV)

## Adding a project

1. Create a markdown file in `src/content/design/your-slug.md`
2. Add frontmatter with project metadata
3. Write project content in markdown
4. Site will auto-generate the project page and listing
