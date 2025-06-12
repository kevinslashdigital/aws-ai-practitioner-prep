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
import { quiz } from "../data/quiz.5.domains";

// https://github.com/wingkwong/react-quiz-component

function HomepageHeader({
  showQuiz,
  toggleQuiz,
}: {
  showQuiz: boolean;
  toggleQuiz: () => void;
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
            onClick={toggleQuiz}
            style={{ minWidth: 150 }}
          >
            {showQuiz ? "Hide Quiz" : "Start Now"}
          </button>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  const [showQuiz, setShowQuiz] = useState(false);
  const toggleQuiz = () => setShowQuiz((prev) => !prev);
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      {!showQuiz && (
        <HomepageHeader showQuiz={showQuiz} toggleQuiz={toggleQuiz} />
      )}
      {!showQuiz && <QuizFeatures />}
      <main>
        {showQuiz && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Quiz
              quiz={quiz}
              shuffle={true}
              shuffleAnswer={true}
              showInstantFeedback={false}
              showDefaultResult={true}
              enableProgressBar={true}
            />
          </div>
        )}
      </main>
    </Layout>
  );
}
