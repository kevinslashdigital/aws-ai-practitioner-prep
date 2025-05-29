---
sidebar_position: 2
---

# Sources of Machine Learning (ML) Models

When starting a machine learning project, you don’t always have to build a model from scratch. There are two main sources of ML models:

- [Sources of Machine Learning (ML) Models](#sources-of-machine-learning-ml-models)
  - [📦 1. Open Source Pre-trained Models](#-1-open-source-pre-trained-models)
  - [🧠 2. Custom-Trained Models](#-2-custom-trained-models)
  - [🆚 Comparison Table](#-comparison-table)
  - [✅ Summary](#-summary)

---

## 📦 1. Open Source Pre-trained Models

**What are they?**  
Pre-trained models are machine learning models that have already been trained on large datasets and are ready to be used or fine-tuned.

**Benefits:**

- Save time and computing resources.
- Great for common tasks (like image classification or text generation).
- Can be fine-tuned for your specific needs.

**Examples:**

- **Hugging Face Transformers**: Pre-trained models for NLP (e.g., BERT, GPT-2, T5).
- **TensorFlow Hub**: Models for image, audio, and text tasks.
- **PyTorch Hub**: Community-contributed models for a wide range of tasks.

**Use Cases:**

- Sentiment analysis with BERT.
- Object detection with YOLO or ResNet.
- Text summarization with T5 or GPT.

**How to Use on AWS:**

- Use pre-trained models in **Amazon SageMaker** using Hugging Face containers.
- Deploy models directly via **Amazon Bedrock** (no training needed).

---

## 🧠 2. Custom-Trained Models

**What are they?**  
Custom-trained models are built by training your own algorithm on your own dataset.

**When to use:**

- Your problem is unique and not covered by pre-trained models.
- You have domain-specific data (e.g., medical, legal, industrial).
- You want full control over how the model behaves.

**Steps to Create:**

1. Collect and clean your dataset.
2. Choose an algorithm (e.g., XGBoost, neural networks).
3. Train the model using your data.
4. Evaluate and tune the model.
5. Deploy and monitor it in production.

**Use Cases:**

- Predicting customer churn using your company's customer data.
- Detecting defects in your factory's product images.
- Classifying support tickets for a custom helpdesk system.

**How to Train on AWS:**

- Use **Amazon SageMaker** to build, train, and deploy your own models.
- Use **SageMaker Autopilot** to automatically create a model from your data.
- Store training data in **Amazon S3**, process with **Glue** or **Data Wrangler**.

---

## 🆚 Comparison Table

| Feature           | Pre-trained Models                | Custom-Trained Models             |
| ----------------- | --------------------------------- | --------------------------------- |
| Setup Time        | Very fast                         | Requires time and effort          |
| Data Requirements | No or minimal                     | Needs labeled, clean data         |
| Customization     | Limited unless fine-tuned         | Fully customizable                |
| Use Case Fit      | General tasks                     | Specific business problems        |
| AWS Support       | Bedrock, SageMaker + Hugging Face | SageMaker, Autopilot, Custom Jobs |

---

## ✅ Summary

- Use **pre-trained models** when the task is standard (like image classification, translation, or text generation).
- Train **custom models** when your data or use case is unique, or when performance needs are high.

By understanding both sources, you can choose the right model approach for your AI project — balancing speed, cost, and accuracy.
