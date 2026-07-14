# jangya.github.io

Personal portfolio site built with Astro 7 and static output.

## Stack

- Astro 7 (static output)
- Plain CSS (no UI framework)
- Markdown content + JSON profile data

## Requirements

- Node.js 20.3.0+
- npm 10+

## Local development

```bash
npm install
npm run dev
```

Run a production preview locally:

```bash
npm run build
npm run preview
```

## Quality checks

```bash
npm run format
npm run format:check
npm run lint
npm run check
```

## Content locations

- Profile data: `src/content/personal-info/profile.json`
- Home intro: `src/content/home/intro.md`
- Name pronunciation content: `src/content/home/phonetic.md`
- Insights posts: `src/content/insights/*.md`

## Astro 7 migration notes

- Project is now on `astro@^7.0.9`.
- `@astrojs/check` is installed and used by `npm run check`.
- ESLint excludes generated Astro artifacts (`.astro/**`) to avoid linting generated type files.
- Astro 7 uses stricter HTML parsing (Rust compiler). Keep Astro/HTML tags properly closed.
- Astro 7 default whitespace handling is `compressHTML: 'jsx'`. If inline text spacing ever looks off, use explicit spaces such as `{" "}` between inline elements.

## Deploy

Push to `main`. CI builds with `npm run build` and publishes `dist/` to `gh-pages`.
