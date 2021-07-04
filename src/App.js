import React from "react";

import Home from "features/Home";
import NotFound from "components/NotFound";
import SignIn from "features/SignIn";
import Footer from "components/Footer";
import Header from "components/Header";
import ScrollButton from "components/ScrollButton";
import Shop from "features/Shop";

import Theme from "utils/cusMatUi";

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";

import "./App.scss";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Header />
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path="/home" component={Home} />

          <Route path="/sign-in" component={SignIn} />

          {/* <Route exact path="/shop" component={Shop} /> */}
          <Route exact path="/shop/:name" component={Shop} />

          <Route component={NotFound} />
        </Switch>
      </Router>
      <ScrollButton />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
