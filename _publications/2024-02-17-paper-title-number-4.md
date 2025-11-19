---
title: "Image Colorization using Generative Adversarial Network"
collection: publications
category: conferences
permalink: /publication/2022-10-19-image-colorization-gan
excerpt: 'A novel lightweight GAN pipeline for automatic image colorization with YUV-channel separation technique, improving structural fidelity and perceptual sharpness.'
date: 2022-10-19
venue: 'Proc. SPIE 12294, 7th International Symposium on Advances in Electrical, Electronics, and Computer Engineering'
paperurl: 'https://www.scopus.com/record/display.uri?eid=2-s2.0-85141846306&origin=inward&txGid=cb8c62807c6ea5854cb72e5cee17c111'
citation: 'Erxi Cheng, Ruiqian Ma, Ruichen Qi, Yupeng Tang. (2022). "Image colorization using generative adversarial network." <i>Proc. SPIE 12294</i>, 7th International Symposium on Advances in Electrical, Electronics, and Computer Engineering, 122943Z (19 October 2022).'
---

**Co-first author and corresponding author**

## Abstract

This paper proposes an automatic colorization model for grayscale images based on a generative adversarial network (GAN) composed of a U-Net structure generator and a discriminator with multi-layer CNN.

## Key Contributions

* Designed a novel lightweight GAN pipeline (U-Net generator + ResNet18 discriminator)
* Introduced a YUV-channel separation technique, reducing training cost while boosting structural fidelity and perceptual sharpness
* Stabilized adversarial training with optimized objectives (re-weighted "realness" reliability term and tuned loss balance)
* Improved color fidelity and transfer robustness under diverse textures and scenes

## Experimental Results

* Scaled experiments on 4.3K+ natural & animated images in PyTorch
* Conducted extensive visual comparisons
* Consistently outperformed baselines in visual quality and detail preservation
* Demonstrated excellent learning ability on color transfer, coloring effects, efficiency, and accuracy

## Technical Approach

The model constructs a deep generator network to extract the content features of the image, optimizes the loss function and weights of actual reliability value in the discriminator, and trains the model with grayscale images and colored images to obtain the automatic coloring model. Extensive grayscale image coloring experiments validate the modeling results and demonstrate the model's superior performance.
