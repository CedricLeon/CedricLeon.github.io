---
title: "Learned compression of remote-sensing imagery"
category: research
order: 1
thumb: /assets/projects/learned-compression-rs/rd-curve.png
thumb_alt: "Rate–distortion curves comparing neural codecs and JPEG"
summary: "Benchmarking neural image-compression models (Ballé-style hyper-autoencoders) against JPEG on optical and SAR satellite imagery."
tags: [Learned compression, Sentinel-1/2, EGU 2024]
lead: "Can neural networks compress satellite imagery better than classical codecs like JPEG? This project benchmarks several learned image-compression models on optical and radar data from the Sentinel missions."
facts:
  - { label: "Task", value: "Learned lossy image compression" }
  - { label: "Data", value: "EuroSAT-RGB (Sentinel-2) & EuroSAT-SAR (Sentinel-1)" }
  - { label: "Models", value: "bmshj2018 & mbt2018 families (CompressAI)" }
  - { label: "Stack", value: "PyTorch Lightning · Hydra" }
  - { label: "Shared at", value: "EGU 2024 (European Geosciences Union)" }
footnote: "A fuller, lay-friendly write-up is coming."
---
Lossy compression is a trade-off between *rate* (how few bits the image takes)
and *distortion* (how far the reconstruction strays from the original). Classical
codecs are hand-designed; *learned* image compression instead trains an
autoencoder end-to-end, letting the network discover a compact latent
representation tuned to the data at hand.

{% include figure.html src="/assets/projects/learned-compression-rs/architecture.png" alt="Hyper-autoencoder compression architecture with encoder, hyper-encoder, quantisation and arithmetic coding." caption="The scale-hyperprior architecture (Ballé et al., 2018): a second autoencoder compresses the latent space and provides side information for entropy coding." %}

We evaluated four architectures from Ballé and Minnen's line of work (implemented
with CompressAI) against JPEG, on Sentinel-2 optical imagery (EuroSAT-RGB) and
its Sentinel-1 SAR counterpart (EuroSAT-SAR). Results are read as rate–distortion
curves: further up and to the left is better.

{% include figure.html src="/assets/projects/learned-compression-rs/rd-curve.png" alt="Rate–distortion curves: neural codecs achieve higher PSNR than JPEG at low bit-rates." caption="Rate–distortion comparison on EuroSAT-RGB. The neural codecs clearly outperform JPEG in the low-bit-rate regime (presented at EGU 2024)." %}

A subsequent student project built on this to explore more hardware-efficient
variants of the compression networks (binary and adder-based neural networks).
