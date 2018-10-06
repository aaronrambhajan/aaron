import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import HomePage from './pages/HomePage';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import WritingPage from './pages/WritingPage';
import ContactPage from './pages/ContactPage';
import WorkPage from './pages/WorkPage';

const App = () => (
  <Router>
    <div class="container">
      <Navigation />

      <div>
        <Route exact path="/" component={HomePage} />
        <Route path="/writing" component={WritingPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/work" component={WorkPage} />
      </div>

      <Footer />
    </div>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
