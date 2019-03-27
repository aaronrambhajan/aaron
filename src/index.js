import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ClosedCaption from './components/ClosedCaption';

import AboutPage from './pages/AboutPage';
import MusicPage from './pages/MusicPage';
import WorkPage from './pages/WorkPage';
import Page404 from './pages/404';

import ADHDProject from './projects/ADHD';
import HeartbeatProject from './projects/Heartbeats';
import TrashProject from './projects/Trash/index';

const Container = styled.section`
  width: 100%;
  padding: 2em;
  margin: 0 auto;
  font-size: calc(1em + 0.5vw);
  color: black;
  line-height: 1.5;
`;

const App = () => (
  <Router>
    <Container>
      <Route exact path="/" component={LandingPage} />

      {/* Projects */}
      <Route path="/projects/trash" component={TrashProject} />
      <Route path="/projects/heartbeats" component={HeartbeatProject} />
      <Route path="/projects/10four" component={ADHDProject} />
      {/* <Route path="/:searchTerm" component={Page404} /> */}

      {/* <Navigation />
      <div className="container">
        <div>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route path="/music" component={MusicPage} />

        </div>


      </div> */}
      <Footer />
    </Container>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
