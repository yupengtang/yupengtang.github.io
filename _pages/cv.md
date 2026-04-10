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
* **Bachelor of Engineering in Artificial Intelligence**, Shandong University, Sep. 2019 – June 2023

Publications & Manuscripts
======

* **Y. Tang**, M. Lin. *Beyond Reversal Rates: A Mechanistic Audit of LLM Decision Revision Under Reputation Cues*. **ICML 2026** (International Conference on Machine Learning), under review.
* **Y. Tang**, M. Lin. *Retrieved but Ignored: Evaluating Evidence Use After Retrieval in Vision Language Models*. **NeurIPS 2026** (Conference on Neural Information Processing Systems), under review.
* **Y. Tang**. *UPD: Uncertainty-Preserving Distillation for Vision-Language Models*. **NeurIPS 2026** (Conference on Neural Information Processing Systems), under review.
* **Y. Tang**. *The Language of Surprise: LLM Compression as a Unifying Primitive for Knowledge Discovery*. **KDD 2026** (ACM SIGKDD Conference on Knowledge Discovery and Data Mining), Blue Sky Ideas Track, under review.
* **Y. Tang**. *Do Large Language Models Track Event Boundaries? Incremental Signals, Localization, and Robustness*. In preparation for **EMNLP 2026** (Conference on Empirical Methods in Natural Language Processing).
* **Y. Tang**, Z. Y. Jiang, T. Changnawa, H.-S. Shih, I. Karadag, P. Kastner. *High-Resolution Microclimate Forecasting with Morphology-Aware Spatiotemporal Models*. In preparation for **Building and Environment** (SCI Q1, IF ≈ 7.6).
* E. Cheng, R. Ma, R. Qi, **Y. Tang**. *Image Colorization Using Generative Adversarial Networks*. **Proc. SPIE 12294**, 7th Int. Symp. on Advances in Electrical, Electronics, and Computer Engineering, 122943Z, 2022. **(Co-first author)**

Research Experience
======

## Research Assistant
**Georgia Institute of Technology** | Atlanta, GA | Sep. 2025 – Present

Advised by Prof. Mingfeng Lin.

* First-author ICML 2026 submission: introduced a two-pass causal probe for LLM decision revision, distinguishing evidence-based belief updating from authority-driven compliance across 5 LLMs (31K+ trials on a 1,989-task benchmark).
* Built a cross-platform Electron desktop app (React/TypeScript/FastAPI) for side-by-side evaluation across 9+ LLM chat services and 100+ API models via OpenRouter; implemented a lightweight BrowserView automation engine (DOM injection, async polling, stability checks) cutting memory usage ~40% vs Playwright/Selenium.
* Developed and productionized an LLM-as-a-Judge evaluation pipeline with structured JSON outputs, backed by a FastAPI service (15+ endpoints), SQLite persistence, and one-command cross-platform packaging (PyInstaller + electron-builder).

## Graduate Researcher
**Georgia Institute of Technology** | Atlanta, GA | Jan. 2025 – Present

Advised by Prof. Patrick Kastner.

* Architected a spatiotemporal modeling framework for high-frequency sensor data (947K samples), achieving large-scale training optimized on distributed HPC infrastructure.
* Proposed a novel physics-informed sequence architecture (incorporating Gated Residual Networks, Variable Selection Networks, and multi-head attention) with structured inductive biases, achieving strong out-of-distribution generalization across unseen locations (Temp RMSE: 0.43 °C; RH RMSE: 1.3%).
* Built a scalable sparse-to-dense inference pipeline for high-resolution spatial prediction (100K+ grid points), coupling Random Forest embeddings with Regression Kriging over high-dimensional geospatial covariates.
* Evaluated zero-shot spatial transferability across rigorous deep learning baselines, resulting in a manuscript prepared for an SCI Q1 journal.

## Undergraduate Researcher
**Shandong University** | Shandong, China | Feb. 2023 – June 2023

* Developed an enhanced Bidirectional Rapidly-Exploring Random Tree (Bi-RRT) algorithm for autonomous vehicle path planning in complex parking lot environments.
* Implemented adaptive probabilistic sampling and local trajectory smoothing modules, improving exploration efficiency and reducing curvature in dense obstacle fields.
* Integrated real-time collision detection, dynamic obstacle avoidance, and kinematic feasibility validation for continuous, safe navigation under motion constraints.
* Achieved 2× faster planning speed, ~35% smoother paths, and 15% shorter average trajectory length compared to baseline RRT and RRT*, validated across 100+ randomized test scenarios.

## Research Intern
**Shandong University** | Shandong, China | Sep. 2021 – April 2022

* Co-first & corresponding author of a peer-reviewed international conference paper (SPIE 2022) on automatic image colorization.
* Designed a novel lightweight GAN pipeline (U-Net generator + ResNet18 discriminator) and introduced a YUV-channel separation technique, reducing training cost while boosting structural fidelity and perceptual sharpness.
* Stabilized adversarial training with optimized objectives (re-weighted "realness" reliability term and tuned loss balance), improving color fidelity and transfer robustness under diverse textures and scenes.
* Scaled experiments on 4.3K+ natural & animated images in PyTorch with extensive visual comparisons, consistently outperforming baselines in visual quality and detail preservation.


Work Experience
======

## Machine Learning Engineer
**GMI Cloud** | Mountain View, California | May 2025 – August 2025

* Optimized Flux-Schnell (12B DiT) multimodal inference on H100 clusters with GPU memory persistence & offload, reaching ~30 images/min/GPU and 1–2s latency (10–15× faster than baseline).
* Scaled a distributed multi-GPU inference pipeline (NCCL all-reduce, ONNX → TensorRT) achieving linear throughput across nodes.
* Built production-ready infrastructure (queuing, heartbeat monitoring, structured logging, GCS integration, content moderation) to ensure long-running stability & compliance.
* Implemented a video super-resolution pipeline (Real-ESRGAN + FastAPI) with PSNR/SSIM evaluation, reducing 5s@24fps clip runtime by ~65% (284s → 100s) when integrated with Wan2.2 text-to-video.
* Developed an AI-powered e-commerce try-on service (ComfyUI, Flux-Kontext + Segformer), delivering <5s per image outfit changing, background removal, and style transfer via secure RESTful APIs.

Projects
======

## AI-Powered Product Recommendation System
**Independent Venture** | April 2024 – August 2024

* Architected an AI-powered recommendation system that analyzes millions of Amazon product reviews to help users quickly discover the most relevant and high-quality items through semantic search and LLM-based understanding.
* Developed a PySpark ETL pipeline to clean, tokenize, and embed reviews (768-dim via text-embedding-005), storing vectors and metadata efficiently in BigQuery for hybrid semantic retrieval.
* Designed a hybrid retrieval engine (ScaNN + metadata filters) that improved nDCG@3 by +21% (0.85 vs 0.70) and achieved MRR = 0.88, using approximate nearest neighbors (TreeAH + AVQ) with reranking via FastAPI microservice.
* Integrated Google Gemini with LangChain for RAG-based sentiment analysis and feature summarization, achieving 88% accuracy and 4.3 / 5 relevance for explainable recommendations.
* Provisioned scalable infrastructure on GCP (Cloud Run, BigQuery, Cloud Storage) using Terraform, sustaining ~6 s query latency and 92% product-category coverage across 500 test queries.

Competition Experience
======

## American Express Default Prediction
**Kaggle Competition** | May 2022 – August 2022 | **Top 0.4% (20th/4,874 teams), Silver Medal**
* Developed a weighted ensemble of LightGBM (DART) and GPU-accelerated XGBoost models on 16 GB tabular time-series data covering transactions, balances, delinquencies, and repayments.
* Led model tuning and ensemble strategy, optimizing hyperparameters via grid search and stratified 5-fold cross-validation.
* Designed diverse feature sets—including lag features, rolling statistics, and trend indicators—and trained multiple seeds to boost stability, delivering a compact, high-performing solution that outperformed all baselines.

Teaching Experience
======

## Teaching Assistant
**Georgia Institute of Technology** | Atlanta, GA | Sep. 2025 – Present

* **ME 4710** – Foundations in Machine Learning for Engineers (Sep. 2025 – Dec. 2025, with Dr. Jarred Fountain): Designed grading rubrics and assessed weekly assignments on Python implementations, statistical modeling, and ML algorithm selection
* **MGT 6655** – Business Data Preparation and Visualization (Jan. 2026 – May 2026, with Prof. Mingfeng Lin): Responsibilities include grading visualization exercises and dashboard projects; supporting students on Ed Discussions with Tableau, PowerBI, and data preparation techniques
* **Campus Academic Integrity TA Team** (Jan. 2026 – May 2026): Supporting OMS Analytics and OMS Cybersecurity programs (Spring 2026); reviewing academic misconduct cases and assisting with policy-consistent case evaluation

## Undergraduate Teaching Assistant
**Shandong University** | Shandong, China | Sep. 2020 – July 2021

* Supported a 400+ student Linear Algebra course, driving grading, records management, and personalized learning support; recognized as Outstanding Teaching Assistant for exceptional dedication to student success.
* Assessed 600+ handwritten assignments with clear, actionable feedback, directly boosting student understanding and measurable performance outcomes.
* Tracked weekly attendance and maintained meticulous, audit-ready academic records, enabling accurate progress reviews and timely academic interventions.
* Answered 30+ student questions weekly via online forums, delivering detailed explanations and real-world examples to clarify key concepts like eigenvalues, matrix operations, and vector spaces.

Leadership & Service
======

## Publicity Manager – Starlight Art Troupe
**Shandong University** | Shandong, China | Sep. 2019 – August 2021

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
