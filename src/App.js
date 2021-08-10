import { BrowserRouter as Router } from "react-router-dom";

import Theme from "utils/customMaterialUi";
import ApiProvider from "./contexts/ApiProvider";
import AuthProvider from "./contexts/AuthProvider";
import PrevFilterProvider from "./contexts/PrevFilterProvider";
import Routes from "routes/Routes";

// gsap
import gsap from "gsap";

// gsap plugins
import ScrollTrigger from "gsap/ScrollTrigger";

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
  gsap.registerPlugin(ScrollTrigger);
  gsap.config({
    opacity: 0,
    force3D: true,
  });

  window.console = {
    log: {},
    dir: {},
  };

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
