# Site TODO — cedricleon.github.io

Working notes. **Git-ignored, not published.**

Legend: `[x]` done · `[ ]` open · **(you)** needs Cédric · **(agent)** I can do

## Where things stand (2026-07-04)

Jekyll 4 migration, design pass (dark mode + mono theme), and content pass
(figures, thumbnails, license, tone pass on all 6 project pages) are done.
**Cédric has read through the content and is happy with it — publishing now.**

GitHub Pages is **already enabled with source = GitHub Actions** — no custom
workflow file needed, GitHub runs its own `actions/jekyll-build-pages` job on
every push to `main`, and it **builds Jekyll 4 successfully**. The one hiccup:
the first deploy attempt failed generically, and a manual "re-run" of that
same run got stuck **queued for over an hour** (confirmed no GitHub-wide
incident right now — this looks like an isolated stuck run, not a platform
issue). Fix: **push a fresh commit** rather than keep waiting on the stuck
run — a new push creates a brand-new run instead of re-queuing the old one,
which should sidestep whatever it got stuck on.

---

## Critical path to publish v1

- [x] Read through all current content for accuracy/tone — **(you)**
- [x] Final safety scan before pushing: build check + scan for stray
      dev notes (found one `@TODO` in `learned-compression-rs.md` that would
      have rendered publicly — turned into an HTML comment so it's invisible
      on the page but still there in the source) — **(agent)**
- [ ] Commit + push the current batch of changes (LICENSE, new figures/
      thumbnails, SAR_DDC_FPGA rewrite, tone pass, dark mode, figure-row +
      clickable-facts features) — **(agent, doing now)**
- [ ] Confirm the fresh push produces a new, successful "pages build and
      deployment" run (not the stuck queued one) — **(agent will check)**
- [ ] Once live, sanity-check cedricleon.github.io in a real browser —
      **(you)**
- [ ] Repo visibility: free plan → Pages needs a **public** repo. If you're on
      GitHub Pro/Team, you can go private and the published site stays public
      either way — **(you decide, check your plan)**

## Working remotely after that (push-only, no local Jekyll)

Given the build already succeeds via GitHub Actions, this plan is sound — a
few habits make it safer:

- Keep commits small and single-purpose, so a failed build is easy to trace
  and easy to revert.
- The GitHub Actions failure email is your safety net — you're already
  getting it, so nothing extra to set up.
- The most common thing that breaks a Jekyll build by hand is **YAML
  front-matter syntax** (missing colon, bad indentation, unquoted colons in a
  string) — double-check front matter specifically when editing on the web
  or a plain editor.
- Filename case matters: the Actions runner is Linux (case-sensitive), so
  `Figure.PNG` referenced as `figure.png` will 404 there even though it works
  on Windows. (Bit us once already during the Jekyll migration.)
- Markdown body text itself is very forgiving — worst case a paragraph
  renders oddly, it won't break the build. Front matter and `{% include %}`
  tags are the higher-risk edits.

## Content — still open (can happen anytime, incl. remotely)

- [ ] Credits / collaborators component near the top of project pages —
      **(agent proposes, iterate)**
- [ ] Compression project public link — specific paper link vs "see Scholar"?
      — **(you decide)**
- [ ] MAYA: exact Maya4 Hugging Face URL — **(you)**:
      https://huggingface.co/buckets/ESA-philab/Maya4
- [ ] BibTeX + links pattern for every publication (done for the survey;
      reuse) — **(agent)**: other publications not published yet, or check
      DLR elib
- [ ] BNN/AdderNet (Tigran) write-up; acknowledge Tigran in the RS_DC repo —
      **(you, later)**
- [ ] Release the MAYA repo + add its link (rss-digest is already public) —
      **(you, later)**
- [ ] MAYA full EUSAR 2026 citation once proceedings publish — **(you,
      later)**
- [ ] Same de-LLM tone pass for `about.md` / `index.html` — only
      `_projects/*.md` covered so far
- [ ] Add the date (or range) to all projects

## Design polish (post-v1, not urgent)

- [ ] Make images clickable (lightbox-style), like
      https://jamstackthemes.dev/demo/theme/jekyll-theme-serial-programmer/
- [ ] Revisit the heading font — currently monospace, you found it a touch
      "chunky"; try a lighter weight or a sans alternative
- [ ] In light mode, projects card should be of a very light blue instead of gray
- [ ] Make the thumbnails less high (smaller height), and crop the text out of the Hylightning logo.
- [ ] Replace the ScaleHyperpior architecture sthumbnail with the tikx version so colors match the other thumbnails.

## Ideas / later

- [ ] Home page as a reverse-chronological **news feed** (Jekyll posts)
- [ ] Multiple **CV variants** (short / full / research / machine-readable), after v1 — the current CV is the full one. Users should be able to see the differnet CV with a drop-down menu.
- [ ] HyLightning: publish the workshop notebook + slides as a blog post
- [ ] A "Posts" section, next to Publications:
  - [ ] Blog post about the Zotero + Obsidian + LaTeX workflow as a researcher
  - [ ] 

## Done (recent)

- [x] Migrate to Jekyll 4 (layouts, includes, `projects` collection,
      publications data)
- [x] Footer reorder + real Kudos logo (traced from the real logo SVG)
- [x] Comment the setup files (`_config.yml`, `_includes/*`, `_layouts/*`)
- [x] CLAUDE.md conventions (incl. no-hard-wrap-prose rule)
- [x] Design refresh: layered-grey palette, monospace headings/UI, dark/light
      toggle, higher-contrast links
- [x] Survey, MAYA (onboard-sar-compression), learned-compression-rs, and
      SAR_DDC_FPGA: real figures/thumbnails wired in
- [x] Tool thumbnails (HyLightning, RSS article digest) wired in; RSS project
      page updated after the repo went public
- [x] LICENSE added: CC BY 4.0 for content, MIT for code, with third-party/
      reproduced-figure carve-outs
- [x] SAR_DDC_FPGA: full story rewrite (situation → MERLIN → Amao-Oliva DDC →
      our FPGA work), "To be published" badge, no results shown since the
      paper isn't out
- [x] De-LLM tone pass on the other 5 project pages
