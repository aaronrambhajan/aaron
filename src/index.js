import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import HomePage from './pages/HomePage';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Writing from './pages/Writing';

const App = () => (
  <Router>
    <div class="container">
      <Navigation />

      <div>
        <Route path="/home" component={HomePage} />
        <Route path="/writing" component={Writing} />
      </div>

      <Footer />
    </div>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
