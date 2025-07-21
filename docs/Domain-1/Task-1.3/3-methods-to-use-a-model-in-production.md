---
title: Methods to Use a Machine Learning Model in Production
description: Explore various methods for deploying and using machine learning models in production environments for the AWS AI Practitioner exam.
keywords:
  - Machine Learning
  - Model Deployment
  - Production
  - API Service
  - AWS
  - AI Practitioner
sidebar_position: 3
---

# Methods to Use a Machine Learning Model in Production

Once a model is trained and evaluated, the next step is to **deploy it into production** so applications can use it to make real-time or batch predictions.

There are several methods for using a model in production:

---

## ☁️ 1. Hosted (Managed) API Service

**What it is:**  
Cloud providers like AWS, Azure, and Google Cloud offer **fully managed services** that host your ML model and expose it as an API.

**How it works:**

- You upload the model.
- The platform handles hosting, scaling, and availability.
- You access it via a RESTful API.

**Examples:**

- **Amazon SageMaker Endpoint**
- **Google Vertex AI**
- **Azure Machine Learning Online Endpoint**

**Pros:**

- Easy to set up and maintain.
- Automatically scales to handle traffic.
- Integrated security and monitoring.

**Cons:**

- May be more expensive for high-volume traffic.
- Less control over infrastructure.

---

## 🖥️ 2. Self-Hosted API (Self-managed)

**What it is:**  
Amazon API Gateway can act as the interface between clients and backend services by forwarding requests to an AWS Lambda function that runs the machine learning model. Typically, the inference code and model files are packaged and deployed as a Docker container. Docker containers are highly versatile and can run on any platform with a container runtime, including AWS services like AWS Batch, Amazon ECS, Amazon EKS, AWS Lambda, and Amazon EC2.

**How it works:**

- Serialize the model (e.g., `.pkl`, `.pt`, `.onnx`, `.joblib`).
- Create an API server that loads the model and handles requests.
- Host it on AWS Batch, Amazon ECS, Amazon EKS, AWS Lambda, Amazon EC2, etc.

**Examples:**

- AWS API Gateway + AWS Lambda
- Docker container on AWS ECS or Kubernetes

**Pros:**

- Full control over the environment.
- Can be cost-effective for stable workloads.

**Cons:**

- Requires more DevOps knowledge.
- Must handle scaling, monitoring, and security manually.

---

## ⚙️ Summary Table

| Method                    | Real-Time? | Managed? | Use Case Examples                      | Tools/Platforms                         |
| ------------------------- | ---------- | -------- | -------------------------------------- | --------------------------------------- |
| Managed API Service       | ✅ Yes      | ✅ Yes    | Chatbots, fraud detection              | Amazon SageMaker, Azure ML, Vertex AI   |
| Self-Hosted API           | ✅ Yes      | ❌ No     | Custom apps, internal tools            | Flask, FastAPI, Docker, Kubernetes      |

---

## ✅ Choosing the Right Method

| If you...                                   | Then use...                               |
| ------------------------------------------- | ----------------------------------------- |
| Want quick and easy deployment              | Managed API Service (e.g., SageMaker)     |
| Need control over environment or cost       | Self-Hosted API (e.g., Docker)    |