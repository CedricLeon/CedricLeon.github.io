---
title: "HyLightning — a Data Science project template"
category: tool
order: 2
project_date: "2022–Present"
thumb: /assets/projects/hylightning-template/thumb.png
thumb_alt: "HyLightning_template logo: PyTorch Lightning, Hydra and Weights & Biases feeding into a stacked-layer icon"
summary: "A ready-to-go template for Data Science projects based on PyTorch Lightning, Hydra and Weights & Biases."
tags: [GitHub, Template, Tutorial]
lead: "A reusable starting point for deep-learning projects. It's the setup I reach for, so I can start experimenting instead of wiring up boilerplate."
links:
  - { label: "GitHub repository", url: "https://github.com/CedricLeon/HyLightning_template" }
  - { label: "Workshop branch", url: "https://github.com/CedricLeon/HyLightning_template/tree/workshop" }
credits: { label: "Credits to", text: "ashleve for the initial repo." }
facts:
  - { label: "Type", value: "Project template / tooling" }
  - { label: "Stack", value: "PyTorch Lightning · Hydra · Weights & Biases" }
  - { label: "Status", value: "Maintained: PRs, dependencies and requested features" }
---
Starting a new deep-learning project usually means rebuilding the same boilerplate: logging, configs, cluster scripts.
HyLightning does this once, so I don't have to redo it every time.

It builds on the popular [lightning-hydra-template](https://github.com/ashleve/lightning-hydra-template) by [@ashleve](https://github.com/ashleve) and adds a few things I kept adding by hand: Weights &amp; Biases logging turned on by default (it works offline too, syncing later), one-command job submission to a SLURM cluster, and tidy, per-experiment log folders.

A lighter **workshop** branch is available for people interested to learn the tools.
It comes with some [introduction slides](https://docs.google.com/presentation/d/1VhEDW5qo41qpVaxhAQvj74T8lBcQTQs2/edit?usp=sharing&ouid=106418272699017544973&rtpof=true&sd=true) and an interactive [Jupyter Notebbok](https://colab.research.google.com/drive/1ZovNE3evNOpmOe-iLMWw4JJ31MTElqHI?usp=sharing).
