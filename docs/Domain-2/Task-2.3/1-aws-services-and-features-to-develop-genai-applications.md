---
title: AWS Services for Developing Generative AI Applications
description: Explore AWS services for building, customizing, and deploying generative AI applications, including Amazon Bedrock, SageMaker JumpStart, and PartyRock, for the AWS AI Practitioner exam.
keywords:
  - AWS
  - Generative AI
  - Bedrock
  - SageMaker
  - JumpStart
  - PartyRock
  - AI Practitioner
sidebar_position: 1
---

# 🛠️ AWS Services for Developing Generative AI Applications

AWS offers a wide range of services that make it easy to build, customize, and deploy generative AI applications. Below are key tools and services every practitioner should know:

---

## 🔷 Amazon Bedrock
- **What it is**: A fully managed service that gives you access to **foundation models (FMs)** from top providers like Anthropic (Claude), Meta (Llama), AI21, Cohere, and Stability AI.
- **Use Cases**:
  - Text generation, summarization, Q&A
  - Image generation (e.g., with Stability AI)
- **Key Features**:
  - No need to manage infrastructure
  - Supports Retrieval-Augmented Generation (RAG)
  - Guardrails and observability tools

---

## ⚙️ Amazon SageMaker JumpStart
- **What it is**: A tool within SageMaker that provides access to pre-built models and example notebooks for **text, vision, and code generation**.
- **Use Cases**:
  - Fine-tuning open-source models
  - Experimenting with Hugging Face and PyTorch models
- **Key Features**:
  - Pre-built solutions
  - No ML expertise required to get started

---

## 🧪 PartyRock (Amazon Bedrock Playground)
- **What it is**: A **no-code/low-code playground** built on Bedrock that lets you quickly prototype generative AI apps with drag-and-drop tools.
- **Use Cases**:
  - Build and share GenAI apps in minutes
  - Great for experimentation and learning
- **Key Features**:
  - Visual editor
  - Easy model selection and prompt testing

---

## 🧠 Amazon Q
- **What it is**: A generative AI-powered **business assistant** for internal teams and customer service.
- **Use Cases**:
  - Q&A over company documents
  - Developer assistance within AWS Console
- **Key Features**:
  - Integrated with IDEs and AWS services
  - Personalized responses based on internal knowledge

---

## 🔍 Amazon Kendra
- **What it is**: An **intelligent enterprise search service** powered by ML and GenAI.
- **Use Cases**:
  - Natural language search across documents
  - Enhancing RAG-based chatbot accuracy
- **Key Features**:
  - Relevance tuning
  - Document ingestion and ranking

---

## 🧬 Amazon Comprehend
- **What it is**: A **natural language processing (NLP)** service for extracting insights from text.
- **Use Cases**:
  - Sentiment analysis, entity extraction, topic modeling
  - Preprocessing inputs for generative pipelines
- **Key Features**:
  - PII detection
  - Custom entity recognition

---

## 🗂️ Amazon OpenSearch + Vector Engine
- **What it is**: A **search and vector database** engine that enables RAG and semantic search use cases.
- **Use Cases**:
  - Embedding-based search for GenAI apps
- **Key Features**:
  - Store and search dense vector embeddings
  - Integrate with Bedrock and SageMaker

---

## 📦 Amazon S3
- **What it is**: Secure object storage used to store training data, documents, or app outputs.
- **Use Cases**:
  - Hosting datasets for model training or embedding
  - Serving documents in a RAG workflow

---

## 🔐 Amazon IAM + Guardrails for Bedrock
- **What it is**: Identity and policy control to **manage GenAI access and safety settings**.
- **Use Cases**:
  - Defining prompt filters, PII redaction
  - Access control for Bedrock model usage

---

## 🧰 Other Useful Tools
- **Amazon Lambda**: Run GenAI functions serverlessly in response to triggers.
- **Amazon API Gateway**: Create APIs to expose GenAI apps.
- **Amazon CloudWatch**: Monitor GenAI app usage and health.
- **AWS Cloud9**: Browser-based IDE for building GenAI apps with SDKs.

---

These services form the building blocks for scalable, secure, and production-ready generative AI applications on AWS.
