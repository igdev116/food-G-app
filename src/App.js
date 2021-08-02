import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import Theme from "utils/cusMatUi";
import ApiProvider from "./contexts/ApiProvider";
import AuthProvider from "./contexts/AuthProvider";
import PrevFilterProvider from "./contexts/PrevFilterProvider";

// react toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

// material ui core
import { ThemeProvider } from "@material-ui/core/styles";

import Header from "components/Header";
import NotFound from "components/NotFound";
import Footer from "components/Footer";
import ScrollButton from "components/ScrollButton";
import Home from "features/Home";
import Login from "features/Login";
import Shop from "features/Shop";
import Detail from "features/Detail";
import Checkout from "features/Checkout";

import "./App.scss";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <AuthProvider>
          <PrevFilterProvider>
            <ApiProvider>
              <Header />
              <Switch>
                <Redirect from="/" to="/home" exact />
                <Route path="/home" component={Home} exact />

                <Route path="/login" component={Login} exact />

                <Route path="/shop/:name" component={Shop} exact />

                <Route path="/shop/:name/:id" component={Detail} exact />

                <Route path="/checkout" component={Checkout} exact />

                <Route component={NotFound} />
              </Switch>
            </ApiProvider>
          </PrevFilterProvider>
        </AuthProvider>
      </Router>
      <ScrollButton />
      <Footer />
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
