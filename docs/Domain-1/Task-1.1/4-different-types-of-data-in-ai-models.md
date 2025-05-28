---
sidebar_position: 4
---

# Different Types of Data in AI Models

AI models can work with many types of data. Some common types include:
[**labeled**](#-1-labeled-data), [**unlabeled**](#-2-unlabeled-data), 
[**tabular**](#-3-tabular-data), [**time-series**](#-4-time-series-data), 
[**image**](#-5-image-data), [**text**](#-6-text-data), 
[**structured**](#-7-structured-data), and [**unstructured**](#-8-unstructured-data) data.  
Each type is used for different AI problems and models.

---

## 🔖 1. Labeled Data

**What is it?**  
Labeled data means each data point has an answer or tag.

**Example:**  
- An image with the label “cat”.
- A sentence labeled as “positive” sentiment.
- A medical record labeled as “diabetes: yes”.

**Used in:**  
Supervised learning (where the model learns from correct answers).

---

## ❓ 2. Unlabeled Data

**What is it?**  
Unlabeled data has no tags or answers — just raw input.

**Example:**  
- A folder of photos with no description.
- Web pages with no categories.

**Used in:**  
Unsupervised learning (the model finds patterns by itself), or semi-supervised learning.

---

## 📊 3. Tabular Data

**What is it?**  
Data in rows and columns — like spreadsheets or tables.

**Example:**  
- Excel files.
- Customer databases.
- Financial records.

**Used in:**  
Structured prediction, classification, regression (e.g., predicting house prices).

---

## 🕒 4. Time-Series Data

**What is it?**  
Data collected over time in a sequence.

**Example:**  
- Stock prices every minute.
- Heart rate every second.
- Temperature every hour.

**Used in:**  
Forecasting, anomaly detection, trend analysis.

---

## 🖼️ 5. Image Data

**What is it?**  
Pictures or visual information.

**Example:**  
- Photos from a camera.
- Medical scans (X-rays, MRIs).
- Satellite images.

**Used in:**  
Computer vision — for tasks like object detection, facial recognition.

---

## 📝 6. Text Data

**What is it?**  
Words, sentences, or paragraphs — usually in human language.

**Example:**  
- Emails.
- Chat messages.
- News articles.

**Used in:**  
Natural Language Processing (NLP) — like sentiment analysis, translation, and chatbots.

---

## 🧩 7. Structured Data

**What is it?**  
Organized data in a fixed format — easy to store and search.

**Example:**  
- SQL databases.
- CSV files.

**Used in:**  
Traditional ML models like decision trees, logistic regression.

---

## 🌀 8. Unstructured Data

**What is it?**  
Data without a predefined format.

**Example:**  
- Images.
- Videos.
- Audio.
- Free-form text.

**Used in:**  
Deep learning, especially with CNNs (for images), RNNs/Transformers (for text).

---

## Summary Table

| Type              | Description               | Example                  | Common Use Cases             |
| ----------------- | ------------------------- | ------------------------ | ---------------------------- |
| Labeled Data      | Data with correct answers | Image labeled “cat”      | Supervised learning          |
| Unlabeled Data    | Data without labels       | Random photos            | Unsupervised/semi-supervised |
| Tabular Data      | Rows and columns          | Sales spreadsheet        | Prediction, regression       |
| Time-Series Data  | Data over time            | Heart rate logs          | Forecasting, monitoring      |
| Image Data        | Visual data               | X-ray scans              | Classification, detection    |
| Text Data         | Written or spoken words   | Chat messages            | NLP, sentiment analysis      |
| Structured Data   | Organized with format     | Database records         | Traditional ML               |
| Unstructured Data | No fixed format           | Images, videos, articles | Deep learning, GenAI         |