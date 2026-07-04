---
title: "HyLightning — a Data Science project template"
category: tool
order: 2
thumb: /assets/projects/hylightning-template/thumb.png
thumb_alt: "HyLightning_template logo: PyTorch Lightning, Hydra and Weights & Biases feeding into a stacked-layer icon"
summary: "A ready-to-go template for Data Science projects based on PyTorch Lightning, Hydra and Weights & Biases."
tags: [GitHub, Template, Tutorial]
lead: "A reusable starting point for deep-learning projects. It's the setup I reach for, so I can start experimenting instead of wiring up boilerplate."
links:
  - { label: "GitHub repository", url: "https://github.com/CedricLeon/HyLightning_template" }
  - { label: "Workshop branch", url: "https://github.com/CedricLeon/HyLightning_template/tree/workshop" }
facts:
  - { label: "Type", value: "Project template / tooling" }
  - { label: "Stack", value: "PyTorch Lightning · Hydra · Weights & Biases" }
  - { label: "Availability", value: "Public on GitHub" }
---
Starting a new deep-learning project usually means rebuilding the same
boilerplate: logging, configs, cluster scripts. HyLightning does this once, so
I don't have to redo it every time.

It builds on the popular
[lightning-hydra-template](https://github.com/ashleve/lightning-hydra-template)
and adds a few things I kept adding by hand: Weights &amp; Biases logging
turned on by default (it works offline too, syncing later), one-command job
submission to a SLURM cluster, and tidy, per-experiment log folders.

A lighter *workshop* branch strips this back further, for teaching.
