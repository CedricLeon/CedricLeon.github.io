# Site TODO — cedricleon.github.io

Working notes, forward-looking only. **Not published.** For how things work and why decisions were made, see `CLAUDE.md` (conventions) and `git log` (history) — this file is just what's left to do.
Legend: `[ ]` open · **(you)** needs Cédric · **(agent)** an agent can do it

## Current state

**v1 is live at cedricleon.github.io.** All 6 project pages, publications, about, and home have real, but minimal content; design (dark/light mode, mono theme) and the license are in place.

## Content

- [ ] Compression project (`onboard-sar-compression`) public link — specific paper link vs. "see Scholar"? — **(you decide)**
- [ ] MAYA: exact Maya4 Hugging Face URL — **(you)**: https://huggingface.co/buckets/ESA-philab/Maya4
- [ ] Add the SAR_DDC_FPGA paper to `_data/publications.yml` once it's on arXiv — **(you)**: use `type: "Preprint"`, and a `citation`/`bibtex` block once you have one
- [ ] BibTeX/citation entries for other publications as they're confirmed (pattern established on the survey entry — reuse it) — **(agent)**
- [ ] BNN/AdderNet (Tigran) write-up; acknowledge Tigran in the RS_DC repo — **(you, later)**
- [ ] Release the MAYA repo + add its link (rss-digest is already public) — **(you, later)**
- [ ] MAYA full EUSAR 2026 citation once proceedings publish — **(you, later)**
- [ ] De-LLM tone pass for `about.md` / `index.html` — only `_projects/*.md` got this pass so far
- [ ] About page: expand into subsections (Education / Research interests / Teaching / etc.) — **(you)**: no code needed, just add `## Heading` Markdown headings like any other page; ask if a jump-link table of contents would help once there are several sections
- [ ] Remove address from CV

## Design polish

- [ ] Revisit the heading font — currently monospace, felt a touch "chunky";
      try a lighter weight or a sans alternative
- [ ] Reduce thumbnail height across project cards; crop the text out of the
      HyLightning logo specifically
- [ ] Replace the scale-hyperprior architecture thumbnail with the tikz
      version so its colours match the other thumbnails
- [ ] Lightbox: currently a plain click-to-enlarge overlay — no gallery
      nav (prev/next) between a page's figures; add if it'd be useful

## Ideas / later

- [ ] Home page as a reverse-chronological **news feed** (Jekyll posts)
- [ ] Multiple **CV variants** (short / full / research / machine-readable),
      selectable via a dropdown — current CV stays the full one
- [ ] HyLightning: publish the workshop notebook + slides as a blog post
- [ ] A "Posts" section next to Publications — e.g. a post about the
      Zotero + Obsidian + LaTeX workflow as a researcher

## Known-but-intentional (don't "fix" without asking)

- Six SAR_DDC_FPGA source images (RD curves, architecture detail, two large
  visualization grids) sit **untracked** in `assets/projects/sar-ddc-fpga/` —
  deliberately not committed (repo-bloat risk, and unused for now), kept
  locally for whenever the paper publishes and more figures are wanted.
