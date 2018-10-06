// @flow

import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navigation from './Navigation';
import About from './About';
import Footer from './Footer';
import Writing from './Writing';
import Options from './Options';
// import Router from './Router';

export default class HomePage extends React.Component {
  render() {
    return (
      <div class="container">
        <p className="hed">
          <a href="/work">
            <span>Work</span>
          </a>{' '}
          /{' '}
          <a href="/about">
            <span>About</span>
          </a>{' '}
          /{' '}
          <a href="/contact">
            <span>Contact</span>
          </a>
        </p>
        <h1 class="intro-hed">
          I’m <a href="http://rambhajan.me/#">Aaron Rambhajan</a>. I bring my
          world to life through software engineering, behavioural research, and
          music production.
        </h1>

        {/* <Options /> */}
        {/* <About /> */}
        {/* <Router /> */}

        <Footer />
      </div>
    );
  }
}
