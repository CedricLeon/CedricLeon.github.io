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

## v1 is live 🎉

Pushed as commit `79efdab` (2026-07-04). The fresh push superseded the stuck
queued run — confirmed via the public API that build, deploy, and
report-build-status all succeeded, and **cedricleon.github.io is live** with
the new content (checked the homepage and the SAR_DDC_FPGA page directly).

- [x] Read through all current content for accuracy/tone — **(you)**
- [x] Final safety scan before pushing: build check + scan for stray dev
      notes (found one `@TODO` in `learned-compression-rs.md` that would have
      rendered publicly — turned into an HTML comment) — **(agent)**
- [x] Commit + push (excluded `.vscode/` and 6 unused/huge SAR_DDC_FPGA
      source images from the commit to keep repo history lean — they're still
      sitting untracked locally in `assets/projects/sar-ddc-fpga/` if wanted
      later)
- [x] Confirmed the fresh run succeeded end-to-end (not the stuck one)
- [x] Sanity-check cedricleon.github.io yourself in a real browser — **(you)**

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

- [x] Credits / collaborators component near the top of project pages —
      **(agent)**: optional `credits: { label, text }` front-matter field,
      customizable per project (e.g. "Builds on", "Thanks to", "Inspired
      by"), rendered as a small pill + text, right under the links. You've
      already started using it on a few projects yourself.
- [x] `project_date:` added to all 6 projects with the ranges you gave me
      (SAR_DDC_FPGA 2025–2026, MAYA_DC 2026, Survey 2023–2025, LIC for RS
      2023, HyLightning 2022–Present, RSS digest 2025–Present) — shown as a
      pill top-right, level with "← Back to projects".
- [ ] Compression project public link — specific paper link vs "see Scholar"?
      — **(you decide)**
- [ ] MAYA: exact Maya4 Hugging Face URL — **(you)**:
      https://huggingface.co/buckets/ESA-philab/Maya4
- [ ] BibTeX + links pattern for every publication (done for the survey;
      reuse) — **(agent)**: other publications not published yet, or check
      DLR elib
- [ ] Add the SAR_DDC_FPGA paper to `_data/publications.yml` once it's on
      arXiv — **(you)**: use `type: "Preprint"`
- [ ] BNN/AdderNet (Tigran) write-up; acknowledge Tigran in the RS_DC repo —
      **(you, later)**
- [ ] Release the MAYA repo + add its link (rss-digest is already public) —
      **(you, later)**
- [ ] MAYA full EUSAR 2026 citation once proceedings publish — **(you,
      later)**
- [ ] Same de-LLM tone pass for `about.md` / `index.html` — only
      `_projects/*.md` covered so far
- [ ] About page: expand into subsections (Education / Research interests /
      Teaching / etc.) — **(you)**: no code needed, just add `## Heading`
      Markdown headings to `about.md` like any other page; ask if you'd
      also like a jump-link table of contents once there are several.

## Design polish

- [x] Sun/moon toggle icon redrawn (was visibly lopsided — rebuilt with 8
      evenly-rotated rays, same technique as the Kudos star)
- [x] Nav reordered: Home, Projects, Publications, CV, About, then the
      theme toggle at the very right
- [x] Sticky footer — stays pinned to the bottom of the viewport on
      short-content pages (e.g. home) instead of floating mid-page; still
      flows normally after content on long pages. Also shrunk (equal
      padding all round, was much taller at the bottom) and the social-link
      row is now centred both ways instead of hugging the left edge.
- [x] Footer social links lift slightly on hover instead of growing (the
      grow felt less smooth than a small `translateY`); Kudos icon rendered
      larger (it read smaller than the others at the same 1em box)
- [x] Project-page lead/summary now renders as an Obsidian-style callout box
      (tinted panel + coloured left bar) instead of reading like body text
- [x] Thin `<hr class="rule">` divider added under the project title, and
      another after the facts block when a footnote follows
- [x] Credits restyled to stand out more (label is now a small dark pill,
      text in full ink instead of muted) and moved to sit under the link-row
      instead of above it
- [x] Publications rolled back to a simpler, plain title-link (no more
      "stretch the whole row" trick — it made text inside the item, like
      the author list, awkward to select). Title links straight to the
      article when published; plain text otherwise. Kept: authors/venue on
      separate lines, the type tag, "… · Proceedings to come" for
      unpublished entries. The abstract hover card was tried and then rolled
      back too — no abstract mechanism anymore, at your request.
- [x] Publication title colour: was accent blue, now inherits the normal ink
      colour (reads white in dark mode, dark ink in light mode) — still a
      real link, just not shouting blue
- [x] "Cite" button added (before BibTeX/Project page): copies a
      ready-to-paste reference string via a new `citation: { style, text }`
      field per publication; the confirmation toast reads "Citation
      ({{ style }}) copied to your clipboard", so the style label (currently
      "ACM Ref" on the survey) is whatever fits a future publication's venue
      (IEEE, APA, …). The copy-to-clipboard code in `site.js` is now generic
      (`data-copy` / `data-copy-msg`), shared between Cite and BibTeX.
- [x] Image lightbox: click any figure to see it full-size on a dark
      overlay; click anywhere or press Escape to close. Plain JS in
      `site.js`, no dependency.
- [x] Light mode: project/generic cards now use a soft blue tint
      (`--card-bg`) instead of grey, via a new token — dark mode unchanged
- [ ] Revisit the heading font — currently monospace, you found it a touch
      "chunky"; try a lighter weight or a sans alternative
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
