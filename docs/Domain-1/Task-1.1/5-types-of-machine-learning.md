---
title: Types of Machine Learning
description: Understand supervised, unsupervised, semi-supervised, reinforcement learning, and deep learning for the AWS AI Practitioner exam.
keywords:
  - Machine Learning
  - Supervised Learning
  - Unsupervised Learning
  - Semi-Supervised
  - Reinforcement Learning
  - Deep Learning
  - AWS
  - AI Practitioner
sidebar_position: 5
---

# Types of Machine Learning

Machine learning algorithms can be grouped into several categories based on how they learn from data:

- [Types of Machine Learning](#types-of-machine-learning)
  - [🧑‍🏫 1. Supervised Learning](#-1-supervised-learning)
  - [🧩 2. Unsupervised Learning](#-2-unsupervised-learning)
  - [⚖️ 3. Semi-Supervised Learning](#️-3-semi-supervised-learning)
  - [🎮 4. Reinforcement Learning](#-4-reinforcement-learning)
  - [🧠 5. Deep Learning](#-5-deep-learning)
  - [Summary Table](#summary-table)

---

## 🧑‍🏫 1. Supervised Learning

**Definition:**  
Supervised learning is when the algorithm learns from labeled data — each training example includes both the input and the correct output.

**How it works:**  
The model learns the relationship between input data and known results, so it can predict the result for new data.

**Example:**  
- Classifying emails as spam or not.
- Predicting house prices from size and location.

**Advantages:**
- Simple to understand and implement.
- Works well for classification and regression tasks.

**Challenges:**
- Needs a lot of labeled data, which can be expensive to create.

---

## 🧩 2. Unsupervised Learning

**Definition:**  
Unsupervised learning works with **unlabeled data**. The model looks for patterns, groups, or structures without being told the “right answer.”

**How it works:**  
It identifies hidden patterns or clusters in data.

**Example:**  
- Customer segmentation for marketing.
- Grouping similar news articles.

**Advantages:**
- No need for labeled data.
- Useful for discovering unknown patterns.

**Challenges:**
- Cannot make precise predictions.
- Harder to evaluate performance.

---

## ⚖️ 3. Semi-Supervised Learning

**Definition:**  
As the name suggests, this method combines supervised and unsupervised learning. The technique relies on using a small amount of labeled data and a large amount of unlabeled data to train systems. First, the labeled data is used to partially train the machine-learning algorithm. After that, the partially trained algorithm labels the unlabeled data. This process is called pseudo-labeling. The model is then re-trained on the resulting data mix without being explicitly programmed.

This method's advantage is that it does not require large amounts of labeled data. This is handy when working with data like long documents that would be too time-consuming for humans to read and label.

**How it works:**  
- First, labeled data is used to train the model.
- Then, the model uses what it learned to label the remaining data (pseudo-labeling).
- The model is re-trained on both the original and pseudo-labeled data.

**Example:**  
- Document classification where only a few documents are labeled.

**Advantages:**
- Saves time and cost.
- Balances the need for labeled data with scalability.

---

## 🎮 4. Reinforcement Learning

**Definition:**  
Reinforcement learning is a method with reward values attached to the different steps that the algorithm must go through. So, the model's goal is to accumulate as many reward points as possible and eventually reach an end goal. Most of the practical application of reinforcement learning in the past decade has been in video games. Cutting-edge reinforcement learning algorithms have achieved impressive results in classic and modern games, often significantly beating their human counterparts.

The challenge with reinforcement learning is that real-world environments change often, significantly, and with limited warning. It can make it harder for the algorithms to be effective in practice. Developer bias can also affect the outcomes. As the data scientist designs the rewards, they can influence the

**How it works:**  
- The agent interacts with an environment.
- It learns a strategy (policy) to maximize rewards over time.

**Example:**  
- Training a robot to walk.
- Teaching an AI to play chess or video games.

**Advantages:**
- Great for dynamic environments and long-term goals.
- Learns from trial and error.

**Challenges:**
- Complex to implement.
- Sensitive to environment changes and design bias.

---

## 🧠 5. Deep Learning

**Definition:**  
Deep learning is a type of machine learning technique that is modeled on the human brain. Deep learning algorithms analyze data with a logic structure similar to that used by humans. They use artificial neural networks to process information in layers. An artificial neural network (ANN) is made of software nodes called artificial neurons that process data collectively. Data flows from the input layer of neurons through multiple "deep" hidden neural network layers before coming to the output layer. The additional hidden layers support learning that's far more capable than that of standard machine learning models.

**How it works:**  
- Data flows through layers of neurons.
- Each layer learns a different level of features or patterns.

**Example:**  
- Image recognition (e.g., face detection).
- Natural language understanding (e.g., ChatGPT).

**Advantages:**
- Very powerful for large, unstructured data (images, audio, text).
- Often outperforms traditional ML on complex tasks.

**Challenges:**
- Requires large datasets and computing power.
- Can be harder to explain or interpret.

---

## Summary Table

| Type                   | Needs Labeled Data? | Key Use Case                  | Strength                            | Challenge                            |
| ---------------------- | ------------------- | ----------------------------- | ----------------------------------- | ------------------------------------ |
| Supervised Learning    | ✅ Yes               | Spam filtering, predictions   | Simple, accurate                    | Needs lots of labeled data           |
| Unsupervised Learning  | ❌ No                | Grouping data, pattern mining | No labels needed, flexible          | Less precise                         |
| Semi-Supervised        | ✅ + ❌ Mix           | Document classification       | Less labeling required              | Pseudo-labeling can introduce errors |
| Reinforcement Learning | ❌ Uses Rewards      | Game-playing, robotics        | Learns through experience           | Complex and slow                     |
| Deep Learning          | Depends             | Vision, language, speech      | Great with large, unstructured data | Needs big data + GPU/TPU             |
