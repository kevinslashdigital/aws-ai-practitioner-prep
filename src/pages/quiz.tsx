import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import QuizFeatures from '@site/src/components/QuizFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import Quiz from "react-quiz-component";
import React, { useState } from "react";
import { quiz as starterQuiz } from "../data/quiz.5.domains";
import { quiz as poQuiz } from "../data/quiz.po.data";

// https://github.com/wingkwong/react-quiz-component

type QuizType = "starter" | "po" | "full";

function HomepageHeader({
  onQuizSelect,
}: {
  onQuizSelect: (quizType: QuizType) => void;
}) {
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Welcome to the AWS AI Practitioner Quiz!
        </Heading>
        <p className="hero__subtitle">
          Challenge yourself with this set of questions covering all 5 core
          domains of the AWS AI Practitioner exam. This quiz is designed to help
          you assess your current understanding, identify knowledge gaps, and
          boost your confidence as you prepare for the real certification. Let’s
          test your skills and get exam-ready!
        </p>
        <div className={styles.buttons}>
          <button
            className="button button--secondary button--lg"
            style={{ minWidth: 150, marginRight: 12 }}
            onClick={() => onQuizSelect("starter")}
          >
            Starter Quiz
          </button>
          <button
            className="button button--secondary button--lg"
            style={{ minWidth: 150, marginRight: 12 }}
            onClick={() => onQuizSelect("po")}
          >
            PO Quiz
          </button>
          <button
            className="button button--secondary button--lg"
            style={{ minWidth: 150 }}
            onClick={() => onQuizSelect("full")}
          >
            Full Set Quiz
          </button>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  const [selectedQuiz, setSelectedQuiz] = useState<QuizType | null>(null);

  let quizData;
  if (selectedQuiz === "starter") quizData = starterQuiz;
  else if (selectedQuiz === "po") quizData = poQuiz;
  else if (selectedQuiz === "full") quizData = starterQuiz;

  return (
    <Layout
      title="AWS AI Practitioner Exam Quiz"
      description="Challenge yourself with our AWS AI Practitioner Exam Quiz! Test your knowledge across all 5 domains and get exam-ready with instant feedback and explanations."
    >
      {selectedQuiz === null && <HomepageHeader onQuizSelect={setSelectedQuiz} />}
      {selectedQuiz === null && <QuizFeatures />}
      <main>
        {selectedQuiz !== null && quizData && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Quiz
              quiz={quizData}
              timer={3600}
              allowPauseTimer={true}
              shuffle={true}
              shuffleAnswer={true}
              showInstantFeedback={false}
              showDefaultResult={true}
              enableProgressBar={true}
            />
            <button
              className="button button--secondary button--sm"
              style={{  marginBottom: 24 }}
              onClick={() => setSelectedQuiz(null)}
            >
              Back to Quiz Menu
            </button>
          </div>
        )}
      </main>
    </Layout>
  );
}
