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
import Routes from "routes/Routes";

// react toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

// material ui core
import { ThemeProvider } from "@material-ui/core/styles";

import Header from "components/Header";
import Footer from "components/Footer";
import ScrollButton from "components/ScrollButton";

import "./App.scss";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <AuthProvider>
          <PrevFilterProvider>
            <ApiProvider>
              <Header />
              <Routes />
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
