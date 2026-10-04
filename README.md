# Webpage Harness

A free, open-source starting point for building and publishing a small website
with a coding agent. One copy of this repository becomes one website. The site
is a static Astro project, so it runs locally and can be published to
Cloudflare Pages without a database or paid AI service.

The included **Northline Studio** website is fictional sample content. Its
contact details and privacy text are deliberately unfinished. The launch audit
will fail until you replace and review them.

## Start here

1. On GitHub, choose **Use this template** to make a repository in your own
   account. Clone your copy. A plain clone of this upstream repository is also
   fine for local work, but you will need your own repository before using
   Cloudflare's Git deployment. Choose a private repository if your site brief
   or draft content should not be public.
2. Open the folder in Codex, Claude Code, or another coding agent. Send:

   > Help me build my website. Read AGENTS.md and SITE_BRIEF.md, then guide me
   > through the questions one step at a time. Build a local preview before we
   > discuss publishing.

3. Share your real business or project details, approved photos, links, and
   preferred contact route. The agent will update `SITE_BRIEF.md`,
   `site.config.json`, and the site files. Review the local preview together.
4. When the site is ready, follow [the Cloudflare Pages guide](docs/cloudflare-pages.md)
   with the agent. You control your GitHub, Cloudflare, and domain accounts.

No ChatGPT sign-in or API key is needed by this project. Your coding agent may
have its own account or subscription requirements.

## Run it yourself

Use Node.js 22.16 or later. npm comes with Node.js.

```bash
npm ci
npm run dev
```

Open the local URL printed by Astro. The main content lives in
`site.config.json`; images go in `public/images/`. An agent can also adjust
`src/pages/` and `src/styles/global.css` when the starter layout needs to fit
your work.

Before publishing:

```bash
npm run validate
npm run audit
npm run check
npm test
npm run build
npm run preview
```

`npm run audit` is expected to fail on a fresh clone. It checks for the
fictional identity, sample photo, placeholder contact details, missing images,
and unreviewed privacy text. Passing checks are a starting point for a human
review of the rendered pages, content, links, and deployment.

## What this builds

- A responsive main page with an introduction, offerings, about section,
  optional external links, and a direct email contact action.
- A separate privacy page whose wording you must adapt to your real setup.
- Static HTML in `dist/`, suitable for Cloudflare Pages or another static host.

There is no built-in form, shop, analytics, account system, or hosting bill from
this repository. If your project needs those, discuss the extra scope and data
handling with your agent before adding them.

## Project map

| Path | Purpose |
| --- | --- |
| `AGENTS.md`, `CLAUDE.md` | Agent instructions for Codex, Claude Code, and similar tools |
| `SITE_BRIEF.md` | Your confirmed details and progress across agent sessions |
| `site.config.json` | Website copy, links, colours, and image paths |
| `src/pages/`, `src/styles/` | Website layout and styling |
| `public/images/` | Images you have permission to use |
| `scripts/`, `tests/` | Configuration checks and launch gate |
| `docs/cloudflare-pages.md` | Publishing and domain setup |

## Contributing

Ideas, bug reports, and improvements are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md).
The code and included sample asset are available under the [MIT licence](LICENSE).
