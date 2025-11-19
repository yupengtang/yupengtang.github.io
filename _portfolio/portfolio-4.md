---
title: "Large-Scale Multimodal Inference Optimization"
excerpt: "Optimized Flux-Schnell (12B DiT) for 10-15× faster inference on H100 GPU clusters<br/><img src='/images/portfolio-1.jpg'>"
collection: portfolio
---

## Overview
Optimized Flux-Schnell (12B parameter Diffusion Transformer) multimodal inference on H100 clusters, achieving dramatic performance improvements through GPU memory optimization and distributed computing.

## Key Technologies
* **Deep Learning:** Flux-Schnell, Diffusion Transformers, Real-ESRGAN
* **Optimization:** NCCL, ONNX, TensorRT, GPU memory persistence
* **Infrastructure:** H100 GPUs, GCS, FastAPI, ComfyUI

## Performance Achievements
* Reached ~30 images/min/GPU with 1-2s latency (10-15× faster than baseline)
* Achieved linear throughput scaling across distributed multi-GPU nodes
* Reduced video super-resolution runtime by ~65% (284s → 100s) for 5s@24fps clips

## Production Systems
* **Video Super-Resolution:** Real-ESRGAN pipeline with PSNR/SSIM evaluation, integrated with Wan2.2 text-to-video
* **E-commerce Try-On:** AI-powered service using Flux-Kontext + Segformer, delivering <5s per image for outfit changes and style transfer
* **Infrastructure:** Production-ready system with queuing, heartbeat monitoring, structured logging, and content moderation

## Technical Innovations
* GPU memory persistence and offload strategies for large model inference
* NCCL all-reduce for distributed communication
* ONNX → TensorRT optimization pipeline
* Secure RESTful APIs for real-time image processing

