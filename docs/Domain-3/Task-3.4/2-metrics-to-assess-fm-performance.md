---
sidebar_position: 2
---

# 📏 Relevant Metrics to Assess Foundation Model Performance

Evaluating the output of a foundation model requires selecting the right **metrics** based on the task type (e.g., summarization, translation, classification). These metrics help compare outputs against reference answers and measure quality, relevance, and fluency.

---

## 🧾 1. ROUGE (Recall-Oriented Understudy for Gisting Evaluation)

### 🔍 What It Measures:
- Overlap between **generated text** and **reference summaries**
- Focuses on **recall** of words, sequences, or n-grams

### 🧪 Best For:
- **Text summarization**, content compression, document distillation

### 🧠 Variants:
- **ROUGE-1**: Unigram overlap
- **ROUGE-2**: Bigram overlap
- **ROUGE-L**: Longest common subsequence

---

## 🌐 2. BLEU (Bilingual Evaluation Understudy)

### 🔍 What It Measures:
- Overlap of n-grams between generated and reference text, using **precision**

### 🧪 Best For:
- **Machine translation**, short-form generation, paraphrasing

### 🧠 Notes:
- Scores from 0 to 1 (or 0 to 100%)
- Higher = better alignment with expected reference

---

## 🧠 3. BERTScore

### 🔍 What It Measures:
- Semantic similarity using **pre-trained BERT embeddings**
- Goes beyond surface word overlap

### 🧪 Best For:
- **Natural language generation**, **paraphrasing**, and **semantic comparison**

### 🧠 Benefit:
- Captures meaning even if words differ (e.g., synonyms)

---

## 📊 4. Accuracy

### 🔍 What It Measures:
- Percentage of correct predictions vs. total predictions

### 🧪 Best For:
- **Classification tasks** (e.g., spam detection, intent classification)

---

## 🎯 5. F1 Score

### 🔍 What It Measures:
- Harmonic mean of **precision** and **recall**

### 🧪 Best For:
- **Imbalanced datasets**
- Ensures both false positives and false negatives are considered

---

## 📉 6. Perplexity

### 🔍 What It Measures:
- How well a language model predicts the next word/token
- **Lower = better**

### 🧪 Best For:
- Evaluating fluency of **language models** and **text generation tasks**

---

## 📦 7. NDCG (Normalized Discounted Cumulative Gain)

### 🔍 What It Measures:
- Ranking relevance in **retrieval-based systems**
- Prioritizes high-relevance items at the top of the result list

### 🧪 Best For:
- **Search**, **RAG**, **recommendation systems**

---

## 🧩 Summary Table

| Metric     | Measures                          | Best For                        |
| ---------- | --------------------------------- | ------------------------------- |
| ROUGE      | Recall-based n-gram overlap       | Summarization                   |
| BLEU       | Precision-based n-gram overlap    | Translation, short-form text    |
| BERTScore  | Semantic similarity               | Paraphrasing, QA, summarization |
| Accuracy   | Correct vs. incorrect predictions | Classification                  |
| F1 Score   | Balance of precision and recall   | Imbalanced classification       |
| Perplexity | Next-token prediction quality     | Language modeling               |
| NDCG       | Ranking quality in search         | RAG, vector search              |

---

Selecting the right evaluation metric ensures that your foundation model meets the performance standards for **accuracy, relevance, fluency, and utility** in real-world tasks.
