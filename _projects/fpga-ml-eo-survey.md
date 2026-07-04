---
title: "FPGA-enabled ML in Earth observation"
category: research
order: 2
project_date: "2023–2025"
badge: "Published"
badge_class: "published"
thumb: /assets/projects/fpga-ml-eo-survey/thumb.jpg
thumb_alt: "Conceptual diagram: remote sensing, machine learning and FPGAs converging on FPGA-enabled ML for Earth observation"
summary: "A systematic review mapping which Earth Observation (EO) tasks, ML models, and FPGA platforms the community uses."
tags: [EO, ML, FPGA, Survey, ACM CSUR]
lead: "A systematic review of how Machine Learning (ML) models are deployed on FPGAs for Earth Observation (EO) applications. We looked at which problem the community wanted to tackle, using which models, and on what hardware."
links:
  - { label: "Paper (ACM CSUR)", url: "https://doi.org/10.1145/3800686" }
  - { label: "Code (GitHub)", url: "https://github.com/CedricLeon/Survey_RS-ML-FPGA" }
  - { label: "Dataset (HuggingFace)", url: "https://huggingface.co/datasets/CedricLeon/Articles_systematic_survey_RS-ML-FPGA" }
credits: { label: "Thanks to", text: "Dirk Stober and Martin Schulz." }
facts:
  - { label: "Type", value: "Systematic review (PRISMA 2020)" }
  - { label: "Venue", value: "ACM Computing Surveys, 2026" }
  - { label: "Authors", value: "Cédric Léonard, Dirk Stober, Martin Schulz" }
  - { label: "DOI", value: "10.1145/3800686", url: "https://doi.org/10.1145/3800686" }
footnote: "A fuller, lay-friendly write-up is coming."
---
{% include figure.html src="/assets/projects/fpga-ml-eo-survey/conceptual-diagram.png" alt="Conceptual diagram: remote sensing is processed with machine learning, which is deployed on FPGA — the three fields this survey sits at the intersection of." caption="This survey sits at the intersection of remote sensing, machine learning, and FPGA hardware." %}

Running ML models directly onboard satellites requires hardware that enables fast inference while staying energy-efficient.
FPGAs are a popular choice for this.
But the research is scattered across the three communities, that pursue different goals and use different methods: it's hard to see the full picture.

So we decided do this review to pull this picture together; we did that in a systematic way, following the [PRISMA&nbsp;2020](https://www.prisma-statement.org/prisma-2020)
method.
We surveyed a total of 48 articles reporting 68 distinct experiments and focused on height research questions.
The three main ones are:
- What Earth-observation problems does the community solve?

{% include figure.html src="/assets/projects/fpga-ml-eo-survey/applications-tasks.png" alt="Bubble chart relating Earth-observation applications to ML tasks and data modalities." caption="Rmote Sensing applications mapped to ML tasks and data modalities (sensor type)." %}

- Which ML models do they use?

{% include figure.html src="/assets/projects/fpga-ml-eo-survey/models-per-year.svg" alt="Stacked bar chart of ML model families used per publication year." caption="ML Model categories used over time." %}

- And which FPGA hardware and tricks make these models run efficiently?

{% include figure.html src="/assets/projects/fpga-ml-eo-survey/fpga-boards.svg" alt="Bubble chart of FPGA boards used, by release year and DSP count." caption="The FPGA landscape in the surveyed studies, by device family, release year, and on-chip DSP resources." %}

This study gave us a map of the field: what's been tried, what hasn't, and where the open problems are for anyone building ML systems for FPGAs in space.
