---
title: "RSS article digest"
category: tool
order: 1
summary: "A personal research assistant that fetches paper RSS feeds and emails a weekly, LLM-ranked reading digest."
tags: [Automation, LLM]
lead: "A small personal tool to keep up with the literature without the firehose — it curates recent papers for me and emails a short weekly reading list."
facts:
  - { label: "Type", value: "Automation / personal tool" }
  - { label: "Stack", value: "Python · GitHub Actions · LLM ranking" }
  - { label: "Availability", value: "Private" }
---
The pipeline pulls new papers from configurable RSS feeds every day and
deduplicates them (arXiv revisions included). Once a week, it uses a language
model to score each paper against a plain-language description of my research
interests, then emails a concise, ranked digest. Everything runs on scheduled
GitHub Actions — no server to keep alive.

This is a private repository, so there is no public link for now.
