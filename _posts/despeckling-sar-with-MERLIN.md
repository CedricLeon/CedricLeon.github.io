<!-- Tmp draft for a future post -->

# Desckling SAR images using MERLIN

<!-- Some explanation of what I'll talk about -->

## What is speckle?

Despeckling Synthetic Aperture Radar (SAR) images has been a task for a long time.
Speckle is a phenomenom that appears on SAR images similar to noise.
It isn't noise.
Speckle comes from radar echoes interfering with each other and contains precious information about these.
However, many SAR applications do not use the phase information of the image.
In such cases, speckle is simply a heavy, indesirable salt-and-pepper effect that we can consider as noise, and probably want to remove.

## Denoising images without references?

One core problem of the denoising pro
