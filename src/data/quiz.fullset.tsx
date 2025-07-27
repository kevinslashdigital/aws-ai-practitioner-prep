export const quiz = {
  quizTitle: "Essential GenAI Concepts for Developer",
  quizSynopsis:
    "Test your understanding of the most important Generative AI (GenAI) concepts every Product Owner should know. These questions are designed to help you confidently lead, communicate, and make decisions in GenAI projects.",
  progressBarColor: "#9de1f6",
  nrOfQuestions: "92",
  questions: [
    {
      question: "What is the primary difference between traditional product development and GenAI projects that Product Owners should be aware of?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "GenAI projects are deterministic and always produce the same output",
        "Traditional projects focus on logic and rules; GenAI is probabilistic and experimental",
        "GenAI projects do not require user feedback",
        "Traditional projects always use AI models"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct! GenAI projects are probabilistic and experimental, requiring a different mindset.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: Traditional projects focus on logic and rules; GenAI is probabilistic and experimental.",
      explanation: "Unlike traditional software, GenAI projects involve experimentation, iteration, and probabilistic outputs.",
      point: "10"
    },
    {
      question: "Which of the following best describes Artificial Intelligence (AI)?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "A field focused on solving cognitive problems and deriving meaning from data",
        "A type of hardware device",
        "A method for data storage",
        "A set of rules hard-coded by humans"
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "Correct! AI is about solving cognitive problems and deriving meaning from data.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: A field focused on solving cognitive problems and deriving meaning from data.",
      explanation: "AI aims to create self-learning systems that derive meaning from data.",
      point: "10"
    },
    {
      question: "What is a neural network?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "A type of database",
        "A group of connected nodes that process data, inspired by the human brain",
        "A hardware device",
        "A programming language"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct! Neural networks are groups of connected nodes inspired by the human brain.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: A group of connected nodes that process data, inspired by the human brain.",
      explanation: "Neural networks are used for tasks like image recognition and language translation.",
      point: "10"
    },
    {
      question: "Deep learning is a type of:",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Data storage",
        "Machine learning that uses neural networks with many layers",
        "Cloud computing",
        "Programming paradigm"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct! Deep learning uses neural networks with multiple layers.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: Machine learning that uses neural networks with many layers.",
      explanation: "Deep learning is a subset of ML that uses neural networks with many layers.",
      point: "10"
    },
    {
      question: "What is computer vision used for?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Writing code",
        "Helping machines 'see' and understand images or videos",
        "Storing images",
        "Encrypting data"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct! Computer vision enables machines to interpret images and videos.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: Helping machines 'see' and understand images or videos.",
      explanation: "Computer vision is used in facial recognition, security cameras, and self-driving cars.",
      point: "10"
    },
    {
      question: "What is natural language processing (NLP)?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "A type of machine learning that deals with human language",
        "A type of computer vision",
        "A type of data storage",
        "A type of programming language"
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "Correct! NLP is a type of machine learning that processes human language.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: A type of machine learning that deals with human language.",
      explanation: "NLP enables machines to understand, interpret, and generate human language.",
      point: "10"
    },
    {
      question: "Which is the broadest field?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Deep Learning",
        "Machine Learning",
        "Artificial Intelligence",
        "Data Labeling"
      ],
      correctAnswer: "3",
      messageForCorrectAnswer: "Correct! AI is the broadest, with ML as a subset, and Deep Learning as a subset of ML.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: Artificial Intelligence.",
      explanation: "AI encompasses ML and Deep Learning as subfields.",
      point: "10"
    },
    {
      question: "What is the main difference between ML and Deep Learning?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "ML is always rule-based",
        "Deep Learning uses neural networks with many layers",
        "ML does not use data",
        "Deep Learning does not require training"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct! Deep Learning is a subset of ML that uses neural networks with many layers.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: Deep Learning uses neural networks with many layers.",
      explanation: "Deep Learning is a specialized area within ML that uses multi-layered neural networks.",
      point: "10"
    },
    {
      question: "Which inference type in SageMaker is best for low-latency, real-time predictions?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Batch Inference",
        "Real-Time Inference",
        "Serverless Inference",
        "Asynchronous Inference"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct! Real-time inference is ideal for online, low-latency requirements.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: Real-Time Inference.",
      explanation: "Real-time inference is used for immediate prediction needs.",
      point: "10"
    },
    {
      question: "What type of data has each data point labeled with an answer or tag?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Unlabeled Data",
        "Tabular Data",
        "Labeled Data",
        "Unstructured Data"
      ],
      correctAnswer: "3",
      messageForCorrectAnswer: "Correct! Labeled data means each data point has an answer or tag.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: Labeled Data.",
      explanation: "Labeled data is essential for supervised learning.",
      point: "10"
    },
    {
      question: "Which type of machine learning learns from labeled data?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Reinforcement Learning",
        "Unsupervised Learning",
        "Supervised Learning",
        "Deep Learning"
      ],
      correctAnswer: "3",
      messageForCorrectAnswer: "Correct! Supervised learning uses labeled data to learn the relationship between input and output.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: Supervised Learning.",
      explanation: "Supervised learning is one of the main types of ML.",
      point: "10"
    },
    {
      question: "In which business scenario is AI/ML most likely to add value?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Automating repetitive, data-intensive tasks",
        "Simple rule-based logic",
        "Manual paperwork",
        "Tasks with no data"
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "Correct! AI/ML excels at automating repetitive, data-intensive tasks and uncovering patterns in large datasets.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: Automating repetitive, data-intensive tasks.",
      explanation: "AI/ML is best for tasks with lots of data and repetitive patterns.",
      point: "10"
    },
    {
      question: "Which AWS service is primarily used for building, training, and deploying machine learning models?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Amazon Rekognition",
        "Amazon SageMaker",
        "AWS Lambda",
        "Amazon Polly"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct! SageMaker is AWS's managed service for end-to-end ML workflows.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: Amazon SageMaker.",
      explanation: "SageMaker provides tools for the entire ML lifecycle.",
      point: "10"
    },
    {
      question: "What is the main purpose of embeddings in GenAI?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Compressing images",
        "Representing text or data as vectors for similarity and search",
        "Encrypting data",
        "Generating random numbers"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct! Embeddings turn words, sentences, or images into vectors for efficient comparison and retrieval.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: Representing text or data as vectors for similarity and search.",
      explanation: "Embeddings enable semantic search and similarity matching.",
      point: "10"
    },
    {
      question: "Which of the following is an example of unstructured data?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "A CSV file with labeled columns",
        "An image file",
        "A SQL database table",
        "A spreadsheet with formulas"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct! Images, text, and audio are examples of unstructured data.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: An image file.",
      explanation: "Unstructured data doesn't have a predefined format or schema.",
      point: "10"
    },
    {
      question: "What is the primary goal of supervised learning?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Find patterns in unlabeled data",
        "Learn from labeled data to predict outcomes",
        "Generate synthetic data",
        "Reduce computation costs"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct! Supervised learning uses labeled data to train models for prediction.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: Learn from labeled data to predict outcomes.",
      explanation: "Supervised learning maps inputs to known outputs.",
      point: "10"
    },
    {
      question: "Which AWS service provides pre-trained AI services for vision, speech, language, and more?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Amazon EC2",
        "Amazon Rekognition",
        "Amazon SageMaker",
        "AWS Bedrock"
      ],
      correctAnswer: "4",
      messageForCorrectAnswer: "Correct! AWS Bedrock provides access to pre-trained foundation models for various AI tasks.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: AWS Bedrock.",
      explanation: "Bedrock offers foundation models from various providers.",
      point: "10"
    },
    {
      question: "What is reinforcement learning?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Learning from labeled data",
        "Learning by trial and error, receiving rewards or penalties",
        "Learning from unlabeled data",
        "Learning by copying other models"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct! Reinforcement learning is based on agents learning optimal actions through rewards and penalties.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: Learning by trial and error, receiving rewards or penalties.",
      explanation: "RL agents learn through interaction with an environment.",
      point: "10"
    },
    {
      question: "What is the main advantage of serverless inference in AWS?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Always-on compute",
        "No need to manage servers, pay only for usage",
        "Requires manual scaling",
        "Only works for batch jobs"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct! Serverless inference handles scaling automatically and charges only for compute used.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: No need to manage servers, pay only for usage.",
      explanation: "Serverless inference scales to zero when not in use.",
      point: "10"
    },
    {
      question: "Which of the following is NOT a typical use case for generative AI?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Image generation",
        "Text summarization",
        "Predicting stock prices using historical data",
        "Audio synthesis"
      ],
      correctAnswer: "3",
      messageForCorrectAnswer: "Correct! Predicting stock prices is a classic ML regression task, not generative AI.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: Predicting stock prices using historical data.",
      explanation: "Stock price prediction is predictive analytics, not content generation.",
      point: "10"
    },
    {
      question: "What is the main function of Amazon Comprehend?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Speech synthesis",
        "Natural language processing (NLP) tasks like sentiment analysis and entity recognition",
        "Image recognition",
        "Data storage"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct! Amazon Comprehend is used for NLP tasks such as extracting sentiment and entities from text.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: Natural language processing (NLP) tasks like sentiment analysis and entity recognition.",
      explanation: "Comprehend analyzes text to extract insights and meaning.",
      point: "10"
    },
    {
      question: "Which of the following best describes prompt engineering?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Writing code for data pipelines",
        "Crafting effective input instructions for GenAI models to achieve desired outputs",
        "Training neural networks",
        "Encrypting model parameters"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct! Prompt engineering is about designing inputs to guide GenAI models.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: Crafting effective input instructions for GenAI models to achieve desired outputs.",
      explanation: "Prompt engineering optimizes how we communicate with AI models.",
      point: "10"
    },
    {
      question: "What is a token in the context of generative AI?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "A security credential",
        "The smallest unit of text that a model processes",
        "A type of neural network",
        "A data storage format"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct! Tokens are the basic units of text that language models process.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: The smallest unit of text that a model processes.",
      explanation: "Tokens can be words, subwords, or characters depending on the tokenization method.",
      point: "10"
    },
    {
      question: "What is chunking in the context of RAG (Retrieval Augmented Generation)?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Dividing large documents into smaller, manageable pieces for processing",
        "Combining multiple models",
        "Encrypting data",
        "Compressing images"
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "Correct! Chunking breaks down large documents into smaller pieces for better retrieval and processing.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: Dividing large documents into smaller, manageable pieces for processing.",
      explanation: "Chunking enables efficient search and retrieval in RAG systems.",
      point: "10"
    },
    {
      question: "Which AWS service is best for document analysis and text extraction?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Amazon Rekognition",
        "Amazon Textract",
        "Amazon Polly",
        "Amazon Transcribe"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct! Amazon Textract extracts text and data from documents.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: Amazon Textract.",
      explanation: "Textract can extract text, forms, and tables from various document formats.",
      point: "10"
    },
    {
      question: "What is the primary purpose of fine-tuning a foundation model?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "To reduce model size",
        "To adapt the model to specific tasks or domains",
        "To increase training speed",
        "To reduce costs"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct! Fine-tuning adapts pre-trained models to specific use cases.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: To adapt the model to specific tasks or domains.",
      explanation: "Fine-tuning leverages pre-trained knowledge for specialized applications.",
      point: "10"
    },
    {
      question: "Which type of learning finds patterns in data without labels?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Supervised Learning",
        "Unsupervised Learning",
        "Reinforcement Learning",
        "Deep Learning"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct! Unsupervised learning discovers patterns in unlabeled data.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: Unsupervised Learning.",
      explanation: "Unsupervised learning includes clustering and dimensionality reduction.",
      point: "10"
    },
    {
      question: "What is the main advantage of using pre-trained models?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "They are always more accurate",
        "They reduce training time and computational resources",
        "They are free to use",
        "They work for all use cases"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct! Pre-trained models save time and resources by leveraging existing knowledge.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: They reduce training time and computational resources.",
      explanation: "Pre-trained models provide a head start with learned features.",
      point: "10"
    },
    {
      question: "Which AWS service is used for speech-to-text conversion?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Amazon Polly",
        "Amazon Transcribe",
        "Amazon Lex",
        "Amazon Comprehend"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct! Amazon Transcribe converts speech to text.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: Amazon Transcribe.",
      explanation: "Transcribe provides automatic speech recognition capabilities.",
      point: "10"
    },
    {
      question: "What is the primary concern with AI hallucinations?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "High computational costs",
        "Models generating false or misleading information",
        "Slow processing speed",
        "Large model size"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct! Hallucinations refer to AI models generating false or misleading information.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: Models generating false or misleading information.",
      explanation: "Hallucinations can lead to misinformation and unreliable outputs.",
      point: "10"
    },
    {
      question: "Which of the following is a key principle of responsible AI?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Maximizing profits",
        "Ensuring fairness and avoiding bias",
        "Using the largest possible models",
        "Minimizing human oversight"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct! Responsible AI emphasizes fairness, transparency, and bias mitigation.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: Ensuring fairness and avoiding bias.",
      explanation: "Responsible AI focuses on ethical and fair AI development and deployment.",
      point: "10"
    },
    {
      question: "What is the purpose of a vector database in AI applications?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Storing traditional relational data",
        "Storing and searching high-dimensional vectors efficiently",
        "Compressing images",
        "Managing user authentication"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct! Vector databases are optimized for storing and searching embeddings.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: Storing and searching high-dimensional vectors efficiently.",
      explanation: "Vector databases enable semantic search and similarity matching.",
      point: "10"
    },
    {
      question: "Which AWS service provides text-to-speech capabilities?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Amazon Transcribe",
        "Amazon Polly",
        "Amazon Lex",
        "Amazon Comprehend"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct! Amazon Polly converts text to lifelike speech.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: Amazon Polly.",
      explanation: "Polly offers various voices and languages for speech synthesis.",
      point: "10"
    },
    {
      question: "What is the main benefit of using RAG (Retrieval Augmented Generation)?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Reducing model size",
        "Combining retrieval of relevant information with text generation",
        "Increasing training speed",
        "Eliminating the need for prompts"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct! RAG combines information retrieval with generation for more accurate responses.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: Combining retrieval of relevant information with text generation.",
      explanation: "RAG helps models access up-to-date information and reduce hallucinations.",
      point: "10"
    },
    {
      question: "Which AWS service is primarily used for image and video analysis?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Amazon Comprehend",
        "Amazon Rekognition",
        "Amazon Textract",
        "Amazon Polly"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct! Amazon Rekognition provides image and video analysis capabilities.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: Amazon Rekognition.",
      explanation: "Rekognition can detect objects, faces, text, and activities in images and videos.",
      point: "10"
    },
    {
      question: "What is bias in the context of AI models?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "A preference for certain outcomes or groups over others",
        "A type of neural network architecture",
        "A method for data compression",
        "A security vulnerability"
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "Correct! Bias in AI refers to unfair preferences or discrimination in model outputs.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: A preference for certain outcomes or groups over others.",
      explanation: "AI bias can lead to unfair treatment of different groups or individuals.",
      point: "10"
    },
    {
      question: "Which of the following is a common prompt engineering technique?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Few-shot learning with examples",
        "Increasing model parameters",
        "Reducing training data",
        "Using smaller models"
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "Correct! Few-shot learning provides examples in prompts to guide model behavior.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: Few-shot learning with examples.",
      explanation: "Few-shot prompting helps models understand the desired output format and style.",
      point: "10"
    },
    {
      question: "What is the primary function of Amazon Lex?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Image recognition",
        "Building conversational interfaces (chatbots)",
        "Text-to-speech conversion",
        "Document analysis"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct! Amazon Lex is used for building conversational interfaces and chatbots.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: Building conversational interfaces (chatbots).",
      explanation: "Lex provides automatic speech recognition and natural language understanding.",
      point: "10"
    },
    {
      question: "What does model explainability refer to?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "The ability to understand how a model makes decisions",
        "The speed of model training",
        "The size of the model",
        "The accuracy of predictions"
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "Correct! Explainability refers to understanding how AI models make their decisions.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: The ability to understand how a model makes decisions.",
      explanation: "Explainable AI helps build trust and enables better decision-making.",
      point: "10"
    },
    {
      question: "Which type of data is best suited for time-series analysis?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Static images",
        "Data points collected over time with timestamps",
        "Categorical labels",
        "Text documents"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct! Time-series data consists of data points indexed by time.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: Data points collected over time with timestamps.",
      explanation: "Time-series analysis is used for forecasting and trend analysis.",
      point: "10"
    },
    {
      question: "What is the main purpose of data governance in AI projects?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Reducing computational costs",
        "Ensuring data quality, security, and compliance",
        "Increasing model accuracy",
        "Speeding up training"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct! Data governance ensures proper management, quality, and compliance of data.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: Ensuring data quality, security, and compliance.",
      explanation: "Good data governance is essential for reliable and ethical AI systems.",
      point: "10"
    },
    {
      question: "Which AWS service helps detect fraudulent activities?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Amazon Personalize",
        "Amazon Fraud Detector",
        "Amazon Kendra",
        "Amazon Forecast"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct! Amazon Fraud Detector uses ML to identify potentially fraudulent activities.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: Amazon Fraud Detector.",
      explanation: "Fraud Detector can detect online fraud, fake accounts, and suspicious activities.",
      point: "10"
    },
    {
      question: "What is the difference between classification and regression in ML?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Classification predicts categories, regression predicts continuous values",
        "Classification is faster than regression",
        "Classification uses more data than regression",
        "Classification is only for text data"
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "Correct! Classification predicts discrete categories while regression predicts continuous numerical values.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: Classification predicts categories, regression predicts continuous values.",
      explanation: "Classification outputs discrete labels, regression outputs numerical predictions.",
      point: "10"
    },
    {
      question: "What is the primary benefit of using foundation models?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "They are always free to use",
        "They provide a strong starting point for various tasks through pre-training",
        "They require no fine-tuning",
        "They work only for text generation"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct! Foundation models are pre-trained on large datasets and can be adapted for various tasks.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: They provide a strong starting point for various tasks through pre-training.",
      explanation: "Foundation models leverage large-scale pre-training for transfer learning.",
      point: "10"
    },
    {
      question: "Which metric is commonly used to evaluate classification model performance?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Mean Squared Error",
        "Accuracy",
        "Root Mean Square Error",
        "Mean Absolute Error"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct! Accuracy measures the percentage of correct predictions in classification.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: Accuracy.",
      explanation: "Accuracy is the ratio of correct predictions to total predictions.",
      point: "10"
    },
    {
      question: "What is the primary function of Amazon Kendra?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Image recognition",
        "Intelligent search service",
        "Speech synthesis",
        "Fraud detection"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct! Amazon Kendra is an intelligent search service powered by machine learning.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: Intelligent search service.",
      explanation: "Kendra provides accurate and relevant search results from various data sources.",
      point: "10"
    },
    {
      question: "Which AWS service provides personalized recommendations?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Amazon Personalize",
        "Amazon Forecast",
        "Amazon Comprehend",
        "Amazon Textract"
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "Correct! Amazon Personalize creates personalized recommendations for users.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: Amazon Personalize.",
      explanation: "Personalize uses ML to deliver individualized recommendations in real-time.",
      point: "10"
    },
    {
      question: "What is the main security consideration when deploying AI models?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Model size",
        "Data privacy and protection",
        "Training speed",
        "User interface design"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct! Data privacy and protection are critical security considerations for AI deployments.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: Data privacy and protection.",
      explanation: "AI systems must protect sensitive data and comply with privacy regulations.",
      point: "10"
    },
    {
      question: "Which of the following is a benefit of human-centered AI design?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Reduced computational costs",
        "Better user trust and adoption",
        "Faster training times",
        "Smaller model sizes"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct! Human-centered design improves user trust and adoption of AI systems.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: Better user trust and adoption.",
      explanation: "Human-centered design focuses on user needs and builds more trustworthy AI systems.",
      point: "10"
    },
    {
      question: "What is the purpose of model monitoring in production?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "To reduce storage costs",
        "To detect performance degradation and data drift",
        "To increase model size",
        "To speed up inference"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct! Model monitoring helps detect when model performance degrades or data changes.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: To detect performance degradation and data drift.",
      explanation: "Monitoring ensures models continue to perform well over time.",
      point: "10"
    },
    {
      question: "Which AWS service is used for language translation?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Amazon Comprehend",
        "Amazon Translate",
        "Amazon Polly",
        "Amazon Lex"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct! Amazon Translate provides neural machine translation services.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: Amazon Translate.",
      explanation: "Translate supports real-time and batch translation across many languages.",
      point: "10"
    },
    {
      question: "What is data lineage in the context of AI governance?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "The size of the dataset",
        "Tracking the origin and flow of data through systems",
        "The speed of data processing",
        "The format of data storage"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct! Data lineage tracks how data moves and transforms through systems.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: Tracking the origin and flow of data through systems.",
      explanation: "Data lineage is essential for compliance, debugging, and understanding data quality.",
      point: "10"
    },
    {
      question: "Which of the following is a key business metric for measuring AI ROI?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Model accuracy only",
        "Cost savings and revenue generation",
        "Number of parameters",
        "Training time"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct! Business value is measured through cost savings, revenue generation, and efficiency gains.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: Cost savings and revenue generation.",
      explanation: "AI ROI should be measured in business terms, not just technical metrics.",
      point: "10"
    },
    {
      question: "What is the main purpose of A/B testing in AI applications?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "To reduce model size",
        "To compare the performance of different models or approaches",
        "To increase training speed",
        "To compress data"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct! A/B testing compares different models or approaches to determine which performs better.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: To compare the performance of different models or approaches.",
      explanation: "A/B testing helps make data-driven decisions about model deployment.",
      point: "10"
    },
    {
      question: "Which of the following is a common challenge in AI model deployment?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Model drift and performance degradation over time",
        "Models being too accurate",
        "Having too much training data",
        "Models being too fast"
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "Correct! Model drift occurs when real-world data changes from training data, causing performance degradation.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: Model drift and performance degradation over time.",
      explanation: "Model drift is a common challenge requiring ongoing monitoring and retraining.",
      point: "10"
    },
    {
      question: "What is the primary benefit of using ensemble methods in ML?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Reducing training time",
        "Improving prediction accuracy by combining multiple models",
        "Reducing data requirements",
        "Simplifying model interpretation"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct! Ensemble methods combine multiple models to achieve better performance than individual models.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: Improving prediction accuracy by combining multiple models.",
      explanation: "Ensemble methods like random forests and boosting often outperform single models.",
      point: "10"
    },
    {
      question: "Which regulatory framework is most relevant for AI systems handling personal data in Europe?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "HIPAA",
        "GDPR",
        "SOX",
        "PCI DSS"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct! GDPR (General Data Protection Regulation) governs personal data processing in Europe.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: GDPR.",
      explanation: "GDPR has specific requirements for automated decision-making and AI systems.",
      point: "10"
    },
    {
      question: "What is the difference between precision and recall in ML evaluation?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Precision measures true positives/predicted positives, recall measures true positives/actual positives",
        "Precision is for regression, recall is for classification",
        "Precision measures speed, recall measures accuracy",
        "They are the same metric"
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "Correct! Precision focuses on the accuracy of positive predictions, while recall focuses on finding all actual positives.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: Precision measures true positives/predicted positives, recall measures true positives/actual positives.",
      explanation: "Precision and recall provide different perspectives on model performance.",
      point: "10"
    },
    {
      question: "Which of the following is a key consideration for ethical AI development?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Maximizing model complexity",
        "Ensuring transparency and accountability",
        "Using the most data possible",
        "Minimizing human involvement"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct! Ethical AI requires transparency, accountability, and consideration of societal impact.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: Ensuring transparency and accountability.",
      explanation: "Ethical AI development prioritizes fairness, transparency, and responsible use.",
      point: "10"
    },
    {
      question: "What is the main purpose of feature engineering in ML?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "To reduce model size",
        "To create or select the most relevant input variables for the model",
        "To increase training speed",
        "To visualize data"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct! Feature engineering involves creating and selecting the most informative input variables.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: To create or select the most relevant input variables for the model.",
      explanation: "Good features are crucial for model performance and interpretability.",
      point: "10"
    },
    {
      question: "Which AWS service is best for time-series forecasting?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Amazon Personalize",
        "Amazon Forecast",
        "Amazon Comprehend",
        "Amazon Rekognition"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct! Amazon Forecast is specifically designed for time-series forecasting.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: Amazon Forecast.",
      explanation: "Forecast uses ML to generate accurate predictions for time-series data.",
      point: "10"
    },
    {
      question: "What is the primary goal of data anonymization in AI projects?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "To reduce data size",
        "To protect individual privacy while preserving data utility",
        "To improve model accuracy",
        "To speed up processing"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct! Data anonymization removes or obscures personally identifiable information while maintaining data usefulness.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: To protect individual privacy while preserving data utility.",
      explanation: "Anonymization helps comply with privacy regulations while enabling AI development.",
      point: "10"
    },
    {
      question: "What is chain-of-thought prompting?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "A method to reduce prompt length",
        "A technique that encourages models to show their reasoning process step-by-step",
        "A way to encrypt prompts",
        "A method to speed up inference"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct! Chain-of-thought prompting helps models break down complex problems into reasoning steps.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: A technique that encourages models to show their reasoning process step-by-step.",
      explanation: "Chain-of-thought prompting improves performance on complex reasoning tasks.",
      point: "10"
    },
    {
      question: "What is overfitting in machine learning?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "When a model performs well on training data but poorly on new data",
        "When a model trains too quickly",
        "When a model uses too little data",
        "When a model is too simple"
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "Correct! Overfitting occurs when a model memorizes training data but fails to generalize.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: When a model performs well on training data but poorly on new data.",
      explanation: "Overfitting is a common problem that reduces model generalization.",
      point: "10"
    },
    {
      question: "What is the purpose of cross-validation in ML?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "To increase training speed",
        "To assess model performance and reduce overfitting",
        "To reduce data requirements",
        "To compress models"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct! Cross-validation helps evaluate model performance and detect overfitting.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: To assess model performance and reduce overfitting.",
      explanation: "Cross-validation provides more reliable estimates of model performance.",
      point: "10"
    },
    {
      question: "Which of the following is a sign of poor data quality?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Large dataset size",
        "Missing values and inconsistent formats",
        "High dimensionality",
        "Multiple data sources"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct! Missing values and inconsistent formats indicate poor data quality.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: Missing values and inconsistent formats.",
      explanation: "Data quality issues can significantly impact model performance.",
      point: "10"
    },
    {
      question: "What is the main advantage of edge computing for AI applications?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Higher accuracy",
        "Reduced latency and improved privacy",
        "Larger model capacity",
        "Better training performance"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct! Edge computing reduces latency and keeps data local for privacy.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: Reduced latency and improved privacy.",
      explanation: "Edge computing brings AI processing closer to data sources.",
      point: "10"
    },
    {
      question: "What is underfitting in machine learning?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "When a model is too complex",
        "When a model is too simple to capture underlying patterns",
        "When training takes too long",
        "When data is too large"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct! Underfitting occurs when a model is too simple to learn the data patterns.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: When a model is too simple to capture underlying patterns.",
      explanation: "Underfitting results in poor performance on both training and test data.",
      point: "10"
    },
    {
      question: "Which technique is commonly used to handle imbalanced datasets?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Increasing model complexity",
        "SMOTE (Synthetic Minority Oversampling Technique)",
        "Reducing training time",
        "Using larger models"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct! SMOTE generates synthetic examples to balance class distributions.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: SMOTE (Synthetic Minority Oversampling Technique).",
      explanation: "SMOTE helps address class imbalance by creating synthetic minority class examples.",
      point: "10"
    },
    {
      question: "What is the primary purpose of data preprocessing?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "To increase data size",
        "To clean and prepare data for model training",
        "To reduce model complexity",
        "To speed up inference"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct! Data preprocessing cleans and transforms data for optimal model performance.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: To clean and prepare data for model training.",
      explanation: "Good preprocessing is essential for successful machine learning projects.",
      point: "10"
    },
    {
      question: "Which of the following is a multi-modal AI application?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Text-only chatbot",
        "Image captioning that combines vision and language",
        "Audio-only speech recognition",
        "Numerical data analysis"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct! Image captioning combines computer vision and natural language processing.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: Image captioning that combines vision and language.",
      explanation: "Multi-modal AI processes multiple types of data simultaneously.",
      point: "10"
    },
    {
      question: "What is the main benefit of transfer learning?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Reducing model size",
        "Leveraging knowledge from pre-trained models for new tasks",
        "Increasing training speed only",
        "Eliminating the need for data"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct! Transfer learning applies knowledge from one domain to improve performance in another.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: Leveraging knowledge from pre-trained models for new tasks.",
      explanation: "Transfer learning is especially useful when training data is limited.",
      point: "10"
    },
    {
      question: "Which metric is most appropriate for evaluating regression models?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Accuracy",
        "Mean Squared Error (MSE)",
        "Precision",
        "F1-score"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct! MSE measures the average squared difference between predicted and actual values.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: Mean Squared Error (MSE).",
      explanation: "MSE is a common metric for continuous prediction tasks.",
      point: "10"
    },
    {
      question: "What is the purpose of regularization in machine learning?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "To increase model complexity",
        "To prevent overfitting by adding penalties to model parameters",
        "To speed up training",
        "To reduce data requirements"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct! Regularization adds penalties to prevent overfitting.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: To prevent overfitting by adding penalties to model parameters.",
      explanation: "Regularization techniques like L1 and L2 help models generalize better.",
      point: "10"
    },
    {
      question: "Which of the following is a legal risk when deploying AI systems?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "High computational costs",
        "Liability for discriminatory or harmful AI decisions",
        "Slow inference speed",
        "Large model size"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct! Organizations can be held liable for discriminatory or harmful AI decisions.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: Liability for discriminatory or harmful AI decisions.",
      explanation: "Legal risks include discrimination, privacy violations, and safety concerns.",
      point: "10"
    },
    {
      question: "What is the F1-score in machine learning evaluation?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "The harmonic mean of precision and recall",
        "The arithmetic mean of accuracy and speed",
        "The ratio of true positives to false positives",
        "The total number of correct predictions"
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "Correct! F1-score balances precision and recall using their harmonic mean.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: The harmonic mean of precision and recall.",
      explanation: "F1-score is useful when you need to balance precision and recall.",
      point: "10"
    },
    {
      question: "Which technique helps prevent gradient vanishing in deep neural networks?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Using smaller learning rates",
        "Batch normalization",
        "Reducing model depth",
        "Using fewer parameters"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct! Batch normalization helps stabilize training and prevent gradient vanishing.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: Batch normalization.",
      explanation: "Batch normalization normalizes inputs to each layer, improving training stability.",
      point: "10"
    },
    {
      question: "What is the primary purpose of hyperparameter tuning?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "To reduce training time",
        "To optimize model performance by finding the best configuration",
        "To reduce model size",
        "To eliminate the need for validation data"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct! Hyperparameter tuning optimizes model configuration for best performance.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: To optimize model performance by finding the best configuration.",
      explanation: "Hyperparameters control the learning process and significantly impact performance.",
      point: "10"
    },
    {
      question: "Which of the following is an example of structured data?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Email text",
        "Database table with rows and columns",
        "Social media posts",
        "Audio recordings"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct! Database tables with defined schemas are structured data.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: Database table with rows and columns.",
      explanation: "Structured data has a predefined format and schema.",
      point: "10"
    },
    {
      question: "What is the main challenge with deploying large language models?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "They are too accurate",
        "High computational requirements and costs",
        "They train too quickly",
        "They require no maintenance"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct! Large language models require significant computational resources and infrastructure.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: High computational requirements and costs.",
      explanation: "LLMs need substantial compute power for both training and inference.",
      point: "10"
    },
    {
      question: "Which AWS service provides managed Jupyter notebooks for ML development?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Amazon EC2",
        "Amazon SageMaker Studio",
        "AWS Lambda",
        "Amazon S3"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct! SageMaker Studio provides managed Jupyter notebooks for ML development.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: Amazon SageMaker Studio.",
      explanation: "SageMaker Studio is an integrated development environment for machine learning.",
      point: "10"
    },
    {
      question: "What is the purpose of data augmentation in machine learning?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "To reduce data size",
        "To artificially increase dataset size and diversity",
        "To compress data",
        "To remove noise from data"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct! Data augmentation creates variations of existing data to increase dataset size.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: To artificially increase dataset size and diversity.",
      explanation: "Data augmentation helps improve model generalization and reduces overfitting.",
      point: "10"
    },
    {
      question: "Which of the following is a key consideration for AI model interpretability?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Model size only",
        "Understanding how the model makes decisions",
        "Training speed only",
        "Data storage requirements"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct! Interpretability focuses on understanding model decision-making processes.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: Understanding how the model makes decisions.",
      explanation: "Interpretable models help build trust and enable better decision-making.",
      point: "10"
    },
    {
      question: "What is the main purpose of dimensionality reduction techniques?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "To increase model complexity",
        "To reduce the number of features while preserving important information",
        "To increase training time",
        "To add more data"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct! Dimensionality reduction simplifies data while retaining key information.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: To reduce the number of features while preserving important information.",
      explanation: "Techniques like PCA help combat the curse of dimensionality.",
      point: "10"
    },
    {
      question: "Which of the following best describes zero-shot learning?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Learning with no data",
        "Performing tasks without specific training examples for those tasks",
        "Training with zero parameters",
        "Learning in zero time"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct! Zero-shot learning enables models to perform tasks they weren't explicitly trained on.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: Performing tasks without specific training examples for those tasks.",
      explanation: "Zero-shot learning leverages general knowledge to handle new tasks.",
      point: "10"
    },
    {
      question: "What is the primary benefit of using containerization for AI model deployment?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Increased model accuracy",
        "Consistent deployment across different environments",
        "Reduced training time",
        "Automatic hyperparameter tuning"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct! Containerization ensures consistent deployment across different environments.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: Consistent deployment across different environments.",
      explanation: "Containers package applications with their dependencies for reliable deployment.",
      point: "10"
    },
    {
      question: "Which metric is most suitable for evaluating models on imbalanced datasets?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Accuracy only",
        "Area Under the ROC Curve (AUC-ROC)",
        "Training time",
        "Model size"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct! AUC-ROC is less sensitive to class imbalance than accuracy.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: Area Under the ROC Curve (AUC-ROC).",
      explanation: "AUC-ROC evaluates model performance across all classification thresholds.",
      point: "10"
    },
    {
      question: "What is the main purpose of model versioning in MLOps?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "To reduce storage costs",
        "To track and manage different versions of models over time",
        "To speed up training",
        "To reduce model complexity"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct! Model versioning helps track changes and enables rollbacks when needed.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: To track and manage different versions of models over time.",
      explanation: "Versioning is essential for reproducibility and model governance.",
      point: "10"
    },
    {
      question: "Which of the following is a key principle of federated learning?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Centralizing all data in one location",
        "Training models across decentralized data sources without sharing raw data",
        "Using only cloud-based training",
        "Requiring high-speed internet connections"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct! Federated learning trains models on distributed data while preserving privacy.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: Training models across decentralized data sources without sharing raw data.",
      explanation: "Federated learning enables collaborative training while maintaining data privacy.",
      point: "10"
    },
    {
      question: "What is the primary goal of AutoML (Automated Machine Learning)?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "To eliminate human involvement entirely",
        "To automate the machine learning pipeline and make ML accessible to non-experts",
        "To reduce computational costs only",
        "To increase model complexity"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct! AutoML automates ML workflows to make them more accessible and efficient.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: To automate the machine learning pipeline and make ML accessible to non-experts.",
      explanation: "AutoML democratizes machine learning by automating complex processes.",
      point: "10"
    },
    {
      question: "Which of the following best describes the concept of 'AI agents' in multi-step tasks?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Simple rule-based systems",
        "AI systems that can plan, reason, and execute complex multi-step workflows",
        "Basic chatbots",
        "Data storage systems"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct! AI agents can autonomously plan and execute complex tasks requiring multiple steps.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: AI systems that can plan, reason, and execute complex multi-step workflows.",
      explanation: "AI agents combine reasoning, planning, and execution capabilities for complex tasks.",
      point: "10"
    },
    {
      question: "What is the main advantage of using cloud-based AI services over on-premises solutions?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Always cheaper",
        "Scalability, managed infrastructure, and reduced operational overhead",
        "Better security always",
        "Faster training always"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct! Cloud services offer scalability and reduce the burden of infrastructure management.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: Scalability, managed infrastructure, and reduced operational overhead.",
      explanation: "Cloud AI services provide flexibility and reduce the complexity of managing AI infrastructure.",
      point: "10"
    }
  ]
};