---
title: "Onboard SAR compression before focusing"
category: research
order: 3
project_date: "2026"
thumb: /assets/projects/onboard-sar-compression/method-diagram.png
thumb_alt: "Diagram of the Maya4 pipeline."
summary: "Applying learned image compression to partially-focused SAR data, pushing compression earlier in the onboard processing chain."
tags: [SAR, LIC, Focusing,EUSAR26]
lead: "Synthetic Aperture Radar satellites generate enormous volumes of raw data, which is especially tedious to compress. We tried to see if we could progresss to apply LIC methods on partially-focused data."
credits: { label: "Thanks to", text: "Roberto Del Prete and Francescopaolo Sica." }
facts:
  - { label: "Task", value: "LIC,  on partially-focused SAR data" }
  - { label: "Data", value: "Sentinel-1 (Maya4, ESA Φ-lab)" }
  - { label: "Presented at", value: "EUSAR 2026" }
footnote: "A fuller, lay-friendly write-up is coming."
---



A SAR satellite doesn't record a finished image right away.
It first records raw radar echoes, then turns them into a focused image, called the Single Look Complex (SLC) image, through several processing steps.
Today, onboard compression happens right at the start, on the raw echoes using traditional methods.
However, in the paradigm of onboard intelligence where the processing chain is moving onboard the satellite, we can now use a better, Learned Image Compression (LIC) method.
In this project, we asked how early in the onboard processing chain we can apply learned compression — before the image is even fully formed.

We started one step away from the fully focused image: on Range-Cell Migration Corrected (RCMC) data.
A neural network compresses this partially-processed data, saving the computational cost of this last processing step.

To make this work, we finish focusing the reconstructed RCMC data and compare the result to the original image.
This way, the network learns to compress data for the final image, while acting earlier in the pipeline.

{% include figure.html src="/assets/projects/onboard-sar-compression/method-diagram.png" alt="Diagram of the Maya4 pipeline: a neural compressor inserted into the SAR focusing chain after range-cell-migration correction." caption="On top, the typical focusing pipeline of Sentinel-1, from RAW to SLC data. During training the neural compressor sits between two focusing steps: it works on partially-processed data while getting feedback from the fully-focused image." %}

{% include figure.html src="/assets/projects/onboard-sar-compression/results-grid.png" alt="Grid of reconstructed SAR images at three compression settings, before and after final focusing." caption="Reconstructions at three compression settings, shown on the partly-processed data (left) and the final focused image (right)." %}

This is early-stage, exploratory work, with more experiments ahead before it's ready to share in full.
