---
layout: archive
title: "CV"
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

Research Experience
======

## Research Assistant
**Georgia Institute of Technology** | Atlanta, GA | Sep. 2025 – Present

Advised by Prof. Mingfeng Lin.

* Designing scalable multi-agent LLM experimentation frameworks to study causal effects in identity disclosure and stance change, using controlled R1–R2 role structures and cross-model interactions across 12 frontier models and 1.9K sessions.
* Building a Chromium/Electron orchestration layer that unifies browser chatbot sessions and direct API inference, using Playwright automation for parallel prompting, DOM-based response capture, and coordinator-LLM consistency scoring at scale.
* Current work targets an ACL 2026 submission on causal inference in multi-agent LLM interactions and identity-conditioned persuasion dynamics.

## Machine Learning Researcher
**Sustainable Urban Systems Lab, Georgia Tech** | Atlanta, GA | Jan. 2025 – Present

* Developed FusionLSTM, a novel deep learning architecture integrating Gated Residual Networks, Variable Selection Networks, parallel multi-scale LSTM branches, and multi-head attention for urban microclimate forecasting, processing 947K warm-season 10-min observations from 16 weather stations (2015-2019).
* Built a physics-aware feature pipeline with solar-angle and cyclic-time encodings, enabling station-agnostic 24-hour temporal modeling and robust generalization to unseen locations (MAE: 0.95°C for temperature, 4.23% for humidity; R²: 0.857/0.823).
* Integrated Regression Kriging with PyKrige and Random Forest using nine geospatial covariates (LULC, elevation, shadow ratio) to generate 100K+ high-resolution grid-level predictions across the Georgia Tech campus (~3.5 km²), leveraging 16-station coverage for stable variogram estimation.
* Established comprehensive baseline comparisons and preparing a research manuscript for Building and Environment (SCI Q1, Impact Factor ≈ 7.1).

## Research Assistant
**Georgia Institute of Technology** | Atlanta, GA | May 2025 – July 2025

Advised by Prof. Patrick Kastner.

* Optimization of microclimate surrogate models with cross-station generalization and Regression Kriging refinement.

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

* **ME 4710** – Foundations in Machine Learning for Engineers (Sep. 2025 – Dec. 2025, with Dr. Jarred Fountain)
* **MGT 6655** – Business Fundamentals for Analytics (Jan. 2026 – May 2026, with Prof. Mingfeng Lin)
* **Academic Integrity TA Team** (Jan. 2026 – May 2026)

## Undergraduate Teaching Assistant
**Shandong University** | Shandong, China | Sep. 2020 – July 2021

* Supported a 400+ student Linear Algebra course, driving grading, records management, and personalized learning support; recognized as Outstanding Teaching Assistant for exceptional dedication to student success.
* Assessed 600+ handwritten assignments with clear, actionable feedback, directly boosting student understanding and measurable performance outcomes.
* Tracked weekly attendance and maintained meticulous, audit-ready academic records, enabling accurate progress reviews and timely academic interventions.
* Answered 30+ student questions weekly via online forums, delivering detailed explanations and real-world examples to clarify key concepts like eigenvalues, matrix operations, and vector spaces.

Skills
======
* **Programming Languages:** Python, C/C++, Java, JavaScript, HTML/CSS, SQL, Bash/Shell, MATLAB, R, Julia
* **Machine Learning & AI:** PyTorch, TensorFlow, scikit-learn, HuggingFace, LangChain
* **Cloud & Infrastructure:** AWS, Azure, GCP, Docker, Kubernetes, Terraform
* **Big Data & ETL:** Apache Spark, Apache Airflow, PySpark, Databricks
* **Database Systems:** MySQL, PostgreSQL, MongoDB, Redis, BigQuery, Amazon Redshift
* **Tools & Frameworks:** Git, Linux, FastAPI, Flask, React, Node.js, Express, REST APIs
* **Data Analysis & Visualization:** Pandas, NumPy, Matplotlib, Tableau, Power BI, D3.js

Leadership & Service
======

## Publicity Manager – Starlight Art Troupe
**Shandong University** | Shandong, China | Sep. 2019 – August 2021

* Directed the design and production of 30+ posters, flyers, and digital media assets to promote events, boosting audience turnout by 25% and strengthening brand recognition.
* Managed social media operations and curated engaging content, streamlining workflows and driving a 40% increase in follower engagement over two semesters.
* Coordinated 170+ photo/video shoots and post-production using Photoshop, Canva, Adobe Illustrator, Lightworks, and CapCut, delivering polished outputs on tight timelines.
* Led event planning and promotion with cross-functional teams, fostering community participation and earning the Outstanding Individual Award for Student Organizations at Shandong University.
