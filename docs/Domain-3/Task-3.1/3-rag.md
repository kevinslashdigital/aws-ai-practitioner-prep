---
title: Retrieval-Augmented Generation (RAG)
description: Explore the concept of Retrieval-Augmented Generation (RAG), its architecture, benefits, and use cases for the AWS AI Practitioner exam.
keywords:
  - Retrieval-Augmented Generation
  - RAG
  - LLM
  - Knowledge Base
  - Semantic Search
  - Vector Database
  - AWS
  - AI Practitioner
sidebar_position: 3
---

# 🔎 Retrieval-Augmented Generation (RAG)

## 📖 What is RAG?

**Retrieval-Augmented Generation (RAG)** is an AI architecture that enhances the output of large language models (LLMs) by combining two components:

1. **Retriever**:  
   - Searches a **knowledge base** (typically a **vector database**) to find relevant context.
   - Uses **semantic search** by embedding your input query and comparing it with stored vector embeddings.

2. **Generator**:  
   - The LLM takes both your **original prompt** and the **retrieved context** to generate a response.
   - The augmented prompt helps produce more accurate and context-specific answers.

---

## 🔍 Why Use RAG?

LLMs can hallucinate—generate factually incorrect but confident-sounding answers—because they rely only on their pre-trained data.  
**RAG solves this** by enriching the model with **external, up-to-date, and domain-specific knowledge**.

---

## 🧠 How RAG Works (Step-by-Step)

![Retrieval-Augmented Generation (RAG)](./img/rag.png)

1. A user inputs a **prompt** (question or instruction).
2. The prompt is **embedded** using a query encoder into a vector.
3. The vector is sent to a **vector database** (e.g., OpenSearch, pgvector).
4. The **retriever** searches and returns **similar embeddings** (documents or passages).
5. The original prompt + retrieved context = **augmented prompt**.
6. This augmented prompt is sent to the **generator model (LLM)**.
7. The **LLM generates a response** using both the original input and retrieved knowledge.

---

## 💼 Business Applications of RAG

### ✅ 1. **Question Answering Systems**

- Use internal documents or manuals to answer employee/customer queries with accuracy.

### ✅ 2. **Customer Support Bots**

- Provide precise, company-specific answers without retraining the model.

### ✅ 3. **Search Augmentation**

- Replace keyword search with **semantic search** for better information retrieval.

### ✅ 4. **Enterprise Knowledge Assistants**

- Train assistants on company SOPs, policy documents, or internal wikis.

### ✅ 5. **Content Generation**

- Use RAG to create reports, summaries, or marketing material with factual backing.

---

## 🔧 Amazon Bedrock Knowledge Bases

**Amazon Bedrock Knowledge Bases** is AWS's fully managed RAG solution that provides end-to-end workflow support for connecting foundation models and agents to your company's private data sources.

### 🎯 Key Features

#### **1. Fully Managed RAG Workflow**
- **Complete end-to-end solution** from data ingestion to retrieval and prompt augmentation
- **Built-in session context management** and source attribution
- **No custom integrations** needed - handles all data flows automatically
- **Single document support** - ask questions without setting up vector databases

#### **2. Secure Data Source Connections**

**Unstructured Data Sources:**
- Amazon S3, Confluence, Salesforce, SharePoint, Web Crawler
- **Programmatic document ingestion** for streaming data or unsupported sources
- **Automatic processing**: text extraction → embeddings → vector database storage

**Structured Data Sources:**
- **Natural Language to SQL** conversion for data warehouses and data lakes
- Query transactional details without moving data from source systems
- Direct connection to structured data stores for grounded responses

#### **3. Supported Vector Stores**
- Amazon Aurora
- Amazon OpenSearch Serverless
- Amazon Neptune Analytics (with GraphRAG)
- MongoDB
- Pinecone
- Redis Enterprise Cloud
- Amazon Kendra (hybrid search index)

#### **4. Advanced Customization Options**

**Multimodal Data Processing:**
- Parse images and visually rich documents (tables, charts, diagrams)
- Choose between **Bedrock Data Automation** or **foundation models** as parsers
- Extract meaningful insights from complex layouts

**Advanced Chunking Strategies:**
- **Semantic chunking** - content-aware splitting
- **Hierarchical chunking** - nested document structure
- **Fixed size chunking** - traditional approach
- **Custom chunking** - write your own Lambda functions
- **Framework integration** - LangChain and LlamaIndex support

**GraphRAG with Neptune Analytics:**
- Automatically creates **embeddings and graphs** linking related content
- Leverages content relationships for improved retrieval accuracy
- Provides more **comprehensive and explainable responses**

#### **5. Retrieval and Generation APIs**

**Retrieve API:**
- Fetch relevant results including **visual elements** (images, diagrams, charts, tables)
- Support for structured data from databases
- Apply **filters** to restrict results to relevant content

**RetrieveAndGenerate API:**
- Directly augments FM prompts with retrieved results
- Returns complete responses with context
- **Built-in reranker models** to improve document chunk relevance

#### **6. Source Attribution and Transparency**
- **Citations provided** for all retrieved information (including visuals)
- **Improves transparency** and minimizes hallucinations
- Full traceability from response back to source documents

### 💡 Business Benefits

- **Faster Time-to-Market**: Fully managed service eliminates infrastructure setup
- **Enhanced Accuracy**: Advanced retrieval techniques reduce hallucinations
- **Scalable Architecture**: Supports both small documents and enterprise data lakes
- **Security & Compliance**: Data stays within your AWS environment
- **Cost Effective**: Pay-per-use model with no infrastructure overhead

### 🔗 Integration with Bedrock Ecosystem

- **Seamless integration** with Amazon Bedrock Agents
- **Multiple foundation models** supported (Claude, Llama, Titan, etc.)
- **API-driven approach** for easy application integration
- **Workshop and training resources** available for hands-on learning


### 🛠️ Beyond RAG: Agents in Amazon Bedrock

- **Agents** extend RAG by orchestrating multi-step tasks (e.g., booking, data updates).
- Can **call APIs**, **ingest structured data**, and **generate custom logic**.
- Perfect for task automation like making a **scuba diving reservation** or processing a **purchase order**.

---

## 🚀 Summary

| Concept            | Description                                                     |
| ------------------ | --------------------------------------------------------------- |
| **RAG**            | Combines retrieval + generation to enhance accuracy and context |
| **Retriever**      | Finds relevant knowledge using vector similarity                |
| **Generator**      | LLM produces output using retrieved knowledge                   |
| **Business Use**   | Improves chatbots, search, Q&A, and automated workflows         |
| **AWS Tools**      | Amazon Bedrock, OpenSearch, pgvector, RDS, Redis, Agents        |
| **Bedrock KB**     | Fully managed RAG solution with end-to-end workflow support     |