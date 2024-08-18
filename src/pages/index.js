import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={styles.heroContainer}>
        <div className={styles.titleContainer}>
          <h1 className={styles.docTitle}>{siteConfig.title}</h1>
          <p className={styles.docSubtitle}>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx('button button--secondary button--lg', styles.docButton)}
              to="/docs/introduction/overview">
              📖 Go to our Documentation
            </Link>
          </div>
        </div>
        <img
          className={styles.image}
          src={require('/static/img/banner-btc.png').default}
          alt="Banner Image"
        />
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title} Documentation`}
      description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
