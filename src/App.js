import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import Theme from "utils/cusMatUi";
import ApiProvider from "./context/ApiProvider";
import AuthProvider from "./context/AuthProvider";
import PrevFilterProvider from "./context/PrevFilterProvider";

import Header from "components/Header";
import NotFound from "components/NotFound";
import Footer from "components/Footer";
import ScrollButton from "components/ScrollButton";
import Home from "features/Home";
import SignIn from "features/SignIn";
import Shop from "features/Shop";
import Detail from "features/Detail";

// material ui core
import { ThemeProvider } from "@material-ui/core/styles";

import "./App.scss";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <AuthProvider>
          <ApiProvider>
            <Header />
            <Switch>
              <Redirect exact from="/" to="/home" />
              <Route path="/home" component={Home} />

              <Route path="/sign-in" component={SignIn} />

              <PrevFilterProvider>
                <Route exact path="/shop/:name" component={Shop} />
                <Route path="/shop/:name/:id" component={Detail} />
              </PrevFilterProvider>

              <Route component={NotFound} />
            </Switch>
          </ApiProvider>
        </AuthProvider>
      </Router>
      <ScrollButton />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
