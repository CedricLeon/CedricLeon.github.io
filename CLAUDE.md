# CLAUDE.md — project conventions for cedricleon.github.io

Personal academic/professional website for Cédric Léonard (refer to as **user**).
Audience: recruiters and potential collaborators. Tone: formal/academic, with a lightly friendly intro on the home page.

## Tech & hosting
- **Jekyll 4** static site generator. Content in Markdown/HTML + Liquid; a single
  hand-written `style.css`; minimal vanilla JS (`assets/js/site.js`, only the
  BibTeX copy button). No CSS/JS framework, no npm.
- Hosted on **GitHub Pages** at <https://cedricleon.github.io>. Because it's
  Jekyll 4 (newer than Pages' built-in Jekyll 3.x), deploy via a **GitHub Actions**
  workflow, not the legacy native build. Push to `main` → Action builds & deploys.
- Root-relative links (`/style.css`, `/projects.html`). No custom domain yet.

## Local preview
Requires Ruby + Bundler (installed via winget: `RubyInstallerTeam.RubyWithDevKit.3.3`).
In a terminal **that has Ruby on PATH** (open a fresh one; RubyInstaller adds it):

```bash
bundle exec jekyll serve     # → http://127.0.0.1:4000, rebuilds on save
```

The old `python -m http.server` / VS Code Live Server preview no longer works —
the sources contain Liquid and must be built first.

## Repo layout
- `_config.yml` — config (collections, layout defaults, `exclude` list).
- `_layouts/default.html` — base page (head + header/nav + footer + `<main>`).
- `_layouts/project.html` — project detail (wraps `default`; renders back-link,
  title + badge, link-row, lead, `{{ content }}`, facts, footnote).
- `_includes/` — `head.html`, `header.html` (nav, highlights current page),
  `footer.html` (social links: Email · LinkedIn · Scholar · GitHub · Kudos),
  `figure.html` (captioned image), `project-card.html` (index card).
- `_projects/*.md` — the `projects` collection; one file per project →
  `/projects/<slug>/`.
- `_data/publications.yml` — the publications list.
- `index.html`, `about.md`, `projects.html`, `publications.html` — top pages.
- `style.css` — the single stylesheet (design tokens in `:root`).
- `assets/` — images (`assets/projects/<slug>/…`) + `assets/js/site.js`.
- `_site/` — build output (git-ignored; never edit by hand).
- In the repo but excluded from the built site (`_config.yml` `exclude`):
  `README.md`, `TODO.md`, `CLAUDE.md`, `Short_bio.md`.
- `project_repos/` — local clones of Cédric's research repos, used ONLY as source
  material for writing project pages. **Git-ignored; never published** (contains
  private / unreleased / DLR-internal work).

## How to add content

**A project** → create `_projects/<slug>.md`:

```yaml
---
title: "Human-readable title"
category: research        # or: tool   (tools render in a lighter section)
order: 5                  # higher = more recent; cards shown most-recent-first
badge: "Published"        # optional;  badge_class: published | wip
badge_class: published
thumb: /assets/projects/<slug>/thumb.png    # optional card image
thumb_alt: "alt text"
summary: "1–2 sentences for the card."
tags: [Tag A, Tag B]
lead: "1–2 sentence motivation (rendered as the lead paragraph)."
links:                    # optional resource links (detail page)
  - { label: "Paper", url: "https://…" }
facts:                    # optional 'at a glance' list
  - { label: "Task", value: "…" }
footnote: "A fuller write-up is coming."    # optional
---
Markdown body. Figures via the include:
{% include figure.html src="/assets/projects/<slug>/x.png" alt="…" caption="…" %}
```

**A publication** → add an entry to `_data/publications.yml`:

```yaml
- title: "…"
  authors: "…"
  venue: "…"
  year: 2026
  article_url: "https://doi.org/…"    # optional → "Article" link
  project_url: "/projects/<slug>/"     # optional → "Project page" link
  bibtex: |                             # optional → copy-to-clipboard "BibTeX" button
    @article{…}
  badge: "Details TBC"                  # optional
  note: "extra meta suffix"             # optional
```

## Writing conventions
- **Voice:** first person; **"we" by default**, "I" when the work was solo. The
  About bio is third person (deliberate exception).
- **Angle:** lead with motivation in 1–2 short sentences; keep pages lay-friendly
  (Cédric writes the deeper/blog versions himself).
- **Never fabricate** project descriptions, results, citations, or bio claims —
  ask Cédric, or read the real repo under `project_repos/`.
- Research/tool cards are ordered **most-recent-first** (by `order`, descending).

## Source style
- **Do not hard-wrap prose.** Write each paragraph as a single line and let the
  editor soft-wrap. Markdown treats single newlines inside a paragraph as spaces,
  so hard-wrapping adds nothing and only makes editing harder. (Existing files
  aren't reflowed yet — the user will rewrite them before the first publish.)
- **Comment the setup files** (`_config.yml`, `_includes/*`, `_layouts/*`): a short
  note on what each does and its `include.*` parameters. Use Liquid `{%- comment -%}`
  for template internals (not shipped to the page); HTML comments are fine for small
  fragments.

## Design
- Slate-blue accent (`--accent: #2a4d77`) on white; dark slate text; system font
  stack; light mode only. Design tokens live in `:root` at the top of `style.css`.
  (Current look is intentionally minimal but reads "too white" — a colour/warmth
  pass is planned; see `TODO.md` phase 5.)

## Gotchas
- **Filename case:** GitHub Pages (Linux) is case-sensitive — match asset filename
  case exactly in references (`.png` ≠ `.PNG`).
- **Preview** only through `jekyll serve`, never a plain static server on the sources.
- To verify visually without a browser: `bundle exec jekyll build`, serve `_site/`
  (`python -m http.server --directory _site`), and screenshot with headless Chrome
  plus a cache-buster query (headless min renderable width ≈ 480px).
