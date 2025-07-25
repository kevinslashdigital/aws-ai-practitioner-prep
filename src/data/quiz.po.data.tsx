export const quiz = {
  quizTitle: "Essential GenAI Concepts for Product Owners (PO)",
  quizSynopsis:
    "Test your understanding of the most important Generative AI (GenAI) concepts every Product Owner should know. These questions are designed to help you confidently lead, communicate, and make decisions in GenAI projects.",
  progressBarColor: "#9de1f6",
  nrOfQuestions: "27",
  questions: [
    {
      question:
        "What is the primary difference between traditional product development and GenAI projects that Product Owners should be aware of?",
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
      explanation:
        "Unlike traditional software, GenAI projects involve experimentation, iteration, and probabilistic outputs.",
      point: "10"
    },
    {
      question:
        "In the context of GenAI, what is a 'token'?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "A chunk of characters that models use to process text",
        "A security credential for AWS services",
        "A type of neural network",
        "A user authentication method"
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "Correct! Tokens are chunks of text that LLMs process.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: A chunk of characters that models use to process text.",
      explanation:
        "LLMs read and generate text in tokens, not words. Token limits affect cost and model performance.",
      point: "10"
    },
    {
      question:
        "Which of the following best describes 'prompt engineering' in GenAI projects?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Writing code to deploy AI models",
        "Designing the input instructions to guide model outputs",
        "Optimizing cloud infrastructure",
        "Labeling training data"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct! Prompt engineering is about crafting effective prompts to guide the model.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: Designing the input instructions to guide model outputs.",
      explanation:
        "Prompt engineering is a key part of GenAI product UX and helps get better results from LLMs.",
      point: "10"           
    },
    {
      question:
        "What is the main purpose of vector embeddings and vector databases (like Pinecone or FAISS) in GenAI solutions?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "To store mathematical representations of content for retrieval and context",
        "To visualize AI outputs",
        "To encrypt user data",
        "To deploy models at scale"
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "Correct! Embeddings and vector DBs enable RAG and context-aware answers.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: To store mathematical representations of content for retrieval and context.",
      explanation:
        "Embeddings let GenAI systems search and use relevant company data to generate better answers.",
      point: "10"
    },
    {
      question:
        "Why is it important for Product Owners to understand inference parameters like temperature, top-k, and top-p in GenAI models?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "They control the creativity and consistency of model outputs",
        "They determine the security of the model",
        "They set the model's training schedule",
        "They manage user authentication"
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "Correct! These parameters affect how creative or predictable the model's responses are.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: They control the creativity and consistency of model outputs.",
      explanation:
        "Understanding these helps POs set expectations for output style and quality.",
      point: "10"
    },
    {
      question:
        "As a PO, what is your most valuable contribution to a GenAI project?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Writing Python code for model training",
        "Defining user scenarios, evaluation criteria, and aligning GenAI capabilities with user value",
        "Choosing the cheapest model",
        "Managing cloud infrastructure"
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct! POs add value by aligning GenAI with user needs and business goals.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: Defining user scenarios, evaluation criteria, and aligning GenAI capabilities with user value.",
      explanation:
        "POs don't need to code, but must ensure GenAI delivers value, is evaluated well, and meets user needs.",
      point: "10"
    },
    {
      question:
        "Which of the following is a best practice for POs working on GenAI projects?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Treat early stages as a discovery phase and experiment with prompts and outputs",
        "Avoid user feedback until launch",
        "Rely only on deterministic outputs",
        "Ignore legal/privacy considerations"
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "Correct! Experimentation and iteration are key to GenAI project success.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: Treat early stages as a discovery phase and experiment with prompts and outputs.",
      explanation:
        "GenAI projects require experimentation, feedback, and iteration to succeed.",
      point: "10"
    },
    {
      question:
        "Which AWS service is commonly used to build, train, and deploy GenAI models at scale?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Amazon SageMaker",
        "Amazon S3",
        "AWS Lambda",
        "Amazon DynamoDB"
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "Correct! Amazon SageMaker is AWS’s primary service for machine learning and GenAI.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: Amazon SageMaker.",
      explanation:
        "Amazon SageMaker provides tools for building, training, and deploying GenAI and ML models at scale.",
      point: "10"
    },
    {
      question:
        "What is a key responsibility of a PO during GenAI model evaluation?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Defining clear evaluation criteria and collecting user feedback",
        "Tuning hyperparameters directly",
        "Labeling all training data",
        "Managing cloud costs"
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "Correct! POs must ensure GenAI models are evaluated against business needs and user value.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: Defining clear evaluation criteria and collecting user feedback.",
      explanation:
        "POs guide the evaluation process by focusing on user value, business goals, and actionable feedback.",
      point: "10"
    },
    {
      question:
        "In GenAI projects, what is the main purpose of a 'human-in-the-loop' (HITL) process?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "To allow humans to review and improve AI outputs",
        "To automate all decision-making",
        "To reduce project costs",
        "To eliminate the need for testing"
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "Correct! HITL ensures quality and accountability by involving humans in the loop.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: To allow humans to review and improve AI outputs.",
      explanation:
        "HITL processes let humans validate, correct, or approve GenAI outputs, improving reliability and trust.",
      point: "10"
    },
    {
      question:
        "What is the primary risk of using GenAI models with sensitive company data?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Potential data leakage or privacy breaches",
        "Improved data accuracy",
        "Lower cloud costs",
        "Faster model training"
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "Correct! Sensitive data can be exposed if not handled properly.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: Potential data leakage or privacy breaches.",
      explanation:
        "POs must ensure data privacy and compliance when using GenAI with sensitive information.",
      point: "10"
    },
    {
      question:
        "Which of the following best describes 'hallucination' in GenAI outputs?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "The model generates plausible but incorrect or fabricated information",
        "The model runs out of memory",
        "The model repeats the same answer",
        "The model predicts user emotions"
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "Correct! Hallucination means the model produces convincing but false outputs.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: The model generates plausible but incorrect or fabricated information.",
      explanation:
        "POs need to be aware of hallucinations and validate GenAI outputs for accuracy.",
      point: "10"
    },
    {
      question:
        "What is Retrieval-Augmented Generation (RAG) in GenAI solutions?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Combining LLMs with external data sources for more accurate answers",
        "A method for compressing model weights",
        "A way to reduce API costs",
        "A technique for model training"
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "Correct! RAG allows GenAI to use up-to-date or proprietary data.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: Combining LLMs with external data sources for more accurate answers.",
      explanation:
        "RAG architectures improve relevance and accuracy by retrieving context from external databases.",
      point: "10"
    },
    {
      question:
        "Why should POs involve stakeholders early and often in GenAI projects?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "To gather feedback and align expectations",
        "To avoid regulatory compliance",
        "To reduce the number of experiments",
        "To minimize documentation"
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "Correct! Early stakeholder involvement leads to better outcomes and fewer surprises.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: To gather feedback and align expectations.",
      explanation:
        "Frequent stakeholder input helps ensure GenAI projects deliver business value.",
      point: "10"
    },
    {
      question:
        "What is the impact of model bias in GenAI solutions?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "It can lead to unfair or inappropriate outputs",
        "It always improves accuracy",
        "It reduces project costs",
        "It eliminates the need for testing"
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "Correct! Model bias can result in harmful or non-inclusive outputs.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: It can lead to unfair or inappropriate outputs.",
      explanation:
        "POs must be aware of bias and work to mitigate it in GenAI applications.",
      point: "10"
    },
    {
      question:
        "Which metric is most relevant for evaluating the user experience of a GenAI-powered chatbot?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "User satisfaction score",
        "Model training loss",
        "Cloud infrastructure uptime",
        "Number of tokens processed"
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "Correct! User satisfaction is a key indicator of chatbot success.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: User satisfaction score.",
      explanation:
        "User-centric metrics should guide GenAI product evaluation.",
      point: "10"
    },
    {
      question:
        "What is a common pitfall when scoping GenAI MVPs (Minimum Viable Products)?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Trying to solve too many use cases at once",
        "Focusing only on user value",
        "Ignoring model cost",
        "Prioritizing explainability over functionality"
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "Correct! Narrow scope increases MVP success in GenAI projects.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: Trying to solve too many use cases at once.",
      explanation:
        "POs should define clear, focused MVPs to maximize learning and reduce risk.",
      point: "10"
    },
    {
      question:
        "Why is explainability important in GenAI product development?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "It helps users and stakeholders trust and understand model outputs",
        "It always increases model speed",
        "It eliminates the need for compliance checks",
        "It reduces the number of required prompts"
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "Correct! Explainability builds trust and supports responsible AI.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: It helps users and stakeholders trust and understand model outputs.",
      explanation:
        "POs should prioritize explainable GenAI solutions for transparency and adoption.",
      point: "10"
    },
    {
      question:
        "What does 'Generative AI' primarily refer to?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "AI that can generate new content such as text, images, or code",
        "AI that only analyzes existing data",
        "AI used for hardware design",
        "AI that manages databases"
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "Correct! Generative AI creates new content, not just analyzes data.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: AI that can generate new content such as text, images, or code.",
      explanation:
        "GenAI models like GPT-4 can create text, images, music, and more.",
      point: "10"
    },
    {
      question:
        "Which of the following is a common use case for GenAI?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Creating marketing copy automatically",
        "Sorting physical mail",
        "Building physical robots",
        "Managing network hardware"
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "Correct! GenAI is widely used for content generation, such as marketing copy.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: Creating marketing copy automatically.",
      explanation:
        "GenAI excels at generating human-like text for various business needs.",
      point: "10"
    },
    {
      question:
        "What is a 'prompt' in the context of GenAI?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "The input or instruction given to a GenAI model",
        "The model's output",
        "The training data",
        "The hardware used"
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "Correct! A prompt is the input or instruction provided to the model.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: The input or instruction given to a GenAI model.",
      explanation:
        "Prompts guide the model to generate relevant responses.",
      point: "10"
    },
    {
      question:
        "Why is user feedback important in GenAI projects?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "It helps improve prompt design and model outputs",
        "It is not necessary for GenAI",
        "It only affects hardware performance",
        "It slows down the project"
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "Correct! User feedback guides improvements and ensures outputs meet needs.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: It helps improve prompt design and model outputs.",
      explanation:
        "Iterative feedback helps tailor GenAI solutions to users.",
      point: "10"
    },
    {
      question:
        "Which of the following best describes 'training data' for GenAI models?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "The examples used to teach the model how to generate outputs",
        "The final product delivered to users",
        "The hardware used for computation",
        "The cost of using the model"
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "Correct! Training data consists of examples that help the model learn.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: The examples used to teach the model how to generate outputs.",
      explanation:
        "Quality training data is critical for effective model performance.",
      point: "10"
    },
    {
      question:
        "What is 'temperature' in GenAI model settings?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "A parameter that controls randomness and creativity of outputs",
        "The actual heat of the server",
        "The speed of the model",
        "The number of users"
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "Correct! Temperature controls how creative or predictable the model's outputs are.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: A parameter that controls randomness and creativity of outputs.",
      explanation:
        "Higher temperature = more creative, lower = more predictable.",
      point: "10"
    },
    {
      question:
        "Which is a potential risk of using GenAI in business?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Generating inaccurate or biased information",
        "Guaranteed perfect accuracy",
        "No need for human review",
        "Unlimited free usage"
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "Correct! GenAI can sometimes generate incorrect or biased content.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: Generating inaccurate or biased information.",
      explanation:
        "POs must validate outputs and be aware of risks.",
      point: "10"
    },
    {
      question:
        "What is 'fine-tuning' in GenAI?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Adjusting a pre-trained model with additional data to improve performance",
        "Changing the hardware",
        "Writing user documentation",
        "Upgrading the operating system"
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "Correct! Fine-tuning adapts a model to specific needs using extra data.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: Adjusting a pre-trained model with additional data to improve performance.",
      explanation:
        "Fine-tuning customizes GenAI models for particular use cases.",
      point: "10"
    },
    {
      question:
        "Why should POs understand the cost structure of GenAI services?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "To manage project budgets and avoid unexpected expenses",
        "Because it affects only the IT team",
        "Because GenAI is always free",
        "Because cost has no impact on business"
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "Correct! Understanding costs helps POs plan and manage resources.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: To manage project budgets and avoid unexpected expenses.",
      explanation:
        "GenAI costs can scale with usage; POs must plan accordingly.",
      point: "10"
    },
    {
      question:
        "What is a 'token limit' in GenAI models?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "The maximum amount of text the model can process at once",
        "The number of users allowed",
        "The number of servers used",
        "The number of models available"
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "Correct! Token limits define the maximum input/output size for the model.",
      messageForIncorrectAnswer: "Incorrect. The correct answer is: The maximum amount of text the model can process at once.",
      explanation:
        "Token limits affect prompt size, response length, and cost.",
      point: "10"
    }
  ]
};