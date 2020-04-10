import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import Landing from './Landing';
import Projects from './content/Projects';
import Music from './content/Music';
import About from './content/About';
import Contact from './content/Contact';

import Synthesis from './content/projects/Synthesis';
import Staircase from './content/projects/Staircase';
import Memories from './content/projects/Memories';
import Scraper from './content/projects/Scraper';
import Quan from './content/projects/Quan';
import ARR from './content/projects/ARR';

const Container = styled.div`
  width: 100%;
  max-width: 700px;
  padding: 2em;
  font-size: calc(1em + 0.5vw);
  line-height: 1.5;
`;

const Subtitle = styled.div`
  font-size: 0.5em;
  font-family: monospace;
  text-transform: uppercase;
  margin-bottom: 4em;
`;

const App = () => (
  <Router>
    <Container>
      <a href="/" style={{ fontSize: '2em', fontWeight: 'bold' }}>
        Aaron Rambhajan
      </a>
      <Subtitle> Programmer | Researcher | Music Producer</Subtitle>
      <Route exact path="/" component={Landing} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/music" component={Music} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      {/* <Route exact path="/projects/synthesis" component={Synthesis} /> */}
      {/* <Route exact path="/projects/staircase" component={Staircase} /> */}
      {/* <Route exact path="/projects/memories" component={Memories} /> */}
      {/* <Route exact path="/projects/scraper" component={Scraper} /> */}
      {/* <Route exact path="/projects/quan" component={Quan} /> */}
      <Route exact path="/projects/arr" component={ARR} />
    </Container>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
