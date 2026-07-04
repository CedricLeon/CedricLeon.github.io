---
title: "Joint despeckling & compression of SAR images on FPGA"
category: research
order: 4
badge: "To be published"
badge_class: wip
thumb: /assets/projects/sar-ddc-fpga/SAR_DDC_inference_dataflow.png
thumb_alt: "Dataflow diagram of the joint despeckling-and-compression model, processing the real and imaginary parts of a SAR image"
summary: "Adapting a model that despeckles and compresses SAR images together, so it can run on FPGAs."
tags: [SAR, LIC, Despeckling, FPGA]
lead: "Future SAR satellites will collect images faster than they can send them home. This project adapts a model that denoises and compresses SAR images together, so it can run on low-power chips used onboard satellites."
facts:
  - { label: "Task", value: "Joint SAR despeckling + compression, adapted for FPGA" }
  - { label: "Data", value: "TerraSAR-X StripMap (SSC)" }
  - { label: "Hardware", value: "AMD ZCU102 FPGA (Vitis AI)" }
  - { label: "Status", value: "Paper submitted" }
footnote: "A fuller write-up will follow once the paper is published."
---
SAR onboard intelligence is a new paradigm in which machine learning is used to take early, autonomous decisions.
The key idea is to obtain representations with high semantic meaning that can then be used for different purposes, such as seeing how interesting an image to decide how urgent it is to send it to the ground.
Neural networks have proven since a long time that they are capable of generating latent representations with meaningful features, but SAR images are special: they contain speckle.
Speckle is a salt-and-pepper pattern coming from radar echoes interfering with each other.
It contains a lot of information for specific use cases but towards onboard intelligence, it is only noise to the model.
Indeed, speckle wastes space in representations that should be highly semantic, and the model spends effort encoding noise instead of the scene.

One way to remove speckle is a method called [MERLIN](https://doi.org/10.1109/TGRS.2021.3128621).
As a coherent sensor, a SAR image is a complex signal with a real and an imaginary part.
Both show the same scene, but with independent, identically distributed noise patterns (or at least MERLIN showed that we can essentially make them i.i.d.).
We can use that to train a network to predict one part from the other: it's a Noise2Noise approach (see <a href="https://arxiv.org/abs/1803.04189">Lehtinen et al., 2018</a>).
Such method teaches the network to recover the clean scene, without ever using a noise-free image: it's self-supervised training.

<div class="figure-row">
{% include figure.html src="/assets/projects/sar-ddc-fpga/Hamburg_noisy_real_squared.png" alt="A SAR image of Hamburg with visible speckle noise, before despeckling." caption="Before: original image with speckle (Hamburg)." %}
{% include figure.html src="/assets/projects/sar-ddc-fpga/logI_MERLIN-DDS.png" alt="The same Hamburg scene despeckled, with a much cleaner appearance." caption="After: the same scene despeckled using MERLIN." %}
</div>

[Amao-Oliva et al.](https://doi.org/10.1016/j.isprsjprs.2024.12.016) took this idea further and proposed a framework to perform SAR Despeckling and Data Compression (DDC) at the same time.
Jointly denoising and compressing unlocks better compression and reconstruction since there's no noise left to waste bits on.

{% include figure.html src="/assets/projects/sar-ddc-fpga/SAR_DDC_inference_dataflow.png" alt="Dataflow diagram of the joint despeckling-and-compression model, processing the real and imaginary parts of a SAR image." caption="The joint despeckling-and-compression model: the real and imaginary parts are compressed together, then decoded and averaged back into one cleaned-up image." %}

However, this kind of models are too heavy to run as-is on a satellite.
Onboard computers have tight power and compute budgets.
So in this work, we adapt Amao-Oliva et al.'s model to run on an FPGA chip instead.
FPGAs are a type of low-power hardware already common on satellites.

This project isn't published yet, so we're keeping the details light for now.
