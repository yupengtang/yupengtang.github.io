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

* **Training and post-training.** How models acquire behavior after pre-training and how to keep it: reward and supervision design that resists gaming, test-time scaling, and adaptation to new tasks and modalities.
* **Multimodal reasoning and reliability.** How language and vision-language models use evidence and handle uncertainty, and how to evaluate them reliably, including with LLM judges.
* **ML infrastructure.** What it takes to train and serve these models in practice: efficient inference, distributed training on GPU clusters, and evaluation harnesses.

Education
======

* **Master of Science in Computer Science**, Georgia Institute of Technology, Aug. 2024 – May 2026
* **Master of Science in Computational Science and Engineering (Applied Mathematics)**, Georgia Institute of Technology, Aug. 2023 – May 2026
* **Bachelor of Engineering in Artificial Intelligence**, Shandong University, Sep. 2019 – Jun. 2023

Selected Publications & Manuscripts
======

* **Y. Tang**, M. Lin. “[When Expert Disagreement Hurts: Auditing Prestige-Sensitive Revision in LLM Decision Pipelines](https://yupengtang.github.io/when-expert-disagreement-hurts/assets/paper.pdf).” Conference on Neural Information Processing Systems (**NeurIPS**), 2026. Accepted.
* **Y. Tang**, M. Lin. *Measure before You Rank: Estimand-Aware Calibration of LLM Judge Panels*. **AAAI 2027**; the submission has already passed the first round of review (Phase 1).
* **Y. Tang**. *TRACE: Typed Repair with Abstention for Corrupted Evidence in Frozen Multimodal World Models*. **AAAI 2027**; the submission has already passed the first round of review (Phase 1).
* **Y. Tang**. *Group-Relative Post-Training Erases Rare Futures: Distribution-Correct Reinforcement Learning for World Models*. **CVPR 2027**, under review.
* **Y. Tang**, M. Lin. *Retrieved but Ignored: How Vision-Language Models Use Images and Text in Multimodal RAG*. **CVPR 2027**, under review.

Research Experience
======

## Research Intern

**Stanford University** \| Stanford, CA (Hybrid) \| Oct. 2026 – Present

With Dr. Yang M. Liu and Prof. F. Vankee Lin at the CogT Lab.

* Proposed same-record representation alignment, a distillation method for foundation models that see richer input in training than at deployment: a LoRA-adapted student that receives a single ECG lead is aligned to a frozen teacher's 12-lead embedding of the same record, at no added inference cost. It outperforms tuned logit distillation on two unseen external cohorts and raises macro AUROC by 0.084 on real handheld-device recordings.
* Demonstrated through pre-specified controls that the gain comes from record-specific teacher representations rather than shared labels, since a teacher taken from a different patient with identical labels gives no gain, and that it grows with the student's headroom to the teacher across 12 leads and two backbones (Spearman 0.56, permutation p = 0.007).

## Research Assistant & Affiliate Researcher

**Georgia Institute of Technology** \| Atlanta, GA \| Sep. 2025 – Present

With Prof. Mingfeng Lin, alongside several independent projects. Research Assistant through May 2026, now continuing as an affiliate researcher.

* **Reliability and evaluation:** Designed a controlled audit of how LLMs revise answers under disagreement with the evidence held fixed: across 1,989 medical, scientific, and legal decisions, expert disagreement cut accuracy by up to 16.1 points (NeurIPS 2026; [Project page](https://yupengtang.github.io/when-expert-disagreement-hurts/)). Developed ACT-Council, a Bradley-Terry aggregator that learns each LLM judge's reliability by domain; its domain-conditioned probabilities halved the Brier score on RewardBench (0.142 to 0.071) and flagged injected adversarial judges as least reliable in 93% of task cells.
* **Post-training and test-time scaling:** Demonstrated that GRPO post-training narrows the predictive distribution of video world models and erases rare outcomes, and derived DCPT, a one-line correction that was the only proper-score variant to keep the distribution intact on four pretrained world models up to 4B parameters. Proved that pass@K, the standard test-time scaling metric, can rank systems opposite to the majority-vote accuracy they deliver in deployment, and derived sharp bounds that predict deployed accuracy from a fraction of the sampling budget.
* **Multimodal reasoning:** Developed TRACE, a repair layer for frozen multimodal world models that identifies the type of evidence corruption and either repairs it or abstains; without retraining the base model, it raised future-audio retrieval R@1 from 39.6% to 51.8% and video R@1 from 73.0% to 77.4%. Benchmarked 10 vision-language models (2B to 38B) on whether they use retrieved evidence, and found that they rely on whichever channel is cheapest to read and ignore image-only evidence unless the same information also appears in text.

## Research Assistant

**Georgia Institute of Technology** \| Atlanta, GA \| Jan. 2025 – Apr. 2026

With Prof. Patrick Kastner.

* **LLM-assisted scientific screening:** Designed exclusion-only, inclusion-only, and multi-stage pipelines for 900+ papers; evaluated Qwen2.5-72B and GPT-OSS-120B against human adjudication using precision, recall, F1, confusion matrices, and disagreement analysis. Scaled inference to 96 GPU workers across H100/H200 clusters, resolving failures involving Ollama, MXFP4 quantization, and constrained JSON decoding.
* **Urban microclimate modeling:** Built and benchmarked a two-stage forecasting and spatial-transfer framework on 865K+ observations, with a leakage-audited protocol that holds out the target station and the target year together, five-seed ablations, and hierarchical bootstrap inference. A tuned linear baseline led under average conditions; the neural model reduced six-hour RMSE from 4.88°C to 4.59°C in the hottest decile. This work led to a first-author Q1 SCI journal submission and an accepted first-author companion book chapter forthcoming in a Springer Nature edited volume.

## Undergraduate Researcher

**Shandong University** \| Shandong, China \| Feb. 2023 – Jun. 2023

Advised by Prof. Xianfeng Yuan. Undergraduate thesis project on autonomous vehicle path planning in complex environments.

* Developed an enhanced Bidirectional RRT planner with adaptive probabilistic sampling, trajectory smoothing, and kinematic feasibility checks for autonomous parking in dense obstacle fields.
* Achieved 2× faster planning, ~35% smoother paths, and 15% shorter trajectories than RRT and RRT*, validated across 100+ randomized scenarios.

Industry Experience
======

## Machine Learning Engineer Intern

**[GMI Cloud](https://www.gmicloud.ai/)** \| Mountain View, CA \| May 2025 – Aug. 2025

* Shipped FLUX.1-schnell (12B DiT) to production on H100 and cut latency about 19× (about 30 s to 1.6 s per image) by removing per-request CPU-GPU offloading and keeping the text encoders, Transformer, and VAE resident on the GPU (37 GB peak).
* Engineered the serving loop: queue-pull workers, a heartbeat thread with retry, toxicity and NSFW filters, and GCS upload with backoff; scaled it to multi-GPU with torchrun, with rank 0 broadcasting each request and seed over NCCL; Dockerized for Kubernetes.
* Unblocked the launch by root-causing a model-initialization hang in the autoencoder loading path and fixing heartbeat and billing integration failures with the platform team.
* Built a Real-ESRGAN video super-resolution service (FastAPI, PSNR/SSIM evaluation); generating Wan2.2 at 360p and upscaling to 720p cut a 5 s clip from 284 s to about 100 s at 31 to 32 dB PSNR.
* Built a batch virtual try-on pipeline on a diffusion try-on API: asynchronous submit and poll with tuned intervals, retries, and per-job fault isolation across model × garment sweeps.
* Synthesized research papers and open-source model documentation to produce a technical review of multimodal generation systems, covering text-to-image, text-to-video, and super-resolution model families and summarizing key benchmark findings for internal evaluation.

Open Source Contributions
======

31 merged contributions across 13 projects. Technical details are on the [Portfolio](/portfolio/#opensource-heading) page.

* **[PyTorch / TorchRL](https://github.com/pytorch/rl)** ([5 merged](https://github.com/pytorch/rl/pulls?q=is:pr+is:merged+author:yupengtang)): SAC and CrossQ loss configuration, replay-buffer checkpoint recovery, and logging fixes.
* **[PyTorch / TensorDict](https://github.com/pytorch/tensordict)** ([2 merged](https://github.com/pytorch/tensordict/pulls?q=is:pr+is:merged+author:yupengtang)): Non-tensor values lost in `gather` and shape operations.
* **[Hugging Face / Accelerate](https://github.com/huggingface/accelerate)** ([6 merged](https://github.com/huggingface/accelerate/pulls?q=is:pr+is:merged+author:yupengtang)): Device reporting, `torch.compile` defaults, mixed-precision unwrapping, and offloaded checkpoints that silently dropped buffers.
* **[Hugging Face / Transformers](https://github.com/huggingface/transformers)** ([1 merged](https://github.com/huggingface/transformers/pulls?q=is:pr+is:merged+author:yupengtang)): Consistent PIL and torchvision image-processor outputs across four vision-language models.
* **[Hugging Face / PEFT](https://github.com/huggingface/peft)** ([1 merged](https://github.com/huggingface/peft/pulls?q=is:pr+is:merged+author:yupengtang)): Safer adapter merging for quantized LoRA, 8-bit, and torchao layers.
* **[Hugging Face / timm](https://github.com/huggingface/pytorch-image-models)** ([3 merged](https://github.com/huggingface/pytorch-image-models/pull/2820)): EfficientViT and SwinV2 fixes, including NaN or wrong logits when loaded through Transformers; two landed via maintainer PR #2820.
* **[Hugging Face / Datasets](https://github.com/huggingface/datasets)** ([1 merged](https://github.com/huggingface/datasets/pulls?q=is:pr+is:merged+author:yupengtang)): Streaming `take` and `skip` that could leak a held-out split into training.
* **[Google / Agent Development Kit](https://github.com/google/adk-python)** ([2 merged](https://github.com/google/adk-python/pulls?q=is:pr+author:yupengtang)): GCS artifact metadata and SQLite sessions leaking across users; both landed via Copybara.
* **[Google / gemma.cpp](https://github.com/google/gemma.cpp)** ([1 merged](https://github.com/google/gemma.cpp/pulls?q=is:pr+is:merged+author:yupengtang)): A CMake configuration that had kept three tests from ever being built.
* **[LinkedIn / Liger-Kernel](https://github.com/linkedin/Liger-Kernel)** ([3 merged](https://github.com/linkedin/Liger-Kernel/pulls?q=is:pr+is:merged+author:yupengtang)): Gemma3, Gemma4, and Exaone4 patching, vision-tower norm flags, and the Llama4 fused loss.
* **[Pyro / NumPyro](https://github.com/pyro-ppl/numpyro)** ([2 merged](https://github.com/pyro-ppl/numpyro/pulls?q=is:pr+is:merged+author:yupengtang)): Numerically stable entropy and log-determinants for two distributions.
* **[Axolotl](https://github.com/axolotl-ai-cloud/axolotl)** ([1 merged](https://github.com/axolotl-ai-cloud/axolotl/pulls?q=is:pr+is:merged+author:yupengtang)): Weight decay for the LoRA+ optimizer.
* **[Vesuvius Challenge / Volume Cartographer](https://github.com/ScrollPrize/villa)** ([3 merged](https://github.com/ScrollPrize/villa/pulls?q=is:pr+is:merged+author:yupengtang)): Reproducible surface tracing and in-memory blending that cut an H100 inference run from 3:34 to 2:45.

Selected Competition Experience
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

* **ME 4710** – Foundations in Machine Learning for Engineers (Sep. 2025 – Dec. 2025, with Jarred Fountain): Designed grading rubrics and graded assignments combining Python implementations, short-answer questions, and mathematical problems on statistical modeling and ML algorithm selection.
* **MGT 6655** – Business Data Preparation and Visualization (Jan. 2026 – May 2026, with Prof. Mingfeng Lin): Graded visualization exercises and dashboard projects; supported students through office hours and on Ed Discussions with Tableau, Power BI, and data preparation techniques; built a privacy-preserving LLM-based Q&A assistant for 100+ students. Developed an end-to-end Python pipeline to transform Ed Discussion data into RAG and SFT datasets (JSONL) with schema-tolerant parsing and metadata traceability, and deployed a grounded retrieval-augmented assistant with configurable embedding backends and GPU-ready evaluation workflows.

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
* **Inference & Serving:** CUDA, NCCL, Ollama, paged-attention and quantized serving, FastAPI, Docker, Kubernetes
* **Evaluation & Retrieval:** LLM-as-a-Judge pipelines, RAG and hybrid retrieval, vector search (ScaNN, BigQuery), constrained/structured decoding
* **Clusters & Cloud:** SLURM on A100/H100/H200 clusters, AWS, GCP, Azure, Terraform, Apache Spark, Airflow, Databricks
* **Languages:** Python, C/C++, Java, JavaScript, SQL, Bash/Shell, MATLAB, R, Julia
* **Data & Storage:** Pandas, NumPy, Matplotlib, PostgreSQL, MySQL, MongoDB, Redis, SQLite, BigQuery, Redshift
* **Other Tools:** Git, Linux, React, Node.js, REST APIs, Tableau, Power BI
