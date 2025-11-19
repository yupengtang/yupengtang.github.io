---
title: "AI-Powered Product Recommendation System"
excerpt: "Semantic search and LLM-based recommendation system analyzing millions of Amazon reviews"
collection: portfolio
---

## Overview
Architected an AI-powered recommendation system that analyzes millions of Amazon product reviews to help users quickly discover the most relevant and high-quality items through semantic search and LLM-based understanding.

## Key Technologies
* **Data Processing:** PySpark, BigQuery
* **Machine Learning:** Text-embedding-005, ScaNN, Google Gemini, LangChain
* **Infrastructure:** GCP (Cloud Run, BigQuery, Cloud Storage), Terraform, FastAPI

## Achievements
* Developed a PySpark ETL pipeline to clean, tokenize, and embed reviews (768-dim via text-embedding-005)
* Designed hybrid retrieval engine improving nDCG@3 by +21% (0.85 vs 0.70) with MRR = 0.88
* Integrated RAG-based sentiment analysis achieving 88% accuracy and 4.3/5 relevance score
* Sustained ~6s query latency with 92% product-category coverage across 500 test queries

## Technical Details
* Hybrid retrieval using ScaNN with approximate nearest neighbors (TreeAH + AVQ)
* Metadata filtering and reranking via FastAPI microservice
* Scalable infrastructure provisioned with Terraform on GCP
* Explainable recommendations through LLM-based feature summarization

