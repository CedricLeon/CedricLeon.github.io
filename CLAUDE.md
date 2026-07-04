# CLAUDE.md — project conventions for cedricleon.github.io

Personal academic/professional website for Cédric Léonard (refer to as **user**).
Audience: recruiters and potential collaborators. Tone: first person, direct,
lay-friendly — a little friendly on the home page, plainer/less jargon-heavy
than a typical paper abstract everywhere else (see "Writing conventions").

**Live at <https://cedricleon.github.io> — published, v1+ is public.** Treat
content changes as visible-to-the-world, not draft.

## Tech & hosting
- **Jekyll 4** static site generator. Content in Markdown/HTML + Liquid; a single
  hand-written `style.css` (light/dark theme via CSS custom properties, no
  framework); minimal vanilla JS (`assets/js/site.js` — theme toggle,
  copy-to-clipboard buttons, figure lightbox). No CSS/JS framework, no npm.
- Hosted on **GitHub Pages**, source = **GitHub Actions**. There is no custom
  workflow file in `.github/workflows/` — GitHub auto-manages a
  `pages build and deployment` workflow (using `actions/jekyll-build-pages`)
  that runs on every push to `main`, and it **does** support Jekyll 4 (unlike
  the legacy "Deploy from a branch" method, which is pinned to Jekyll 3.x).
  Just push to `main`; nothing else to configure.
- Root-relative links (`/style.css`, `/projects.html`). No custom domain yet.
- Repo is **public**. Free GitHub Pages requires this (private repos need
  Pro/Team); if the user upgrades, the repo can go private without affecting
  the published site.

## Local preview
Requires Ruby + Bundler (installed via winget: `RubyInstallerTeam.RubyWithDevKit.3.3`):

```bash
bundle exec jekyll serve     # → http://127.0.0.1:4000, rebuilds on save
```

The user sometimes works from a machine with no local Jekyll — in that case,
edits get pushed straight to `main` and GitHub Actions builds/deploys them.
That's a reasonable workflow (see "Gotchas" for what to watch out for when
verifying by eye isn't possible before pushing).

## Repo layout
- `_config.yml` — config (collections, layout defaults, `exclude` list).
- `_layouts/default.html` — base page (head + header/nav + footer + `<main>`).
- `_layouts/project.html` — project detail page. Renders, top to bottom:
  back-link + `project_date` pill (same row), title + badge, a `<hr class="rule">`,
  `link-row`, `credits`, the `lead` as a callout box, `{{ content }}`, another
  `rule` + `facts` list, and an optional `footnote` (preceded by one more
  `rule`, only when a footnote exists).
- `_includes/` — `head.html` (sets the theme before first paint, to avoid a
  flash), `header.html` (nav — order: Home, Projects, Publications, CV, About,
  then the dark/light toggle; highlights the current page), `footer.html`
  (social links: Email · LinkedIn · Scholar · GitHub · Kudos — sticky to the
  bottom of the viewport on short pages), `figure.html` (captioned image;
  supports an optional `width` param and pairs into `<div class="figure-row">`
  for side-by-side before/after comparisons; every figure is click-to-enlarge
  via the lightbox), `project-card.html` (index card).
- `_projects/*.md` — the `projects` collection; one file per project →
  `/projects/<slug>/`.
- `_data/publications.yml` — the publications list.
- `index.html`, `about.md`, `projects.html`, `publications.html` — top pages.
- `style.css` — the single stylesheet (design tokens in `:root`; see "Design").
- `assets/` — images (`assets/projects/<slug>/…`) + `assets/js/site.js`.
- `_site/` — build output (git-ignored; never edit by hand). Any `_site_*`
  directory is a throwaway local preview copy (also git-ignored) — safe to
  delete, shouldn't linger between sessions.
- `LICENSE` (CC BY 4.0, content) and `LICENSE-CODE` (MIT, the Jekyll
  code/templates) — split on purpose, with third-party assets and figures
  reproduced from papers explicitly carved out. See `LICENSE` for the exact
  exceptions before assuming something is freely reusable.
- In the repo but excluded from the built site (`_config.yml` `exclude`):
  `README.md`, `TODO.md`, `CLAUDE.md`, `Gemfile`, `Gemfile.lock`.
- `project_repos/` — local clones of Cédric's research repos (and the LaTeX
  source of unpublished papers), used ONLY as source material for writing
  project pages. **Git-ignored; never published** (contains private /
  unreleased / DLR-internal work). Genuinely useful for sourcing accurate
  technical details (background, citations, real figures) — check here before
  asking the user, and before publishing check whether a paper is out yet.

## How to add content

**A project** → create `_projects/<slug>.md`:

```yaml
---
title: "Human-readable title"
category: research        # or: tool   (tools render in a lighter section)
order: 5                  # higher = more recent; cards shown most-recent-first
project_date: "2024–2026" # optional; single date or range, top-right pill.
                           # NOT `date` — that's a reserved Jekyll variable
                           # that silently auto-fills from the file's
                           # timestamp if left unset (see Gotchas).
badge: "Published"        # optional;  badge_class: published | wip
badge_class: published
thumb: /assets/projects/<slug>/thumb.png    # optional card image
thumb_alt: "alt text"
summary: "1–2 sentences for the card."
tags: [Tag A, Tag B]
lead: "1–2 sentence motivation (rendered as a callout box on the detail page)."
credits: { label: "Thanks to", text: "…" }  # optional; label is customizable
                           # per project (e.g. "Builds on", "Inspired by",
                           # "Credits to"); rendered as a small pill + text,
                           # under the link-row.
links:                    # optional resource links (detail page)
  - { label: "Paper", url: "https://…" }
facts:                    # optional 'at a glance' list
  - { label: "Task", value: "…" }
  - { label: "DOI", value: "10.1145/…", url: "https://doi.org/…" }  # optional
                           # `url` makes the value a clickable link
footnote: "A fuller write-up is coming."    # optional
---
Markdown body. Figures via the include:
{% include figure.html src="/assets/projects/<slug>/x.png" alt="…" caption="…" %}

Side-by-side pair (e.g. before/after):
<div class="figure-row">
{% include figure.html src="…" alt="…" caption="Before: …" %}
{% include figure.html src="…" alt="…" caption="After: …" %}
</div>
```

**A publication** → add an entry to `_data/publications.yml`:

```yaml
- title: "…"
  authors: "…"
  venue: "…"
  year: 2026
  type: "Journal paper"                 # optional tag; also: "Conference paper",
                                         # "Preprint", "Talk", "Poster", …
  article_url: "https://doi.org/…"      # optional. Present → title becomes a
                                         # link + venue shows the year.
                                         # Absent  → title is plain text + venue
                                         # shows "… · Proceedings to come"
                                         # automatically (no manual flag needed).
  project_url: "/projects/<slug>/"      # optional → "Project page" link
  citation:                             # optional → adds a "Cite" button
    style: "ACM Ref"                    # shown in the toast ("Citation (ACM Ref)
                                         # copied…"); free text — use "IEEE",
                                         # "APA", etc. for a different venue.
    text: "Full ready-to-paste reference string, plain text, no HTML."
  bibtex: |                             # optional → copy-to-clipboard "BibTeX" button
    @article{…}
  badge: "Details TBC"                  # optional, e.g. for a flag beyond the
                                         # automatic "Proceedings to come"
```

## Writing conventions
- **Voice:** first person throughout, including the About page — **"we" by
  default, "I" when the work was solo.** (There is no third-person exception
  anymore; About was rewritten to first person.)
- **Angle:** lead with motivation in 1–2 short sentences; keep pages
  lay-friendly (Cédric writes the deeper/blog versions himself). Prefer short
  sentences and plain words over jargon-dense academic phrasing, even when
  summarising a paper — see any `_projects/*.md` file for the target register.
- **Never fabricate** project descriptions, results, citations, abstracts, or
  bio/date claims — ask Cédric, or read the real repo/paper under
  `project_repos/`. If a fact isn't known (an abstract, a start date, a DOI),
  leave the field unset / commented out rather than invent a plausible one.
- Research/tool cards are ordered **most-recent-first** (by `order`, descending).

## Source style
- **Do not hard-wrap prose.** Write each paragraph as a single line and let the
  editor soft-wrap. Markdown treats single newlines inside a paragraph as spaces,
  so hard-wrapping adds nothing and only makes editing harder.
- A deliberate visual line break (e.g. splitting a short subtitle onto two
  lines) is different from hard-wrapping a paragraph — use a literal `<br>`
  for that; it's a real, visible break, not a source-formatting habit.
- **Comment the setup files** (`_config.yml`, `_includes/*`, `_layouts/*`): a short
  note on what each does and its `include.*` parameters. Use Liquid `{%- comment -%}`
  for template internals (not shipped to the page); HTML comments are fine for small
  fragments.

## Design
- **Both light and dark mode**, toggled by a header button (persisted in
  `localStorage`, defaults to the OS's `prefers-color-scheme`). All colour
  lives in CSS custom properties on `:root`, re-pointed under
  `:root[data-theme="dark"]` — components should always reference a token
  (`var(--ink)`, `var(--accent)`, …), never a hardcoded colour, so both themes
  stay correct automatically.
- Key tokens: `--paper` (page bg), `--surface` (header bar), `--plate` (figure/
  thumbnail background — stays white in both themes, since plots have white
  backgrounds), `--card-bg` (project/generic cards — a soft blue tint in light
  mode, at the user's request), `--bg-subtle` (secondary fills), `--ink`/
  `--muted` (text), `--border`, `--accent`/`--accent-strong`/`--on-accent`,
  `--tag-bg`/`--tag-fg`.
- **Typography:** a "serial-programmer" look — monospace (`--font-mono`) for
  headings, nav, buttons, tags, badges, dates, and other UI chrome; a system
  sans (`--font-sans`) for body prose, which reads better at length. Both are
  system font stacks — nothing is downloaded.
- **Reusable patterns**, all in `style.css`: `.callout` (tinted panel + accent
  left bar — used for a project's `lead`), `.rule` (a plain `<hr>` divider),
  `.figure-row` (side-by-side figure pairs), `.tag`/`.badge` (pill chips),
  `.lightbox` (click-to-enlarge overlay, wired up in `site.js`).
- One thing tried and explicitly rolled back: making a whole publications-list
  item clickable (a "stretched link" over the row). It made body text (author
  lists, etc.) awkward to select. Publications now use a plain title-link
  instead — don't reintroduce the stretched-link pattern there.

## Gotchas
- **`date` is a reserved Jekyll front-matter variable** — it auto-fills from
  the file's own timestamp if left unset, silently. This project's projects
  use `project_date` instead for the user-facing date/range shown on project
  pages. Don't name a custom field `date` without checking `page.date`
  doesn't leak through.
- **Filename case:** GitHub Pages' Actions runner is Linux (case-sensitive) —
  match asset filename case exactly in references (`.png` ≠ `.PNG`). This has
  bitten the project once already.
- **Preview** only through `jekyll serve` (or a built `_site/` served over
  HTTP) — never a plain static server on the *source* files, since they
  contain unrendered Liquid.
- To verify visually without a browser: `bundle exec jekyll build`, serve
  `_site/` (`python -m http.server --directory _site`), and screenshot with
  headless Chrome plus a cache-buster query (headless min renderable width
  ≈ 480px). Clean up any `_site_*` scratch copies afterward.
- **GitHub Pages deploy occasionally gets stuck** (a queued run that won't
  complete or cancel, or a generic "Deployment failed, try again later" on
  the deploy step — the *build* step almost always succeeds, so this is a
  Pages-infrastructure issue, not a content bug). Fix, in order: (1) push
  again — often just resolves itself; (2) if a run is stuck and won't cancel,
  use **Settings → Pages → Unpublish site**, then re-select **GitHub Actions**
  as the source — this resets the deployment environment without touching any
  code/commits; (3) push again to trigger a fresh deploy.
