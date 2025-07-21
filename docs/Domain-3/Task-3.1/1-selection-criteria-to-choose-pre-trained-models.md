---
title: Selection Criteria to Choose Pre-Trained Models
description: Learn the key criteria for selecting pre-trained foundation models, including performance, cost, size, and architecture, for the AWS AI Practitioner exam.
keywords:
  - Pre-trained Models
  - Model Selection
  - Foundation Models
  - Criteria
  - Performance
  - Cost
  - AWS
  - AI Practitioner
sidebar_position: 1
---

# ✅ Selection Criteria to Choose Pre-Trained Models

When selecting a pre-trained foundation model for your generative AI use case, it’s important to evaluate various factors such as performance, cost, and capabilities. Below are the key criteria to consider:

---

## 💸 Cost

- **Why it matters**: Pre-trained models can be expensive to train and operate, especially large foundation models.
- **Key Consideration**: Balance **model accuracy vs. cost**.
  - Example: Choose between a model with **98% accuracy that costs $100,000** to train vs. one with **97% accuracy at $5,000**.
- **Includes**:
  - Training cost
  - Inference cost
  - Compute/storage requirements

---

## 🧠 Model Size & Complexity

- **Impacts**:
  - Compute and memory requirements
  - Feasibility for edge deployment
- **Trade-off**: Larger models offer better accuracy but demand more resources.

---

## 🧠 Model Complexity & Architecture

- **Architecture depends on task**:
  - **CNN** → Image tasks
  - **RNN / Transformers** → Sequential or NLP tasks
- **Complexity indicators**:
  - Number of parameters
  - Number of layers
  - Computational load

---

## ⚡ Latency

- **Why it matters**: Some applications require **real-time results**.
- **Key Consideration**: Inference time must match the application's responsiveness needs.
  - Example: A **self-driving car** cannot use a slow model, even if accurate.
- **Trade-off**: High accuracy often means slower performance due to model complexity.

---

## 🧩 Modality

- **Definition**: Type of input/output supported by the model:
  - Text
  - Image
  - Audio
  - Video
  - Multimodal (e.g., image + text)
- **Note**: Ensemble models combine modalities to enhance performance.

---

## 🌍 Multi-Lingual Capabilities

- **Why it matters**: Global applications require support for multiple languages.
- **Check**: Was the model trained on the **languages** relevant to your users?

---

## 🎛️ Customization Ability

- Can the model be:
  - **Prompt-engineered?**
  - **Fine-tuned?**
  - **Used with RAG (Retrieval-Augmented Generation)?**
- **Importance**: Critical for domain-specific use cases.

---

## 🔁 Input/Output Length Limits

- Each model has limits on **token length**.
- **Important for**:
  - Document summarization
  - Long conversations
- **Action**: Always check token limits in the model’s specs.

## 🧩 Summary: How to Choose?

Ask these questions:

- What **modality** do I need (text, image, etc.)?
- Do I need **multilingual** capabilities?
- What are my **budget and latency** constraints?
- What **compute resources** are available?
- Do I need to **customize or fine-tune** the model?
- What **metrics** define success in my use case?

---

:::tip
Choosing the right pre-trained model involves balancing **cost, performance, modality, and scalability** to match your application goals.
:::
