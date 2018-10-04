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
        <h1 class="intro-hed">
          I’m <a href="http://rambhajan.me/#">Aaron Rambhajan</a>. I develop
          interactive experiments, help bring bikes to the world, and create
          music.
        </h1>

        {/* <Options /> */}
        {/* <About /> */}
        {/* <Router /> */}

        <Footer />
      </div>
    );
  }
}
