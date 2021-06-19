import React from "react";

import Home from "features/Home";
import NotFound from "components/NotFound";
import SignIn from "features/SignIn";

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import Theme from "utils/cusMatUi";

import "./App.scss";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Switch>
          <Redirect exact from="/" to="/home" />

          <Route path="/home" component={Home} />
          <Route path="/sign-in" component={SignIn} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
