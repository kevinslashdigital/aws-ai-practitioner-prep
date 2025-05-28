---
sidebar_position: 1
---

# ✅ Selection Criteria to Choose Pre-Trained Models

When selecting a pre-trained foundation model for your generative AI use case, it’s important to evaluate various factors such as performance, cost, and capabilities. Below are the key criteria to consider:

---

## 💸 Cost
- **Definition**: Pricing is often based on tokens processed (input + output).
- **Tradeoff**: Larger models are typically more powerful but cost more per use.
- **Example**: Claude 3 Opus is more expensive than Claude 3 Haiku.

---

## 🧠 Model Size & Complexity
- **Definition**: Refers to the number of parameters and overall architecture depth.
- **Impact**: 
  - Larger models handle complex reasoning better.
  - Smaller models are faster and more affordable.
- **Use Case**: Use small models for classification; large models for summarization or creative writing.

---

## ⚡ Latency
- **Definition**: The time it takes for the model to return a response.
- **Importance**: Critical for real-time applications like chatbots or code assistants.
- **Example**: Choose a smaller or optimized model for low-latency environments.

---

## 🧩 Modality
- **Definition**: The type of data the model can handle (text, image, audio, or multi-modal).
- **Examples**:
  - Text: Claude, LLaMA
  - Image + Text: GPT-4 Vision, Gemini
  - Audio + Text: Whisper, Amazon Transcribe

---

## 🌍 Multi-Lingual Capabilities
- **Definition**: Support for generating or understanding content in multiple languages.
- **Importance**: Essential for global or regional applications (e.g., Khmer, Japanese).
- **Example**: Mistral and Meta models support a wide range of languages.

---

## 🎛️ Customization & Fine-Tuning
- **Definition**: Ability to fine-tune the model on specific data or tasks.
- **Options**:
  - Zero-shot: no training
  - Few-shot: a few examples in the prompt
  - Fine-tuned: fully trained on your dataset
- **Impact**: Improves relevance for industry-specific needs (e.g., legal, medical).

---

## 🔁 Input/Output Length Limits
- **Definition**: Maximum number of tokens the model can process in a single request.
- **Use Case**: Long document summarization or conversation memory needs high token limits.
- **Example**: Claude 3 Opus supports up to 200K tokens, suitable for large input contexts.

---

## 📈 Model Capabilities
- **Definition**: Evaluate based on model performance for tasks like:
  - Reasoning
  - Summarization
  - Code generation
  - Safety and moderation
- **Tip**: Use benchmarks or documentation from providers (e.g., Anthropic, Meta, AWS) to compare.

---

## 🔌 Deployment Method
- **Options**:
  - API access via Amazon Bedrock
  - Self-hosting via SageMaker or open source
- **Impact**: Influences scalability, latency, and maintenance requirements.

---

Choosing the right pre-trained model involves balancing **cost, performance, modality, and scalability** to match your application goals.
