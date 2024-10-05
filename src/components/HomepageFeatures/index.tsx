import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Progressive',
    Svg: require('@site/static/img/dynamic-devops-roadmap-progressive.svg').default,
    description: (
      <>
         MVP-style learning path works in phases
      </>
    ),
  },
  {
    title: 'Non-Linear',
    Svg: require('@site/static/img/dynamic-devops-roadmap-non-linear.svg').default,
    description: (
      <>
        Faster and more solid growth in less time
      </>
    ),
  },
  {
    title: 'T-Shaped',
    Svg: require('@site/static/img/dynamic-devops-roadmap-t-shaped.svg').default,
    description: (
      <>
        Depth in expertise, breadth in knowledgeNon-Linear
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h2">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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