---
title: "HyLightning — a deep-learning project template"
category: tool
order: 2
summary: "A ready-to-go deep-learning template (PyTorch Lightning + Hydra + W&B) with SLURM/submitit cluster support and offline logging."
tags: [Template, Lightning + Hydra]
lead: "A reusable starting point for deep-learning research projects — the setup I reach for so I can start experimenting instead of wiring up boilerplate."
links:
  - { label: "GitHub repository", url: "https://github.com/CedricLeon/HyLightning_template" }
  - { label: "Workshop branch", url: "https://github.com/CedricLeon/HyLightning_template/tree/workshop" }
facts:
  - { label: "Type", value: "Project template / tooling" }
  - { label: "Stack", value: "PyTorch Lightning · Hydra · Weights & Biases" }
  - { label: "Availability", value: "Public on GitHub" }
---
HyLightning extends the excellent
[lightning-hydra-template](https://github.com/ashleve/lightning-hydra-template)
with the conveniences I kept re-adding by hand: Weights &amp; Biases logging by
default (including offline, real-time sync on compute nodes via `wandb_osh`),
one-command SLURM job submission through Hydra's submitit launcher,
deterministic-training support, and per-experiment log directories. A lighter
*workshop* branch strips it back for teaching.
