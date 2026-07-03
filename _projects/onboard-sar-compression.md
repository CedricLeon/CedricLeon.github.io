---
title: "Onboard SAR compression before focusing"
category: research
order: 3
summary: "Applying neural image compression to partially-focused (RCMC) SAR data, pushing compression earlier in the onboard processing chain."
tags: [SAR, Neural compression, EUSAR26]
lead: "Synthetic Aperture Radar satellites generate enormous volumes of data. This project asks how early in the onboard processing chain we can apply learned compression — before the image is even fully formed."
facts:
  - { label: "Task", value: "Neural SAR compression, pre-focusing" }
  - { label: "Data", value: "Sentinel-1 (Maya4, ESA Φ-lab)" }
  - { label: "Stack", value: "PyTorch Lightning · Hydra · CompressAI" }
  - { label: "Shared at", value: "EUSAR 2026" }
footnote: "A fuller, lay-friendly write-up is coming."
---
A SAR sensor records raw complex echoes (Level&nbsp;0) that are turned into a
focused image (a Single-Look Complex, Level&nbsp;1) through several
signal-processing steps. Today, compression happens either very early on the raw
echoes, using classical codecs such as BAQ/FDBAQ, or late on the focused image.
We explore an intermediate point: applying neural image compression to
**Range-Cell-Migration-Corrected (RCMC)** data. The decoded RCMC is then
differentiably azimuth-compressed and compared against the ground-truth focused
image, so the network is trained toward the final product while acting earlier
in the pipeline.
