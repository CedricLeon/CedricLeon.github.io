---
title: "Exploring LIC for Remote Sensing data"
category: research
order: 1
project_date: "2023"
thumb: /assets/projects/learned-compression-rs/all_4_hyper-autoencoders_architectures.png
thumb_alt: "Hyper-autoencoder learned image compression architecture"
summary: "Exploring the pros and cons of learned image compression models for optical and SAR satellite imagery."
tags: [EO, LIC, Sentinel-1/2, EGU24]
lead: "Learned Image Compression (LIC) was a revolution in Computer Vision. Could these models also become state of the art for satellite imagery?"
credits: { label: "Credits to", text: "Tigran Bunarjyan and Mengton Ren, for the further efficiency studies." }
facts:
  - { label: "Task", value: "Learned lossy image compression" }
  - { label: "Data", value: "EuroSAT-RGB (Sentinel-2) & EuroSAT-SAR (Sentinel-1)" }
  - { label: "Models", value: "bmshj2018 & mbt2018 families (CompressAI)" }
  - { label: "Stack", value: "PyTorch Lightning · Hydra" }
  - { label: "Shared at", value: "EGU 2024 (European Geosciences Union)" }
footnote: "A fuller, lay-friendly write-up is coming."
---
Compressing an image is always a trade-off: fewer bits mean a rougher picture.
The exact (lossless) compaction of an image is made using algorithm named entropy coding algorithm.
These find redundancies, fold patterns, etc.
To maximize their efficiency at minimizing the entropy of an image a common trick is to first transform it into a nicer, more compressible representation.
Such a transformation used to be done using specific, hand-crafted functions like the cosine transform (JPEG) or the wavelet transform (JPEG2000).
However, these approaches are only performant while the transformation produces a nice representation.

Learned Image Compression (LIC) is an approach where the transformation is made using neural networks.
These networks can be trained to replace specialized transforms and unlock great compression performance on data usually complex to efficiently compress.
Remote Sensing, and in particular Synthetic Aperture Radar (SAR), images are such data as they differ from natural images in many regards (wavelengths, geometry, etc.).
In this project, I wanted to experiment with LIC models to see if their great performance on natural images can generalize to Remote Sensing.
More specifically, I tried four different model architectures on optical images from Sentinel-2 and radar images from Sentinel-1.
You can read more about these models and LIC on **this post**. <!-- TODO: insert link to upcoming LIC tutorial -->


<!-- Classical codecs like JPEG use a fixed, hand-designed recipe for this trade-off.
Learned image compression instead trains a neural network to find its own recipe, tuned to the kind of images it has seen during training. -->

The image below shows the four different model architecture I used:  

{% include figure.html src="/assets/projects/learned-compression-rs/all_4_hyper-autoencoders_architectures.png" alt="Hyper-autoencoder compression architecture with encoder, hyper-encoder, quantisation and arithmetic coding." caption="Condensed representation of the 4 methods. The legend of the figure is additive, i.e., `bmshj2018_hyperprior`'s architecture is `bmshj2018_factorized` + the dotted lines, and so on." %}

The last model `mbt2018` is the most sophisticated and uses a hyperprior as well as an autogregressive context model to encode the latents.
It was interesting to see that, as expected, this model performs the best as it can be seen in the next figure:

{% include figure.html src="/assets/projects/learned-compression-rs/rd-curve.png" alt="Rate–distortion curves: neural codecs achieve higher PSNR than JPEG at low bit-rates." caption="Compression quality vs. compression ratio on EuroSAT-RGB." %}

After getting a feeling on how these methods work and what pitfalls I should avoid, I moved to more complex projects, such as 
A follow-up student project used this as a starting
point to build lighter, more hardware-friendly versions of these networks.
