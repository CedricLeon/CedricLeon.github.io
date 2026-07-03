# Site TODO & roadmap — cedricleon.github.io

Working notes. **Git-ignored, not published.** Single source of truth
(supersedes the old README TODOs and `project_repos/QUESTIONS_for_Cedric.md`).

Legend: `[x]` done · `[ ]` open · **(you)** needs Cédric · **(agent)** I can do

## Roadmap (agreed phases)

1. **Finish setup & shared understanding** (with agent) — Jekyll, deploy, how it works. ← we are here
2. **Add all basic info** (your input, agent edits) — figures, links, facts, credits, CV.
3. **Rough tone pass** (agent, on your instruction) — de-LLM, cut redundancy → a clean base to review.
4. **Detailed content review / writing** (you) — you write most pages/posts; drop story notes here.
5. **Design / theme update** (agent proposes → you pick → agent builds) — warm up the "too white" look; later a light/dark toggle.
6. **Final check → publish** (enable Pages via Actions).

> Watch-outs (from chat): the tone pass (3) is partly wasted if you rewrite pages in (4) — so keep it light / per-page; consider a quick colour pass *early* so you review content on a nicer canvas; and a **test deploy early** would catch Linux/case/build issues before the big content push.

---

## Phase 1 — setup (nearly done)

- [x] Migrate to Jekyll 4 (layouts, includes, `projects` collection, publications data)
- [x] Footer reorder + real Kudos logo (hand-built inline SVG)
- [x] Comment the setup files (`_config.yml`, `_includes/*`, `_layouts/*`)
- [x] CLAUDE.md conventions (incl. no-hard-wrap-prose rule)
- [ ] **Deploy via GitHub Actions** (Jekyll 4) + first commit — set up now that `jekyll serve` runs **(agent)**

## Phase 2 — basic info (your assets + agent edits)

- [ ] Survey: latest figures as PNG/SVG (current ones are older PDFs) — **(you)** → agent swaps
- [ ] MAYA: a figure (pipeline / RD curve / reconstruction) — **(you)**
- [ ] Thumbnails for MAYA, SAR_DDC, and the two tool cards — **(you)**
- [ ] Credits / collaborators component near the top of project pages — **(agent proposes, iterate)**
- [ ] Compression project public link — specific paper link vs "see Scholar"? — **(you decide)**
- [ ] MAYA: exact Maya4 Hugging Face URL — **(you)**
- [ ] BibTeX + links pattern for every publication (done for the survey; reuse) — **(agent)**
- [ ] BNN/AdderNet (Tigran) write-up; acknowledge Tigran in the RS_DC repo — **(you, later)**
- [ ] Release private repos (rss-digest, MAYA) + add their links — **(you, later)**
- [ ] MAYA full EUSAR 2026 citation once proceedings publish — **(you, later)**

## Phase 3 — tone pass (agent, on your instruction)

- [ ] De-LLM the draft: cut redundancy, tighten, plainer voice → a base for your review

## Phase 4 — detailed content (you)

- [ ] Write / expand most pages; add the story you want per project (drop notes here)

## Phase 5 — design / theme (agent proposes → you pick → agent builds)

- [ ] Explore directions to warm up the "too white" look (agent mock-ups; you pick)
- [ ] Light / dark theme toggle — later

## Phase 6 — publish

- [ ] Enable GitHub Pages (source: GitHub Actions) + go live
- [ ] Update CLAUDE.md / README if anything changed

## 💡 Ideas / later

- [ ] Home page as a reverse-chronological **news feed** (Jekyll posts)
- [ ] Multiple **CV variants** (short / full / research / machine-readable)
- [ ] HyLightning: publish the workshop notebook + slides as a blog post
