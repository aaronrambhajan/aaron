import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import HomePage from './pages/HomePage';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import WorkPage from './pages/WorkPage';
import MusicPage from './pages/MusicPage';
import ContactPage from './pages/ContactPage';
import ADHDProject from './projects/ADHD';
import TrashProject from './projects/Trash';
import HeartbeatProject from './projects/Heartbeats';
import TrashFieldStudyProject from './projects/TrashFieldStudy';

const App = () => (
  <Router>
    <div class="container">
      <Navigation />

      <div>
        <Route exact path="/" component={HomePage} />

        <Route exact path="/about" component={AboutPage} />
        <Route path="/work" component={WorkPage} />
        <Route path="/music" component={MusicPage} />
        <Route path="/contact" component={ContactPage} />

        <Route path="/projects/ADHD" component={ADHDProject} />
        <Route path="/projects/trash" component={TrashProject} />
        <Route path="/projects/heartbeats" component={HeartbeatProject} />
        <Route
          path="/projects/trash-field-study"
          component={TrashFieldStudyProject}
        />
      </div>

      <Footer />
    </div>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
