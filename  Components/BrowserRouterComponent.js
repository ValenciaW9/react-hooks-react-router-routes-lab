import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import SearchForm from './SearchForm';
import Foods from '../ Components/Foods';
import AddFood from './AddFood';

export default function BrowserRouterComponent() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/search" component={SearchForm} />
          <Route path="/foods" component={Foods} />
          <Route path="/add-food" component={AddFood} />
        </Switch>
      </div>
    </Router>
  );
}