import React from "react";

import Home from "features/Home";
import NotFound from "components/NotFound";

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import "./App.scss";

const theme = createMuiTheme({
  overrides: {
    MuiContainer: {
      root: {
        padding: "0 75px !important",
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Redirect exact from="/" to="/home" />

          <Route path="/home" component={Home} />
          <Route path="/sign-in" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
