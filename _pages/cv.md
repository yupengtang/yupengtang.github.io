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
* **Y. Tang**, M. Lin. *What Can LLM Judge Panels Measure? Estimands, Diagnostics, and Calibrated Aggregation*. **AAAI 2027**, under review.
* **Y. Tang**, M. Lin. *Auditing Self-Play Evaluation: Deterministic Checks Miss Semantic Defects and Overstate Ranking Reversals*. **AAAI 2027**, under review.
* **Y. Tang**. *Invariance as Verifiable Reward: Suppressing Reward Hacking in RLVR through Transformation Consistency*. **AAAI 2027**, under review.
* **Y. Tang**. *TRACE: Belief-Conditioned Typed Repair for Multimodal World Models*. **AAAI 2027**, under review.
* **Y. Tang**. *Confidence Trajectory Distillation: Teaching Compressed Vision-Language Models When to Doubt*. **AAAI 2027**, under review.

Research Experience
======

## Visiting Researcher

**Mohamed bin Zayed University of Artificial Intelligence (MBZUAI)** \| Remote \| Jul. 2026 – Present (Part-time)

* Leading a self-directed research collaboration with Prof. Lijie Hu's PAI Lab, driving new methods in trustworthy machine learning, post-training, and multimodal AI systems.

## Research Assistant

**Georgia Institute of Technology** \| Atlanta, GA \| Sep. 2025 – Present

Advised by Prof. Mingfeng Lin. Collaborated on a broad research program spanning LLM behavior, multimodal AI, and AI evaluation, resulting in **2 NeurIPS 2026 submissions** (both with **strong reviews and favorable area chair meta-reviews**) and **2 AAAI 2027 submissions** (under review).

* **NeurIPS 2026** (**strong reviews, favorable AC meta-review**) — *When Expert Disagreement Hurts*: designed an audit framework examining how LLMs revise decisions under expert disagreement signals, identifying prestige-driven compliance patterns distinct from evidence-based belief updating.
* **NeurIPS 2026** (**strong reviews, favorable AC meta-review**) — *Retrieved but Ignored*: identified a post-retrieval evidence-ignoring failure mode in multimodal RAG, revealing that matched retrieval success can mask sharply different evidence-use behavior across VLMs.
* **AAAI 2027** (under review) — *What Can LLM Judge Panels Measure?*: built ACT-Council, a domain-conditioned Bradley–Terry model with verifier-anchored calibration that separates three distinct panel-aggregation estimands (observed-panel, order-marginalized, nuisance-removed), and mapped the conditions under which joint calibration improves reliability over simpler domain-steelman baselines rather than claiming uniform dominance.
* **AAAI 2027** (under review) — *Auditing Self-Play Evaluation*: built VC-Play, a verifier-contract audit framework for LLM self-play evaluation, showing that deterministic checks alone miss a 37.6% verifier defect rate and that semantic cross-auditing overturns most of an apparent pooled correctness-vs-preference ranking reversal (101/69 → 22/26, no longer significant), leaving a validated family-specific reversal (Anthropic) as the main robust finding.
* Engineered the supporting evaluation platform from scratch: a cross-platform Electron desktop app (React/TypeScript/FastAPI) with BrowserView-based automation across 9+ LLM chat services and 100+ API models, LLM-as-a-Judge pipeline with structured outputs, SQLite persistence, and one-command packaging (PyInstaller + electron-builder).

## Independent Researcher

**Georgia Institute of Technology** \| Atlanta, GA \| Jan. 2026 – Present

* Running a self-directed research program on reliable reasoning in foundation models, with focus on post-training (RLVR), test-time compute, and multimodal calibration.
* Addressed reward hacking in RLVR by enforcing transformation consistency across semantically invariant input perturbations, using a consistency gate and joint advantage formulation to make reward exploitation harder and expand the model's verified reasoning boundary, validated on math reasoning models.
* Designed a belief-conditioned repair framework for frozen multimodal world models, combining type-matched repair modules with calibrated abstention to handle noisy, missing, or conflicting information without retraining the base model.
* Built a confidence-trajectory distillation method that transfers uncertainty behavior from large vision-language models into compressed models via trajectory alignment and a rank-consistency loss, keeping compressed models properly calibrated under image degradation while preserving clean-data accuracy.

## Graduate Researcher

**Georgia Institute of Technology** \| Atlanta, GA \| Jan. 2025 – Dec. 2025

Advised by Prof. Patrick Kastner. First author, manuscript targeting *Building and Environment* (SCI Q1, Elsevier).

* Designed a two-stage prediction framework that forecasts campus temperature and humidity at five horizons (10 min – 6 hours) from 16 sparse weather stations, then maps predictions to a 100K-point grid at 5.9 m resolution via morphology-informed Regression Kriging with nine LiDAR/OpenStreetMap features.
* Implemented a dual-depth parallel LSTM with variable selection and attention (337K params), achieving best DL RMSE at 360 min (3.18°C, 13% below TCN) and benchmarking against six baselines to show that a tuned linear model beats all DL architectures at every horizon.
* Trained on 947K warm-season observations using A100 GPU (PACE cluster), validated through rolling-origin CV, multi-seed ablation with Wilcoxon significance tests, and leave-one-station-out spatial cross-validation.

## Undergraduate Researcher

**Shandong University** \| Shandong, China \| Feb. 2023 – Jun. 2023

Advised by Prof. Xianfeng Yuan. Undergraduate thesis project on autonomous vehicle path planning in complex environments.

* Developed an enhanced Bidirectional Rapidly-Exploring Random Tree (Bi-RRT) algorithm for autonomous vehicle path planning in complex parking lot environments.
* Implemented adaptive probabilistic sampling and local trajectory smoothing modules, improving exploration efficiency and reducing curvature in dense obstacle fields.
* Integrated real-time collision detection, dynamic obstacle avoidance, and kinematic feasibility validation for continuous, safe navigation under motion constraints.
* Achieved 2× faster planning speed, ~35% smoother paths, and 15% shorter average trajectory length compared to baseline RRT and RRT*, validated across 100+ randomized test scenarios.

Work Experience
======

## Machine Learning Engineer Intern

**GMI Cloud** \| Mountain View, California \| May 2025 – Aug. 2025

* Optimized Flux-Schnell (12B DiT) multimodal inference on H100 by implementing GPU memory persistence, offload strategies, and kernel-level tuning, achieving ~30 images/min and 1–2s latency per request on a single GPU compared to the 10–15× slower baseline.
* Designed a multi-GPU–ready inference architecture (NCCL-compatible, ONNX to TensorRT conversion pipeline) and validated linear-scaling behavior on single-GPU prototypes to support future distributed deployment.
* Built production-grade serving infrastructure including queueing, heartbeat monitoring, structured logging, GCS integration, and safety filtering, enabling stable long-running operations under high request volume.
* Implemented a video super-resolution pipeline (Real-ESRGAN + FastAPI) with PSNR/SSIM evaluation, reducing 5s@24fps clip runtime by ~65% (284s to 100s) when integrated with Wan2.2 text-to-video.
* Developed an AI-powered e-commerce try-on service (ComfyUI, Flux-Kontext + Segformer), delivering under 5s per image outfit changing, background removal, and style transfer via secure RESTful APIs.
* Synthesized research papers and open-source model documentation to produce a technical review of multimodal generation systems, covering text-to-image, text-to-video, and super-resolution model families and summarizing key benchmark findings for internal evaluation.

Projects
======

## AI-Powered Product Recommendation System

**Independent Venture** \| Apr. 2024 – Aug. 2024

* Architected an AI-powered recommendation system that analyzes millions of Amazon product reviews to help users quickly discover the most relevant and high-quality items through semantic search and LLM-based understanding.
* Developed a PySpark ETL pipeline to clean, tokenize, and embed reviews (768-dim via text-embedding-005), storing vectors and metadata efficiently in BigQuery for hybrid semantic retrieval.
* Designed a hybrid retrieval engine (ScaNN + metadata filters) that improved nDCG@3 by +21% (0.85 vs 0.70) and achieved MRR = 0.88, using approximate nearest neighbors (TreeAH + AVQ) with reranking via FastAPI microservice.
* Integrated Google Gemini with LangChain for RAG-based sentiment analysis and feature summarization, achieving 88% accuracy and 4.3 / 5 relevance for explainable recommendations.
* Provisioned scalable infrastructure on GCP (Cloud Run, BigQuery, Cloud Storage) using Terraform, sustaining ~6 s query latency and 92% product-category coverage across 500 test queries.

Competition Experience
======

## American Express Default Prediction

**Kaggle Competition** \| May 2022 – Aug. 2022 \| **Top 0.4% (20th/4,874 teams), Silver Medal**

* Trained a weighted ensemble of LightGBM (DART) and GPU-accelerated XGBoost on 16 GB of credit card transaction time-series covering spending, balances, delinquency, and repayment.
* Ran 5-fold stratified cross-validation with a custom Gini-aligned training metric; iterated from a baseline through feature-enriched and feature-compressed model variants, checkpointing best models each round and tracking feature importance for selection.
* Assembled the final submission as a weighted blend of four checkpoints (LightGBM at 30/25/25%, XGBoost at 20%), with weights assigned by per-model validation Gini; multi-seed training across variants kept variance low and generalization stable.

Teaching Experience
======

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
