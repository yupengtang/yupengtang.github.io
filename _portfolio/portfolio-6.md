---
title: "Causal Probe & LLM Evaluation Framework"
excerpt: "Cross-platform Electron app and two-pass causal probe for LLM decision revision across 5 LLMs on a 1,989-task benchmark"
collection: portfolio
---

## Overview
Introduced a two-pass causal probe for LLM decision revision, distinguishing evidence-based belief updating from authority-driven compliance. This effort resulted in a first-author ICML 2026 submission based on 31K+ trials on a 1,989-task benchmark.

## Key Technologies
* **Frontend:** React, TypeScript, Electron, BrowserView automation
* **Backend:** FastAPI, SQLite, PyInstaller, electron-builder
* **LLMs:** 9+ LLM chat services, 100+ API models via OpenRouter

## Research Contributions
* Introduced a two-pass causal probe for LLM decision revision across 5 LLMs (31K+ trials).
* Distinguished evidence-based belief updating from authority-driven compliance.
* Built a cross-platform Electron desktop app for side-by-side evaluation of chat services and APIs.
* Developed and productionized an LLM-as-a-Judge evaluation pipeline with structured JSON outputs.

## Technical Implementation
* **Browser Automation:** Implemented a lightweight BrowserView automation engine (DOM injection, async polling, stability checks) cutting memory usage ~40% vs Playwright/Selenium.
* **Backend architecture:** Backed by a FastAPI service (15+ endpoints) and SQLite persistence.
* **Packaging:** One-command cross-platform packaging using PyInstaller and electron-builder.
* **Model Integration:** Integrated side-by-side evaluation across OpenRouter and native web interfaces.

## Research Goals
* Understand decision revision and belief updating vs authority-driven compliance.
* Accelerate and scale side-by-side model evaluations efficiently.
* Target publication: First-author ICML 2026 submission.

## Advisor
Prof. Mingfeng Lin, Georgia Institute of Technology

