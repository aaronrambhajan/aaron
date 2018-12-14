import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import HomePage from './pages/HomePage';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ContactPage from './pages/ContactPage';
import WorkPage from './pages/WorkPage';
import ProjectPage from './pages/ProjectPage';
import AboutPage from './pages/AboutPage';

const App = () => (
  <Router>
    <div class="container">
      <Navigation />

      <div>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/work" component={WorkPage} />
        <Route path="/projects/ADHD" component={ProjectPage} />
      </div>

      <Footer />
    </div>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
