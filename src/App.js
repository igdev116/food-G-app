import React from "react";

import Home from "features/Home";
import NotFound from "components/NotFound";

import "./App.css";

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />

        <Route exact path="/home" component={Home} />
        <Route exact path="/sign-in" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
