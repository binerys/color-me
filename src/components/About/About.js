import React from 'react';
import Link from 'gatsby-link';

import styles from './About.module.scss';
import emoji from './emoji-me.png';

const About = () => (
  <div className="card is-shadowless">
    <div className="card-content">
      <div className="media">
        <div className="media-left">
          <figure className="image is-96x96">
            <img src={emoji} alt="technologist emoji" />
          </figure>
        </div>
        <div className="media-content">
          <h1 className="title is-1">breanna nery</h1>
          <p className="subtitle is-4">🇵🇭 software engineer from the lbc</p>
        </div>
      </div>
    </div>
    <div className="field is-grouped">
      <a className="button is-medium is-fullwidth">
        <span className="icon is-small">
          <i className="fas fa-paint-brush" />
        </span>
        <span> new color </span>
      </a>
      <a className="button is-medium is-fullwidth">
        <span className="icon is-small">
          <i className="fas fa-link" />
        </span>
        <span> cool links </span>
      </a>
    </div>
  </div>
);

export default About;
