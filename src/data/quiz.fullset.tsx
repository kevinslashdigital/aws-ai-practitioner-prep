export const quiz = {
  quizTitle: "Essential GenAI Concepts for Product Owners (PO)",
  quizSynopsis:
    "Test your understanding of the most important Generative AI (GenAI) concepts every Product Owner should know. These questions are designed to help you confidently lead, communicate, and make decisions in GenAI projects.",
  progressBarColor: "#9de1f6",
  nrOfQuestions: "1",
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
    }
  ]
};