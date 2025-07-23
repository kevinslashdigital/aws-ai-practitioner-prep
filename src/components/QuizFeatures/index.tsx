import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Png: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Simple and Intuitive",
    Png: require("@site/static/img/simple_and_intuitive.png").default,
    description: (
      <>
        Our quiz platform is built with simplicity in mind, allowing you to
        focus on learning without distractions. Navigate with ease and enjoy a
        seamless quiz-taking experience from your very first click.
      </>
    ),
  },
  {
    title: "Targeted Exam Preparation",
    Png: require("@site/static/img/targeted_exam_preparation.png").default,
    description: (
      <>
        All questions are mapped to the official AWS AI Practitioner exam
        domains, so you can practice the skills and concepts that are actually
        tested. Maximize your study time and track your progress as you go.
      </>
    ),
  },
  {
    title: "Open Source and Always Improving",
    Png: require("@site/static/img/open_source.png").default,
    description: (
      <>
        This project leverages the power of React and Docusaurus, making it
        flexible, open source, and constantly evolving. Your feedback and
        contributions help keep the content up-to-date and valuable for
        everyone.
      </>
    ),
  },
];

function Feature({title, Png, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Png} className={styles.featureSvg} role="img" alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
