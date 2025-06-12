export const quiz = {
  quizTitle: "AWS AI Practitioner Quiz",
  quizSynopsis:
    "Test your knowledge with this sample quiz covering all 5 domains of the AWS AI Practitioner exam. Each question is designed to reflect real exam topics, helping you identify your strengths and focus your study efforts. Take the quiz to boost your confidence and get one step closer to certification success!",
  progressBarColor: "#9de1f6",
  nrOfQuestions: "5",
  questions: [
    {
      question:
        "An ML engineer *wants a foundation model (FM)* that can participate in a *multi-turn chatbot environment*. Which *solution* will *meet these requirements*?",
      questionType: "text",
      questionPic: "", // if you need to display Picture in Question
      answerSelectionType: "single",
      answers: [
        "RAG",
        "Instruction-based fine-tuning",
        "Domain adaptation fine-tuning",
        "Prompt engineering",
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation: `
        *Correct. Instruction-based fine-tuning is a fine-tuning technique that uses labeled data to improve large language model (LLM) performance on a specific task. You can use instruction-based fine-tuning to teach a model how to correspond with users in a multi-turn chatbot environment. 
        
        Incorrect. Domain adaptation fine-tuning is a method of fine-tuning large language models (LLMs). Domain adaptation fine-tuning can expand an LLM's knowledge of a given domain, such as learning about industry jargon or technical terms. The scenario does not require the model to learn new domain-specific language. You cannot use domain adaptation fine-tuning to teach an FiM to correspond with users in a multi-turn chatbot environment.

        Incorrect. Prompt engineering is the process of manipulating the prompt for a large language model (LLM) to guide the LLM's behavior and responses. You cannot use prompt engineering to teach a model to have a multi-turn conversation with a user.

        Incorrect. You can use RAG to provide a large language model (LLM) with context on recent events that have transpired after the LLM has already been trained. RAG can help to reduce an LLM's hallucinations. You cannot use RAG to make an LLM participate in a multi-turn chatbot environment.
      `,
      point: "1",
    },
    {
      question:
        "A news company *wants to increase its click-through rate* by providing the most relevant news to each subscriber. Which AWS service will meet these requirements with the LEAST operational overhead?",
      questionType: "text",
      questionPic: "", // if you need to display Picture in Question
      answerSelectionType: "single",
      answers: [
        "Amazon Personalize",
        "Amazon Comprehend",
        "Amazon Kendra",
        "Amazon Bedrock",
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation: `
        *Correct. Amazon Personalize is a fully managed Al service that uses data to generate item recommendations for your users. You can use Amazon Personalize to provide the most relevant news to each subscriber. Amazon Personalize is specifically designed for this kind of use case. You can access the service directly through an API. Therefore, Amazon Personalize provides the least operational overhead. 
        
        Incorrect. Amazon Comprehend is a fully managed Al service that extracts insights by recognizing entities, key phrases, language, or sentiment in documents. Amazon Comprehend cannot provide recommendations.

        Incorrect. Amazon Kendra is a fully managed service that provides intelligent search by using semantic and contextual understanding capabilities. Amazon Kendra can decide whether a document is relevant to a search query. You cannot use Amazon Kendra as a recommendation engine for application users.

        Incorrect. Amazon Bedrock is a fully managed service that provides access to high-performing foundation models (FMs). Amazon Bedrock also provides a set of tools to customize, evaluate, and safeguard the models. You could use Amazon Bedrock to implement a recommendation engine. However, this solution would require model customization. Additionally, this solution might require retrieval augmented generation (RAG) components. Therefore, this solution requires additional operational overhead.
      `,
      point: "1",
    },
    {
      question:
        "A medical device company recently added Al-generated product overviews to its online product catalog. The company wants to incorporate industry-specific terminology to improve the outputs that are generated. An ML team has access to a large volume of unlabeled industry-specific standards and research. Which ML technique will meet these requirements?",
      questionType: "text",
      questionPic: "", // if you need to display Picture in Question
      answerSelectionType: "single",
      answers: [
        "Use retrieval augmented generation (RAG) to include relevant terminology.",
        "Customize the foundation model (FM) by using instruction-based fine-tuning on the industry dataset.",
        "Use prompt engineering to include an edited sample in the next prompt.",
        "Customize the foundation model (FM) by using continued pre-training on the dataset.",
      ],
      correctAnswer: "4",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation: `
        *Correct. Continued pre-training of FMs can help the model understand industry-specific terminology. You can use large, unlabeled datasets to perform continued pre-training. You can continue pre-training the FM by using the unlabeled industry dataset. Future responses from the resulting custom model will more consistently incorporate terminology from the industry dataset. 
        
        Incorrect. RAG is a prompt engineering technique that incorporates relevant search results as context from a prompt to an FM. You could index the internal data and industry documentation as a RAG source and search for relevant context to include in a prompt. You could search the industry dataset for relevant terminology and include the terminology as context in each prompt. However, this technique does not improve the model's ability to incorporate industry-specific terminology in future responses.

        Incorrect. Instruction-based fine-tuning uses labeled examples to train an FM. You can use this method to customize responses based on task-specific data. Model parameters can adjust based on tasks that are encountered during fine-tuning on a labeled dataset. Fine-tuning a model would incorporate relationships between inputs and outputs that are encountered in the fine-tuning dataset. However, instruction-based fine-tuning requires a labeled dataset. The large industry dataset in the scenario is an unlabeled dataset.

        Incorrect. Prompt engineering is a technique to optimize the inputs to FMs with the goal of generating better responses. To include an example output in a prompt can help a model understand output format and style and the relationship of inputs and outputs. An FM does not retain context between prompts. An agent or generative Al application can retain information for a sequence of prompts. However, prompt engineering does not change a model's response beyond the single prompt or series of actions. Therefore, to include the sample in the next prompt would not improve the model's ability to incorporate industry-specific terminology in future responses.
      `,
      point: "1",
    },
    {
      question:
        "A company wants to use a large language model (LLM) to learn language that is specific to the company's domain. The company has a large amount of unlabeled data that contains domain-specific language. Which solution will meet these requirements with the LEAST operational overhead?",
      questionType: "text",
      questionPic: "", // if you need to display Picture in Question
      answerSelectionType: "single",
      answers: [
        "Fine-tune the LLM by using the company's data.",
        "Provide the company's data as context in the prompt for the LLM.",
        "Conduct continued pre-training on the LLM by using the company's data.",
        "Train a new LLM by using the company's data.",
      ],
      correctAnswer: "3",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation: `
        *Correct. Continued pre-training improves a model's performance by providing unlabeled data so the model can learn domain-specific knowledge. This solution will train the model on the company's data. Then, the model can respond with language that is specific to the company's domain. 
        
        Incorrect. To train a new LLM would be costly and time-consuming for the company. Additionally, the company does not need to train a new LLM to achieve responses that contain domain-specific language. Instead, continued pre-training can train a model to learn language and domain-specific knowledge by using unlabeled data. Continued pre-training requires less operational overhead than training a new LLM.

        Incorrect. A solution that provides the company's data as context in the LLM prompt would not meet the requirements. The model would not learn domain-specific language from large amounts of company data in the prompts.

        Incorrect. Fine-tuning improves a model's performance for a given task by using labeled data. The company does not have labeled data. Therefore, the company would not be able to use fine-tuning for this task.
      `,
      point: "1",
    },
    {
      question:
        "A company is exploring generative Al foundation models (FMs) to build a domain-specific text-based solution. The solution will be used internally to generate blog posts and marketing content that will be published on the company's external website.",
      questionType: "text",
      questionPic: "", // if you need to display Picture in Question
      answerSelectionType: "single",
      answers: [
        "Intellectual property (IP) infringement claims",
        "Prompt injection attacks",
        "Increased operational cost",
        "Violation of data privacy regulations",
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation: `
        *Correct. IP infringement occurs when generated content is similar to existing copyrighted material. IP infringement is a risk when you use generative Al to generate content for blog posts and online content. Generative Al FMs are trained on vast datasets that can include copyrighted material.
        
        Incorrect. When you implement a generative Al solution, you can incur setup costs to use or maintain an application. However, the costs are not a risk that is associated with using generative Al for this use case. Additionally, with AWS you pay for only what you use. Increased operational cost are more likely from use cases such as creating a large language model (LLM) by yourself.

        Incorrect. A prompt injection attack occurs when malicious inputs are provided to an Al or ML model to generate inappropriate or harmful output. Prompt injection attacks are a security concern especially when the Al application is available for public use. However, the company is using generative Al to create blog posts and online content, not an Al application. Therefore, prompt injection attacks are not a risk for this use case.

        Incorrect. Data privacy regulations are an important component of any business to ensure customer and personal data remains private. However, when you use generative Al to create blog posts and online content, you do not use personal data. Data privacy violations are not a risk for this use case.
      `,
      point: "1",
    },
  ],
};
