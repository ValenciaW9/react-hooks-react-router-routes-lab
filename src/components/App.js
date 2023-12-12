import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import MoviesPage from "./Movies";
import Directors from "./Directors";
import Actors from "./Actors";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movies" component={MoviesPage} />
          <Route path="/directors" component={Directors} />
          <Route path="/actors" component={Actors} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;