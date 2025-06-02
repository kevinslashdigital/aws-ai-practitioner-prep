---
sidebar_position: 1
---

# 🧾 Components of a Prompt in Prompt Engineering

A prompt's form depends on the task you are giving to a model. When exploring prompt engineering, you will often see prompts that include some or all of the following elements:

---

## 🔹 Instructions

- This is the **task** for the foundation model (FM) to perform.
- Provides a **description** or **directive** on how the model should behave.

---

## 🔹 Context

- Offers **external information** to guide the model.
- Helps improve relevance and accuracy.

---

## 🔹 Input Data

- The **user-provided content** that needs processing or response.
- For example: text to summarize, a question to answer, etc.

---

## 🔹 Output Indicator

- Specifies the **desired format or type** of output.
- Helps the model understand how to structure the response.

---

# 🧭 Model Latent Space

- Represents the **“hidden” knowledge** stored in a trained model
- It's a **statistical database** of patterns and relationships learned during training
- When you prompt an LLM, you're **navigating this latent space** to retrieve relevant knowledge

## Example:

- A scuba vacation recommendation model might encode:
- Destinations
- Dive depths
- Visibility
- Weather conditions
- Even if a user asks, "Where can I snorkel with manatees?", the model can **infer an answer** using its latent understanding of related concepts.

---

# ❌ Negative Prompting?

**Negative prompting** is a technique in prompt engineering where you **explicitly instruct the model to avoid certain behaviors, topics, formats, or types of content** in its response.

## 🧾 Why Use Negative Prompting?

LLMs are flexible, but sometimes they:

- Drift off-topic
- Make assumptions
- Include unwanted content (e.g., code, hallucinations, opinions)

**Negative prompting** helps steer the model away from these undesired outputs.

## ✅ Examples

### Content Restriction

```text
Write a summary of this article, but do NOT include any opinions or assumptions.
```

### Format Control

```text
Explain this concept in plain language. Do not use technical jargon.
```

### Avoid Hallucination

```text
Answer only based on the context provided. Do not make up facts.
```

### Prevent Repetition or Verbosity

```text
Give a short response, and do not repeat any part of the input.
```

### 🔧 Use Cases for Negative Prompting

| Use Case              | Negative Prompt Example                                    |
| --------------------- | ---------------------------------------------------------- |
| 📱 Chatbots            | "Do not ask the user for personal data."                   |
| ⚖️ Legal Summarization | "Avoid giving legal advice."                               |
| 🎓 Education           | "Do not include the final answer, only explain the steps." |
| 🏥 Healthcare          | "Do not make a diagnosis or suggest medication."           |