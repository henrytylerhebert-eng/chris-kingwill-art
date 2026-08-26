# Christopher Kingwill — Natural History Dioramas

A responsive portfolio and provisional brand system for Christopher Kingwill’s
natural-history diorama practice.

## Run locally

```bash
npm install
npm run dev
```

## Quality checks

```bash
npm run check
npm run build
```

## Temporary GitHub Pages deployment

The temporary public site is configured for:

`https://henrytylerhebert-eng.github.io/chris-kingwill-art/`

Publish an approved update with:

```bash
npm run deploy:pages
```

This creates the Pages-specific Vite build and publishes `dist/` to the
`gh-pages` branch. The source remains on `main`.

The content check confirms required fields and all referenced artwork files. It
also blocks `ready` status until a real studio email and an explicit Instagram
decision are recorded.

## Project map

- `content/site.json`: artist statement, biography, links, and readiness
- `content/artworks.json`: the five dioramas, field notes, and image order
- `public/artwork/`: 18 web-optimized image derivatives
- `docs/brand-guide.md`: positioning, identity system, and approval gates
- `docs/content-intake.md`: remaining content and launch decisions
- `docs/source-truth.md`: provenance and identity mismatch

## Status

- Implemented: responsive portfolio, real image galleries, artwork lightbox,
  artist statement, field notes, YouTube section, about section, commission
  pathway placeholder, content model, and validation gate.
- Review required: name spelling, all scientific/biographical claims, image
  rights, availability, and contact/social information.
- Not implemented: CMS, ecommerce, analytics, enquiry form, or custom domain.
