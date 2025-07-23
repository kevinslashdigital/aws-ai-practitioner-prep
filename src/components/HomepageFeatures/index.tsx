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
    title: "Easy to Use",
    Png: require("@site/static/img/easy_to_use.png").default,
    description: (
      <>
        We’ve designed this guide from the ground up to be simple to use and
        easy to navigate – so you can get started on your AWS AI journey without
        hassle.
      </>
    ),
  },
  {
    title: "Focus on What Matters",
    Png: require("@site/static/img/focus_on_what_matters.png").default,
    description: (
      <>
        Our resources are organized by exam domains, packed with real examples,
        key concepts, and quizzes that reinforce what actually appears on the
        test.
      </>
    ),
  },
  {
    title: "Powered by React",
    Png: require("@site/static/img/powered_by_react.png").default,
    description: (
      <>
        Powered by Docusaurus and the AWS community, this open-source guide is
        extendable, up-to-date, and evolving with your contributions.
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
