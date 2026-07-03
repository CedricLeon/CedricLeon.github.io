---
title: "Joint despeckling & compression of SAR on FPGA"
category: research
order: 4
summary: "Current work: adapting and optimising models that jointly despeckle and compress SAR imagery for FPGA deployment."
tags: [SAR, FPGA, Despeckling]
lead: "Current research: models that clean up and shrink SAR imagery in a single pass, designed to run on FPGA hardware for onboard use."
facts:
  - { label: "Task", value: "Joint SAR despeckling + compression on FPGA" }
  - { label: "Status", value: "Ongoing (not yet public)" }
---
SAR images are inherently grainy — corrupted by *speckle* noise — and costly to
store and downlink. This project develops neural models that jointly
**despeckle** and **compress** SAR data, and adapts and optimises them for
deployment on **FPGAs**, where compute and power budgets are tight.

This work is ongoing and not yet public — more detail, figures, and results will
appear here as the project matures.
