import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'TypeScript from End to End',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        MPC Framework is a TypeScript API and supports&nbsp;
        <Link to="https://github.com/voltrevo/summon">Summon</Link>
        &nbsp;for writing circuits using TypeScript syntax.
      </>
    ),
  },
  {
    title: 'Fully Secure',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        MPC Framework supports malicious secure MPC, which means the
        parties cannot cheat even if N-1 work together against one party.
      </>
    ),
  },
  {
    title: 'Client First',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        MPC Framework does not rely on beefy servers or any complex non-portable
        software. Our most important supported platform is the web on mobile.
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
