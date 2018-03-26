import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import App from './app';
import About from './components/About';
import Sample from './components/Sample';
import Dojo from './components/Dojo';

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={App}/>
      <Route path="/about" component={About}/>
      <Route path="/sample" component={Sample}/>
      <Route path="/dojo" component={Dojo}/>
    </div>
  </Router>
);

export default Routes;
