---
sidebar_position: 3
---

# AWS Types of Inferencing

In AWS, inferencing refers to making predictions using trained machine learning models. AWS provides different inferencing options based on speed, cost, and infrastructure flexibility.

---

## 🧪 1. Batch Transform (Batch Inference)

**Service:** `Amazon SageMaker`

**What is it?**  
Used for generating predictions on large datasets without needing a real-time response.

**Example Use Cases:**
- Analyzing loan applications in bulk.
- Running periodic predictions on millions of images.

**Features:**
- Asynchronous.
- Automatically manages compute resources.
- Input/output data stored in Amazon S3.

**When to use:**  
When you don’t need immediate results and want to process large batches efficiently.

---

## ⚡ 2. Real-Time Inference (Endpoint Inference)

**Service:** `Amazon SageMaker`

**What is it?**  
Deploys the model to a real-time HTTPS endpoint. You send one request and get one response instantly.

**Example Use Cases:**
- Chatbots, fraud detection, product recommendations.

**Features:**
- Low latency.
- Auto-scaling available.
- Can use Multi-Model Endpoints to reduce cost.

**When to use:**  
When your application needs fast, interactive responses.

---

## 🧠 3. Serverless Inference

**Service:** `Amazon SageMaker`

**What is it?**  
A real-time inference option that automatically provisions compute power when needed, then scales to zero when idle.

**Example Use Cases:**
- Infrequent, bursty inference traffic (e.g., internal tools).

**Features:**
- No need to manage servers.
- Pay only for what you use.
- Fast cold start for smaller models.

**When to use:**  
When you want real-time inference without managing infrastructure and with occasional usage.

---

## 🌐 4. SageMaker Asynchronous Inference

**Service:** `Amazon SageMaker`

**What is it?**  
Handles large payloads or long-running predictions asynchronously through a REST endpoint.

**Example Use Cases:**
- Processing video, audio, or very large documents.

**Features:**
- Queues requests.
- Sends results to an S3 bucket when ready.

**When to use:**  
When you have slow inference workloads or big files that take time to process.

---

## 📦 5. Amazon Bedrock Inference

**Service:** `Amazon Bedrock`

**What is it?**  
Provides **serverless inference** for foundation models (like Claude, Titan, Llama) via API calls.

**Example Use Cases:**
- Text generation, summarization, chatbots, classification.

**Features:**
- Fully managed.
- No model training needed.
- Pay per request/token.

**When to use:**  
When using foundation models for GenAI tasks and don’t want to manage infrastructure.

---

## ⚙️ 6. AWS Lambda for Lightweight Inference

**Service:** `AWS Lambda`

**What is it?**  
Run lightweight models in short-lived serverless functions (e.g., scikit-learn or XGBoost).

**Example Use Cases:**
- Real-time prediction in webhooks or microservices.

**Features:**
- Event-driven.
- Fully serverless.
- 15-minute timeout limit.

**When to use:**  
For light, fast inference without long processing time.

---

## Summary Table

| AWS Inference Type           | Service        | Type       | Best For                                |
| ---------------------------- | -------------- | ---------- | --------------------------------------- |
| Batch Transform              | SageMaker      | Batch      | Large offline predictions               |
| Real-Time Inference Endpoint | SageMaker      | Real-Time  | Fast, online applications               |
| Serverless Inference         | SageMaker      | Real-Time  | On-demand usage, low traffic            |
| Asynchronous Inference       | SageMaker      | Async      | Long-running or large-payload inference |
| Foundation Model Inference   | Amazon Bedrock | Serverless | GenAI tasks like text generation        |
| Lightweight Inference        | AWS Lambda     | Serverless | Simple, small-scale ML predictions      |
