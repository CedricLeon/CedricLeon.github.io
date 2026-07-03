---
title: "FPGA-enabled ML in Earth observation"
category: research
order: 2
badge: "Published"
badge_class: "published"
thumb: /assets/projects/fpga-ml-eo-survey/applications-tasks.png
thumb_alt: "Bubble chart of Earth-observation applications versus ML tasks"
summary: "A systematic review mapping which EO tasks, ML models, and FPGA platforms the community uses — and how models are optimised for hardware."
tags: [Systematic review, FPGA, ACM CSUR]
lead: "A systematic review of how machine learning is deployed on FPGAs for Earth observation — surveying what the community actually builds, with what models, and on which hardware."
links:
  - { label: "Paper (ACM CSUR)", url: "https://doi.org/10.1145/3800686" }
  - { label: "Code (GitHub)", url: "https://github.com/CedricLeon/Survey_RS-ML-FPGA" }
  - { label: "Dataset", url: "https://huggingface.co/datasets/CedricLeon/Articles_systematic_survey_RS-ML-FPGA" }
facts:
  - { label: "Type", value: "Systematic review (PRISMA 2020)" }
  - { label: "Venue", value: "ACM Computing Surveys, 2026" }
  - { label: "Authors", value: "Cédric Léonard, Dirk Stober, Martin Schulz" }
  - { label: "DOI", value: "10.1145/3800686" }
footnote: "A fuller, lay-friendly write-up is coming."
---
Running ML directly onboard satellites demands hardware that is fast yet
power-frugal, and FPGAs are a popular answer. But the literature is scattered
across remote-sensing, machine-learning, and hardware communities. Following the
[PRISMA&nbsp;2020](https://www.prisma-statement.org/prisma-2020) methodology, this
review screens and codes the field along three questions: which EO *applications
and tasks* are tackled, which *ML models* are used, and which *FPGA platforms*
and optimisation techniques appear.

{% include figure.html src="/assets/projects/fpga-ml-eo-survey/applications-tasks.png" alt="Bubble chart relating Earth-observation applications to ML tasks and data modalities." caption="Earth-observation applications mapped to ML tasks and data modalities (RGB, hyperspectral, SAR, 1-D)." %}

{% include figure.html src="/assets/projects/fpga-ml-eo-survey/models-per-year.png" alt="Stacked bar chart of ML model families used per publication year." caption="Model families over time — from classical ML and custom CNNs toward detectors (YOLO) and, more recently, GNNs." %}

{% include figure.html src="/assets/projects/fpga-ml-eo-survey/fpga-boards.png" alt="Bubble chart of FPGA boards used, by release year and DSP count." caption="The FPGA landscape in the surveyed studies, by device family, release year, and on-chip DSP resources." %}
