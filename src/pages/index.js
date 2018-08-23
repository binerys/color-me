import React from 'react';
import Swatch from '../components/Swatch';
import About from '../components/About';
import Link from 'gatsby-link';

import styles from './index.module.scss';

const IndexPage = () => (
  <div className={styles.content}>
    <div className="columns is-1">
      <div className={"column is-three-fifths "+styles.valign}>
        <About />
      </div>
      <div className="column">
        <Swatch title="Pantone" color="#f6dbd8" colorName="Rose Water" />
      </div>
    </div>
  </div>
);

export default IndexPage;
