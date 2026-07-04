---
title: "RSS article digest"
category: tool
order: 1
thumb: /assets/projects/rss-article-digest/thumb.png
thumb_alt: "RSS article digest pipeline: papers collected, filtered, summarised and organised into a weekly report, built on Zotero, OpenAI and Obsidian"
summary: "A personal research assistant that fetches paper RSS feeds and emails a weekly, LLM-ranked reading digest."
tags: [Literature, Automation, LLM]
lead: "A small personal tool to keep up with the literature without the firehose. It curates recent papers for me and emails a short weekly reading list."
links:
  - { label: "GitHub repository", url: "https://github.com/CedricLeon/rss-article-digest" }
facts:
  - { label: "Type", value: "Automation / personal tool" }
  - { label: "Stack", value: "Python · GitHub Actions · GPT-4o-mini" }
  - { label: "Availability", value: "Public on GitHub" }
---
Two scheduled jobs do all the work, so there's no server to keep running.
Every day, one job checks RSS feeds for new papers and filters out ones I've
already seen, including revised versions of the same arXiv paper.

Once a week, a second job scores every paper against a plain-language
description of my interests, using GPT-4o-mini. It builds a ranked reading
list and emails it to me.

The idea came from [a Reddit post by
u/jrcasey](https://www.reddit.com/r/ObsidianMD/comments/1pmglpy/loving_obsidian_for_my_academic_literature/),
describing a similar RSS-plus-LLM setup built around Zotero and Obsidian
([jrcasey/RSS_Agent](https://github.com/jrcasey/RSS_Agent)). This is my
simplified version of it, with a more detailed report.
