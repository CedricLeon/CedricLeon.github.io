# CedricLeon.github.io

Personal academic/professional website — bio, projects, publications, and CV.
Served at <https://cedricleon.github.io>.

Built with **Jekyll** (static site generator): content authored in Markdown/HTML
with shared layouts and includes, styled by a single hand-written `style.css`
(light/dark theme via CSS custom properties). No JS framework — just a small
`assets/js/site.js` for the theme toggle, copy-to-clipboard buttons (BibTeX,
citations), and a figure lightbox.

## Local preview

Requires Ruby + Bundler (already installed on this machine). From the repo root:

```bash
bundle exec jekyll serve
```

Then open <http://127.0.0.1:4000>. Jekyll rebuilds automatically when you save —
just refresh the browser.

> **Note:** the old `python -m http.server` / VS Code Live Server workflow no
> longer works on the source files: they now contain Jekyll templating (Liquid)
> that must be built first. Always preview through `jekyll serve`.

## Structure

| Path | Purpose |
|------|---------|
| `_config.yml` | Jekyll configuration |
| `_layouts/` | Page skeletons (`default`, `project`) |
| `_includes/` | Reused fragments (head, header/nav, footer, figure, project-card) |
| `_projects/` | One Markdown file per project (the `projects` collection) |
| `_data/publications.yml` | Publications list (drives `publications.html`) |
| `index.html`, `about.md`, `projects.html`, `publications.html` | Top-level pages |
| `style.css` | Single shared stylesheet |
| `assets/` | Images + `js/site.js` |
| `cv.pdf` | CV download |
| `_site/` | Build output (git-ignored — never edit by hand) |

Working tasks / roadmap: `TODO.md` (git-ignored). Project conventions: `CLAUDE.md`.

## License

Written content and original figures are CC BY 4.0 (`LICENSE`); the Jekyll
site code (layouts, includes, CSS, JS) is MIT (`LICENSE-CODE`). Third-party
logos and figures reproduced from published papers are excluded from both —
see the exceptions noted in `LICENSE`.
