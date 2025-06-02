---
sidebar_position: 4
---

# 📦 AWS Services for Storing Embeddings in Vector Databases

When building Retrieval-Augmented Generation (RAG) or semantic search applications, storing and querying **embeddings** (numerical representations of text, images, or audio) is essential. AWS provides several services that support **vector search and storage**.

---

## 📌 1. Amazon OpenSearch Service

- ✅ **Built-in vector support** with **KNN (k-nearest neighbors)** indexing and **ANN (approximate nearest neighbor)** algorithms.
- ✅ Integrated **semantic search** using embeddings (e.g., from BERT or other LLMs).
- ✅ **OpenSearch Dashboards**: Visualize and explore search results.
- ✅ Serverless option: **OpenSearch Serverless with Vector Engine** for scalable embedding workloads.

**Use Case**:

- Implement RAG
- Build recommendation systems
- Power intelligent search for websites and apps

---

## 📌 2. Amazon RDS for PostgreSQL (with `pgvector` extension)

- ✅ Supports the **`pgvector`** extension to store, index, and search embeddings.
- ✅ Use SQL syntax to filter, search, and rank based on vector similarity.
- ✅ Fully managed PostgreSQL experience with automated backups and replication.

**Use Case**:

- Add vector search to existing relational apps.
- Perform similarity queries alongside structured data (e.g., customer profiles + embeddings).

---

## 3. 🔗 Amazon Aurora (PostgreSQL-compatible)

- ✅ Also supports the **`pgvector`** extension.
- ✅ Provides **higher performance and scalability** over standard PostgreSQL.
- ✅ Ideal for applications requiring **high throughput and low latency**.

**Use Case**:

- Scalable semantic search within high-traffic apps.
- Store large volumes of embeddings from documents, chat history, or logs.

---

## 4. 📄 Amazon DocumentDB (with MongoDB Compatibility)

- ✅ Document-oriented storage of embeddings in **JSON format**.
- ✅ Supports flexible schemas, making it easy to store varied embedding payloads.
- ✅ Can be paired with external libraries/tools for vector similarity search.

**Use Case**:

- Embed documents and perform vector-based search with minimal schema constraints.
- Store content and embeddings together in the same document.

---

## 5. 🗃️ Amazon Neptune

- ✅ Graph database service with support for **property graphs and RDF**.
- ✅ Integrated with **ML models for knowledge graph embeddings** (e.g., via SageMaker).
- ✅ Stores **relationship-based embeddings** (e.g., user A → likes → product B).

**Use Case**:

- Graph-based recommendation engines.
- Semantic reasoning over entity relationships (e.g., fraud detection, social graphs).

---

## 🚀 Summary Table

| AWS Service        | Vector Support        | Ideal Use Case                            |
| ------------------ | --------------------- | ----------------------------------------- |
| OpenSearch Service | Native KNN / ANN      | Semantic search, dashboards, RAG          |
| RDS PostgreSQL     | `pgvector` extension  | Combine SQL + vector search               |
| Aurora PostgreSQL  | `pgvector` + scalable | High-perf apps with vector needs          |
| Amazon Neptune     | Graph embeddings      | Entity relationships, knowledge graphs    |
| DocumentDB (Mongo) | JSON-based embeddings | Schema-flexible, doc-centric applications |

---

:::tip
You can generate embeddings using **Amazon SageMaker**, store them in these vector stores, and **query them via Amazon Bedrock Knowledge Bases** to build Retrieval-Augmented Generation (RAG) applications at scale.
:::
