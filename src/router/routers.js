import React from 'react';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import Demo from '../views/demo1'
import Demo2 from '../views/demo2'
import Demo4 from '../views/demo4'
import Header from '../views/public/Header'
import Home from '../views/home';

export default (
  <Router>
      <Header/>
      <div className="zmz-react-section">
      <Route exact path="/" component={Home} />
      <Route  path="/Demo" component={Demo} />
      <Route  path="/Demo2" component={Demo2} />
      <Route  path="/Demo4" component={Demo4} />
      </div>
  </Router>
);
