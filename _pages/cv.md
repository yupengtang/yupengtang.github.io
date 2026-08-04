---
layout: archive
title: ""
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

{::nomarkdown}
{% include section-nav.html %}
{:/nomarkdown}

Research Focus
======

Foundation models, along three connected lines of work:

* **Training and post-training.** How models acquire behavior after pre-training and how to keep it: reward and supervision design that resists gaming, and adaptation to new tasks and modalities.
* **Multimodal reasoning and reliability.** How language and vision-language models use evidence and handle uncertainty, and how agents built on them combine language, vision, and action.
* **ML infrastructure.** What it takes to train and serve these models in practice: efficient inference, distributed training on GPU clusters, and evaluation harnesses.

Education
======

* **Master of Science in Computer Science**, Georgia Institute of Technology, Aug. 2024 – May 2026
* **Master of Science in Computational Science and Engineering (Applied Mathematics)**, Georgia Institute of Technology, Aug. 2023 – May 2026
* **Bachelor of Engineering in Artificial Intelligence**, Shandong University, Sep. 2019 – Jun. 2023

Selected Publications & Manuscripts
======

* **Y. Tang**, M. Lin. *When Expert Disagreement Hurts: Auditing Prestige-Sensitive Revision in LLM Decision Pipelines*. **NeurIPS 2026, accepted**.
* **Y. Tang**. *TRACE: Typed Repair with Abstention for Corrupted Evidence in Frozen Multimodal World Models*. **AAAI 2027**; the submission has already passed the first round of review (Phase 1).
* **Y. Tang**. *No Free Surprise: Sharp Evidence Guarantees for Data-Adaptive Scientific Search*. **AAAI 2027**; the submission has already passed the first round of review (Phase 1).
* **Y. Tang**, M. Lin. *Measure before You Rank: Estimand-Aware Calibration of LLM Judge Panels*. **AAAI 2027**; the submission has already passed the first round of review (Phase 1).
* **Y. Tang**, M. Lin. *GuardedCoMoT: Matched Interventions for Geometric-Prior Execution under Visuomotor Layout Shift*. **ICRA 2027**, under review.

Research Experience
======

## Research Intern

**Stanford University** \| Palo Alto, CA (Remote) \| Sep. 2026 – Present

* Selected for a Research Intern position at the CogT Lab following a formal application and interview process.
* Conduct research on agentic AI, with a focus on LLM and VLM agents for multimodal reasoning, AI-assisted research workflows, and human–AI collaboration. Explore how agents integrate language, visual, and behavioral signals for evidence-grounded analysis and adaptive interaction.

## Research Assistant & Affiliate Researcher

**Georgia Institute of Technology** \| Atlanta, GA \| Sep. 2025 – Present

With Prof. Mingfeng Lin. Research Assistant through May 2026, now continuing as an affiliate researcher. Research focuses on foundation model reliability, multimodal reasoning, and embodied AI.

* Developed a controlled framework that isolates how disagreement and perceived source expertise alter LLM decisions independently of task evidence; across medical, scientific, and legal reasoning, 70.1% of expert-induced reversals changed initially correct decisions to incorrect ones.
* Designed constraint-aware visuomotor manipulation using task-frame transport and guarded fallback execution, improving success by 87.1 percentage points under severe layout shifts and 72.5 points under obstacle interference.
* Developed estimand-aware preference learning from heterogeneous LLM feedback by jointly modeling candidate quality, judge reliability, and systematic bias.
* Built internal evaluation tooling for the group: a cross-platform Electron/React/FastAPI application covering 100+ API models, with structured LLM-as-a-Judge pipelines, SQLite persistence, and one-command packaging.

## Independent Researcher

**Independent Research** \| Atlanta, GA \| Sep. 2025 – Present

Three solo-authored submissions to **AAAI 2027**, all of which have already passed the first round of review (Phase 1).

* Designed belief-conditioned repair for frozen multimodal world models, improving future video and audio R@1 by 5.0 and 11.1 points without retraining the base model.
* Established finite-sample guarantees for adaptive AI search, achieving near-oracle power with substantially less search while preserving rigorous statistical validity.
* Probed narrative representations in open-weight language models, showing that apparent event understanding is driven largely by surface cues rather than structural representations.

## Research Assistant

**Georgia Institute of Technology** \| Atlanta, GA (Hybrid) \| Jan. 2025 – Apr. 2026

Advised by Prof. Patrick Kastner. Led to a first-author Q1 SCI journal submission and an accepted first-author companion book chapter forthcoming in a Springer Nature edited volume.

* **LLM-assisted scientific screening:** Designed exclusion-only, inclusion-only, and multi-stage pipelines for 900+ papers; evaluated Qwen2.5-72B and GPT-OSS-120B against human adjudication using precision, recall, F1, confusion matrices, and disagreement analysis. Scaled inference to 96 GPU workers across H100/H200 clusters, resolving failures involving Ollama, MXFP4 quantization, and constrained JSON decoding.
* **Urban microclimate modeling:** Built and benchmarked a two-stage forecasting and spatial-transfer framework on 865K+ observations, with a leakage-audited protocol that holds out the target station and the target year together, five-seed ablations, and hierarchical bootstrap inference. A tuned linear baseline led under average conditions; the neural model reduced six-hour RMSE from 4.88°C to 4.59°C in the hottest decile.

## Undergraduate Researcher

**Shandong University** \| Shandong, China \| Feb. 2023 – Jun. 2023

Advised by Prof. Xianfeng Yuan. Undergraduate thesis project on autonomous vehicle path planning in complex environments.

* Developed an enhanced Bidirectional RRT planner with adaptive probabilistic sampling, trajectory smoothing, and kinematic feasibility checks for autonomous parking in dense obstacle fields.
* Achieved 2× faster planning, ~35% smoother paths, and 15% shorter trajectories than RRT and RRT*, validated across 100+ randomized scenarios.

Industry Experience
======

## Robotics Engineer

**Pudu Robotics** \| Atlanta Metropolitan Area (Hybrid) \| Sep. 2026 – Present

* Integrate and optimize enterprise autonomous robotic systems, spanning LiDAR/visual SLAM, localization, multi-floor navigation, fleet coordination, and system-level performance optimization.
* Diagnose failures across hardware, software, and infrastructure through log/CAN analysis, sensor and actuator telemetry, and Docker/VM-based on-premises deployments.

## Machine Learning Engineer Intern

**GMI Cloud** \| Mountain View, California \| May 2025 – Aug. 2025

* Optimized Flux-Schnell (12B DiT) multimodal inference on H100 by implementing GPU memory persistence, offload strategies, and kernel-level tuning, achieving ~30 images/min and 1–2s latency per request on a single GPU compared to the 10–15× slower baseline.
* Designed a multi-GPU–ready inference architecture (NCCL-compatible, ONNX to TensorRT conversion pipeline) and validated linear-scaling behavior on single-GPU prototypes to support future distributed deployment.
* Built production-grade serving infrastructure including queueing, heartbeat monitoring, structured logging, GCS integration, and safety filtering, enabling stable long-running operations under high request volume.
* Implemented a video super-resolution pipeline (Real-ESRGAN + FastAPI) with PSNR/SSIM evaluation, reducing 5s@24fps clip runtime by ~65% (284s to 100s) when integrated with Wan2.2 text-to-video.
* Developed an AI-powered e-commerce try-on service (ComfyUI, Flux-Kontext + Segformer), delivering under 5s per image outfit changing, background removal, and style transfer via secure RESTful APIs.
* Synthesized research papers and open-source model documentation to produce a technical review of multimodal generation systems, covering text-to-image, text-to-video, and super-resolution model families and summarizing key benchmark findings for internal evaluation.

Open Source Contributions
======

* **PyTorch / TorchRL** (5 merged): Fixed SAC loss configuration, replay-buffer checkpoint recovery, CrossQ key remapping, CSV logger step counting, and a spec shape operation that raised on `Choice`, each with regression coverage ([#4338](https://github.com/pytorch/rl/pull/4338) · [#4370](https://github.com/pytorch/rl/pull/4370) · [#4372](https://github.com/pytorch/rl/pull/4372) · [#4374](https://github.com/pytorch/rl/pull/4374) · [#4462](https://github.com/pytorch/rl/pull/4462)).
* **Hugging Face / Accelerate** (5 merged): Fixed MPS device reporting, CPU-launch runtime configuration, MLflow environment parsing, `torch.compile` dynamic-shape defaults, and hooked-model unwrapping under mixed precision, with regression coverage ([#4221](https://github.com/huggingface/accelerate/pull/4221) · [#4222](https://github.com/huggingface/accelerate/pull/4222) · [#4223](https://github.com/huggingface/accelerate/pull/4223) · [#4254](https://github.com/huggingface/accelerate/pull/4254) · [#4255](https://github.com/huggingface/accelerate/pull/4255)).
* **Hugging Face / Transformers** (1 merged): Aligned PIL and torchvision image-processor outputs across Idefics2, Idefics3, SmolVLM, and Fuyu by fixing mask dtypes and missing image-size keys, with stronger backend-equivalence tests ([#48739](https://github.com/huggingface/transformers/pull/48739)).
* **Axolotl** (1 merged): Fixed LoRA+ optimizer construction so configured weight decay reaches the intended PEFT parameter groups, with regression coverage ([#4011](https://github.com/axolotl-ai-cloud/axolotl/pull/4011)).
* **LinkedIn / Liger-Kernel** (1 merged): Improved Gemma3, Gemma4, and Exaone4 transformer monkey-patching behavior and regression coverage ([#1444](https://github.com/linkedin/Liger-Kernel/pull/1444)).

Competition Experience
======

## American Express Default Prediction

**Kaggle Competition** \| May 2022 – Aug. 2022 \| **Top 0.4% (20th/4,874 teams), Silver Medal**

* Trained a weighted ensemble of LightGBM (DART) and GPU-accelerated XGBoost on 16 GB of credit card transaction time-series covering spending, balances, delinquency, and repayment.
* Ran 5-fold stratified cross-validation with a custom Gini-aligned training metric; iterated from a baseline through feature-enriched and feature-compressed model variants, checkpointing best models each round and tracking feature importance for selection.
* Assembled the final submission as a weighted blend of four checkpoints (LightGBM at 30/25/25%, XGBoost at 20%), with weights assigned by per-model validation Gini; multi-seed training across variants kept variance low and generalization stable.

Teaching Experience
======

## Instructional Associate

**Georgia Institute of Technology** \| Atlanta, GA \| Sep. 2026 – Present

* **MGT 6655** – Business Data Preparation and Visualization (with Prof. Mingfeng Lin): Support course delivery through assignment and dashboard evaluation, office hours, Ed Discussion guidance, and student assistance with Tableau, Power BI, and data preparation workflows.

## Teaching Assistant

**Georgia Institute of Technology** \| Atlanta, GA \| Sep. 2025 – May 2026

* **ME 4710** – Foundations in Machine Learning for Engineers (Sep. 2025 – Dec. 2025, with Jarred Fountain): Designed grading rubrics and graded assignments spanning Python implementations, short-answer questions, and mathematical problems on statistical modeling and ML algorithm selection.
* **MGT 6655** – Business Data Preparation and Visualization (Jan. 2026 – May 2026, with Prof. Mingfeng Lin): Graded visualization exercises and dashboard projects; supported students through office hours and on Ed Discussions with Tableau, PowerBI, and data preparation techniques; built a privacy-preserving LLM-based Q&A assistant for 100+ students. Developed an end-to-end Python pipeline to transform Ed Discussion data into RAG and SFT datasets (JSONL) with schema-tolerant parsing and metadata traceability, and deployed a grounded retrieval-augmented assistant with configurable embedding backends and GPU-ready evaluation workflows.

## Undergraduate Teaching Assistant

**Shandong University** \| Shandong, China \| Sep. 2020 – Jul. 2021

* Supported a 400+ student Linear Algebra course: graded 600+ handwritten assignments with written feedback, maintained attendance and grade records, and answered 30+ student questions weekly on the course forum.
* Recognized as Outstanding Teaching Assistant.

Leadership & Service
======

## Campus Academic Integrity TA Team Member

**Georgia Institute of Technology** \| Atlanta, GA \| Jan. 2026 – May 2026

* Supported OMS Analytics and OMS Cybersecurity programs (Spring 2026); reviewed academic misconduct cases and assisted with policy-consistent case evaluation.

## Publicity Manager – Starlight Art Troupe

**Shandong University** \| Shandong, China \| Sep. 2019 – Aug. 2021

* Directed design and production of 30+ promotional assets and 170+ photo and video shoots, and managed social media operations across two semesters.
* Received the Outstanding Individual Award for Student Organizations at Shandong University.

Skills
======

* **Foundation Models & Training:** PyTorch, TorchRL, Hugging Face (Transformers, Accelerate), Liger-Kernel, LangChain, TensorFlow, scikit-learn
* **Inference & Serving:** CUDA, NCCL, TensorRT, ONNX, Ollama, paged-attention and quantized serving, FastAPI, Docker, Kubernetes
* **Evaluation & Retrieval:** LLM-as-a-Judge pipelines, RAG and hybrid retrieval, vector search (ScaNN, BigQuery), constrained/structured decoding
* **Clusters & Cloud:** SLURM on A100/H100/H200 clusters, AWS, GCP, Azure, Terraform, Apache Spark, Airflow, Databricks
* **Languages:** Python, C/C++, Java, JavaScript, SQL, Bash/Shell, MATLAB, R, Julia
* **Data & Storage:** Pandas, NumPy, Matplotlib, PostgreSQL, MySQL, MongoDB, Redis, SQLite, BigQuery, Redshift
* **Other Tools:** Git, Linux, React, Node.js, REST APIs, Tableau, Power BI
