import React from 'react';

import styles from './Swatch.module.scss';

const Swatch = props => (
  <a href={props.link}>
    <div className={styles.swatch}>
      <div className={'card'}>
        <div
          className={styles.swatchColor}
          style={{ backgroundColor: props.color }}
        />
        <div className={styles.swatchDesc}>
          <h1
            className={
              'title is-1 is-uppercase has-text-weight-bold has-text-black'
            }
          >
            {props.title}
          </h1>
          <p
            className={
              'subtitle is-3 has-text-black has-text-weight-semibold is-uppercase'
            }
          >
            {props.color}
            <br />
            <p className={'is-capitalized'}> {props.colorName} </p>
          </p>
        </div>
      </div>
    </div>
  </a>
);

export default Swatch;
