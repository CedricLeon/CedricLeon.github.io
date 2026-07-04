---
title: "Exploring LIC for Remote Sensing data"
category: research
order: 1
thumb: /assets/projects/learned-compression-rs/architecture.png
thumb_alt: "Hyper-autoencoder learned image compression architecture"
summary: "Exploring the pros and cons of learned image compression models for optical and SAR satellite imagery."
tags: [EO, LIC, Sentinel-1/2, EGU24]
lead: "Learned Image Compression (LIC) was a revolution in Computer Vision. Could these models also become state of the art for satellite imagery?"
facts:
  - { label: "Task", value: "Learned lossy image compression" }
  - { label: "Data", value: "EuroSAT-RGB (Sentinel-2) & EuroSAT-SAR (Sentinel-1)" }
  - { label: "Models", value: "bmshj2018 & mbt2018 families (CompressAI)" }
  - { label: "Stack", value: "PyTorch Lightning · Hydra" }
  - { label: "Shared at", value: "EGU 2024 (European Geosciences Union)" }
footnote: "A fuller, lay-friendly write-up is coming."
---
Compressing an image is always a trade-off: fewer bits mean a rougher picture.
Classical codecs like JPEG use a fixed, hand-designed recipe for this trade-off.
Learned image compression instead trains a neural network to find its own recipe, tuned to the kind of images it has seen during training.
<!-- TODO: Add link to LIC tutorial -->

{% include figure.html src="/assets/projects/learned-compression-rs/architecture.png" alt="Hyper-autoencoder compression architecture with encoder, hyper-encoder, quantisation and arithmetic coding." caption="The scale-hyperprior architecture (Ballé et al., 2018)." %}

In this project, I benchmarked four such models against JPEG, on optical images from Sentinel-2 and radar images from Sentinel-1.

{% include figure.html src="/assets/projects/learned-compression-rs/rd-curve.png" alt="Rate–distortion curves: neural codecs achieve higher PSNR than JPEG at low bit-rates." caption="Compression quality vs. compression ratio on EuroSAT-RGB." %}

The learned models did better than JPEG, especially when compressing images down to very few bits. A follow-up student project used this as a starting
point to build lighter, more hardware-friendly versions of these networks.
