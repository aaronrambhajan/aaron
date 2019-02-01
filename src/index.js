import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import HomePage from './pages/HomePage';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import MusicPage from './pages/MusicPage';
import ContactPage from './pages/ContactPage';

import ADHDProject from './projects/ADHD';
import HeartbeatProject from './projects/Heartbeats';
import TrashProject from './projects/Trash/Project';

// [Nested Routing](https://stackoverflow.com/questions/41474134/nested-routes-with-react-router-v4)

const App = () => (
  <Router>
    <div>
      <Navigation />
      <div class="container">
        <div>
          <Route exact path="/" component={HomePage} />

          <Route exact path="/about" component={AboutPage} />
          <Route path="/music" component={MusicPage} />
          <Route path="/contact" component={ContactPage} />

          <Route path="/projects/ADHD" component={ADHDProject} />
          <Route path="/projects/heartbeats" component={HeartbeatProject} />
          <Route path="/projects/trash" component={TrashProject} />
        </div>

        <Footer />
      </div>
    </div>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
