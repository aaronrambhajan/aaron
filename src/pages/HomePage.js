// @flow

import React from 'react';
import About from '../components/About';

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h1 class="intro-hed">
          I’m <a href="/about">Aaron Rambhajan</a>. I bring my world to life
          through software engineering, behavioural research, and music
          production.
        </h1>
      </div>
    );
  }
}
