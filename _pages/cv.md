---
layout: archive
title: ""
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
======

* **Master of Science in Computer Science**, Georgia Institute of Technology, Aug. 2024 – May 2026
* **Master of Science in Computational Science and Engineering (Applied Mathematics)**, Georgia Institute of Technology, Aug. 2023 – May 2026
* **Bachelor of Engineering in Artificial Intelligence**, Shandong University, Sep. 2019 – Jun. 2023

Selected Publications & Manuscripts
======

* **Y. Tang**, M. Lin. *When Expert Disagreement Hurts: Auditing Prestige-Sensitive Revision in LLM Decision Pipelines*. **NeurIPS 2026**, under review — **strong reviews, favorable area chair meta-review**.
* **Y. Tang**, M. Lin. *Retrieved but Ignored: Evaluating Evidence Use After Retrieval in Vision Language Models*. **NeurIPS 2026**, under review — **strong reviews, favorable area chair meta-review**.
* **Y. Tang**. *TRACE: Typed Repair with Abstention for Corrupted Evidence in Frozen Multimodal World Models*. **AAAI 2027**, under review.
* **Y. Tang**. *GuardedCoMoT: Matched Interventions for Geometric-Prior Execution under Visuomotor Layout Shift*. **ICRA 2027**, under review.

Research Experience
======

## Research Intern

**Stanford University** \| Remote \| Sep. 2026 – Present

* Selected for a Research Intern position at the CogT Lab following a formal application and interview process.
* Conduct research on agentic AI, including LLM- and VLM-based agents, with an emphasis on multimodal analysis, AI-assisted research workflows, and human–AI collaboration.

## Research Assistant

**Georgia Institute of Technology** \| Atlanta, GA \| Sep. 2025 – Present

Advised by Prof. Mingfeng Lin. Conducted research on foundation model reliability, multimodal reasoning, and AI evaluation, resulting in **2 NeurIPS 2026 submissions** with **strong reviews and favorable area chair meta-reviews**, plus **2 AAAI 2027 submissions**.

* **NeurIPS 2026** — *When Expert Disagreement Hurts*: designed an audit framework for LLM decision revision under conflicting expert signals, distinguishing prestige-driven compliance from evidence-based belief updating.
* **NeurIPS 2026** — *Retrieved but Ignored*: identified a post-retrieval evidence-ignoring failure mode in multimodal RAG, showing that successful retrieval does not necessarily translate into effective evidence use by VLMs.
* Developed complementary evaluation frameworks for calibrated LLM-judge aggregation and verifier-aware self-play auditing, including semantic cross-auditing that exposed substantial failures missed by deterministic checks.
* Engineered the supporting evaluation platform from scratch: a cross-platform Electron/React/FastAPI system automating 9+ LLM chat services and 100+ API models, with structured LLM-as-a-Judge pipelines, SQLite persistence, and one-command packaging.

## Independent Researcher

Jan. 2026 – Present

* Conducting independent research on reliable foundation models, spanning RL post-training, multimodal world models, and embodied reasoning.
* Developed an RLVR method that mitigates reward hacking through transformation-consistent verification and joint advantage estimation, expanding the model’s verified reasoning boundary on mathematical reasoning tasks.
* Designed a belief-conditioned repair framework for frozen multimodal world models that combines type-matched repair with calibrated abstention under noisy, missing, or conflicting evidence.
* Built a visuomotor execution framework combining task-frame transport with an RGB-conditioned feasibility guard, improving obstacle success by 72.5 percentage points over supervision-matched baselines under layout shift.

## Research Assistant

**Georgia Institute of Technology** \| Atlanta, GA (Hybrid) \| Jan. 2025 – Apr. 2026

Advised by Prof. Patrick Kastner. Led to a first-author Q1 SCI journal submission and an accepted first-author companion book chapter forthcoming in a Springer Nature edited volume.

* **Urban microclimate modeling:** Built and benchmarked a two-stage framework that forecasts temperature and humidity at five horizons (10–360 min) from 16 stations and transfers forecasts to a 100,283-point campus grid (~5.9 m spacing), comparing IDW, Ordinary Kriging, and morphology-informed Regression Kriging with nine urban features derived from LiDAR/OpenStreetMap.
* Developed and rigorously validated a 336K-parameter dual-depth parallel LSTM with variable selection and multi-head attention on 865K+ warm-season observations, using held-out-year and strict 12-fold unseen-station/unseen-year protocols, five-seed ablations, hierarchical bootstrap inference, and spatial holdouts. It achieved the best deep-learning 360-min temperature RMSE (3.18°C, 13% below TCN) and, despite a tuned linear model leading under average conditions, reduced six-hour RMSE from 4.88°C to 4.59°C in the hottest decile.
* **LLM-assisted scientific screening:** Designed exclusion-only, inclusion-only, and multi-stage pipelines for 900+ papers; evaluated Qwen2.5-72B and GPT-OSS-120B against human adjudication using precision, recall, F1, confusion matrices, and disagreement analysis.
* Scaled inference to 96 GPU workers across H100/H200 clusters and resolved failures involving Ollama, MXFP4 quantization, and constrained JSON decoding.

## Undergraduate Researcher

**Shandong University** \| Shandong, China \| Feb. 2023 – Jun. 2023

Advised by Prof. Xianfeng Yuan. Undergraduate thesis project on autonomous vehicle path planning in complex environments.

* Developed an enhanced Bidirectional Rapidly-Exploring Random Tree (Bi-RRT) algorithm for autonomous vehicle path planning in complex parking lot environments.
* Implemented adaptive probabilistic sampling and local trajectory smoothing modules, improving exploration efficiency and reducing curvature in dense obstacle fields.
* Integrated real-time collision detection, dynamic obstacle avoidance, and kinematic feasibility validation for continuous, safe navigation under motion constraints.
* Achieved 2× faster planning speed, ~35% smoother paths, and 15% shorter average trajectory length compared to baseline RRT and RRT*, validated across 100+ randomized test scenarios.

Work Experience
======

## Robotics Engineer

**Pudu Robotics** \| Atlanta Metropolitan Area (Hybrid) \| Sep. 2026 – Present

* Integrate and optimize enterprise autonomous robotic systems in complex real-world environments, spanning LiDAR/visual SLAM, mapping and localization, multi-floor navigation, fleet coordination, traffic management, elevator integration, and system-level performance optimization.
* Diagnose and optimize robotics systems across hardware, software, and infrastructure through log/CAN analysis, fault-code debugging, sensor and actuator telemetry, and Docker/VM-based on-premises systems to improve reliability and operational performance.

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

* **PyTorch / TorchRL** — Fixed SAC loss configuration, replay-buffer checkpoint recovery, and CrossQ key remapping, with regression coverage ([#4338](https://github.com/pytorch/rl/pull/4338) · [#4370](https://github.com/pytorch/rl/pull/4370) · [#4372](https://github.com/pytorch/rl/pull/4372)).
* **Hugging Face / Accelerate** — Fixed MPS device reporting, CPU-launch runtime configuration, and MLflow environment parsing, with regression coverage ([#4221](https://github.com/huggingface/accelerate/pull/4221) · [#4222](https://github.com/huggingface/accelerate/pull/4222) · [#4223](https://github.com/huggingface/accelerate/pull/4223)).
* **LinkedIn / Liger-Kernel** — Improved Gemma3, Gemma4, and Exaone4 transformer monkey-patching behavior and regression coverage ([#1444](https://github.com/linkedin/Liger-Kernel/pull/1444)).

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

* **MGT 6655** – Business Data Preparation and Visualization (with Prof. Mingfeng Lin): Support course delivery through assignment and dashboard evaluation, Ed Discussion guidance, and student assistance with Tableau, Power BI, and data preparation workflows.

## Teaching Assistant

**Georgia Institute of Technology** \| Atlanta, GA \| Sep. 2025 – May 2026

* **ME 4710** – Foundations in Machine Learning for Engineers (Sep. 2025 – Dec. 2025, with Jarred Fountain): Designed grading rubrics and assessed weekly assignments on Python implementations, statistical modeling, and ML algorithm selection.
* **MGT 6655** – Business Data Preparation and Visualization (Jan. 2026 – May 2026, with Prof. Mingfeng Lin): Graded visualization exercises and dashboard projects; supported students on Ed Discussions with Tableau, PowerBI, and data preparation techniques; built a privacy-preserving LLM-based Q&A assistant for 100+ students. Developed an end-to-end Python pipeline to transform Ed Discussion data into RAG and SFT datasets (JSONL) with schema-tolerant parsing and metadata traceability, and deployed a grounded retrieval-augmented assistant with configurable embedding backends and GPU-ready evaluation workflows.

## Undergraduate Teaching Assistant

**Shandong University** \| Shandong, China \| Sep. 2020 – Jul. 2021

* Supported a 400+ student Linear Algebra course, driving grading, records management, and personalized learning support; recognized as Outstanding Teaching Assistant for exceptional dedication to student success.
* Assessed 600+ handwritten assignments with clear, actionable feedback, directly boosting student understanding and measurable performance outcomes.
* Tracked weekly attendance and maintained meticulous, audit-ready academic records, enabling accurate progress reviews and timely academic interventions.
* Answered 30+ student questions weekly via online forums, delivering detailed explanations and real-world examples to clarify key concepts like eigenvalues, matrix operations, and vector spaces.

Leadership & Service
======

## Campus Academic Integrity TA Team Member

**Georgia Institute of Technology** \| Atlanta, GA \| Jan. 2026 – May 2026

* Supported OMS Analytics and OMS Cybersecurity programs (Spring 2026); reviewed academic misconduct cases and assisted with policy-consistent case evaluation.

## Publicity Manager – Starlight Art Troupe

**Shandong University** \| Shandong, China \| Sep. 2019 – Aug. 2021

* Directed the design and production of 30+ posters, flyers, and digital media assets to promote events, boosting audience turnout by 25% and strengthening brand recognition.
* Managed social media operations and curated engaging content, streamlining workflows and driving a 40% increase in follower engagement over two semesters.
* Coordinated 170+ photo/video shoots and post-production using Photoshop, Canva, Adobe Illustrator, Lightworks, and CapCut, delivering polished outputs on tight timelines.
* Led event planning and promotion with cross-functional teams, fostering community participation and earning the Outstanding Individual Award for Student Organizations at Shandong University.

Skills
======

* **Programming Languages:** Python, C/C++, Java, JavaScript, HTML/CSS, SQL, Bash/Shell, MATLAB, R, Julia
* **Machine Learning & AI:** PyTorch, TensorFlow, scikit-learn, HuggingFace, LangChain
* **Cloud & Infrastructure:** AWS, Azure, GCP, Docker, Kubernetes, Terraform
* **Big Data & ETL:** Apache Spark, Apache Airflow, PySpark, Databricks
* **Database Systems:** MySQL, PostgreSQL, MongoDB, Redis, BigQuery, Amazon Redshift
* **Tools & Frameworks:** Git, Linux, FastAPI, Flask, React, Node.js, Express, REST APIs
* **Data Analysis & Visualization:** Pandas, NumPy, Matplotlib, Tableau, Power BI, D3.js
