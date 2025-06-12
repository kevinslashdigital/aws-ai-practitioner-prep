import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import quizStyles from "./quiz.css";
import Quiz from "react-quiz-component";
import React, { useState } from "react";
import { quiz } from "./quiz.5.domains";

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
          Welcome to AWS AI Practitioner Quiz
        </Heading>
        <p className="hero__subtitle">
          Take this quiz to assess your understanding and discover areas to
          improve before the real exam.
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
      <main>
        {showQuiz && (
          <Quiz
            quiz={quiz}
            shuffle={true}
            shuffleAnswer={true}
            showInstantFeedback={false}
            showDefaultResult={true}
            enableProgressBar={true}
          />
        )}
      </main>
    </Layout>
  );
}
