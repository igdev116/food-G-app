import { useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import { googleProvider, auth } from "configs/firebaseConfig";
import { AuthContext } from "contexts/AuthProvider";

// material ui core
import { Button, Container } from "@material-ui/core";

// material ui icons
import FacebookIcon from "@material-ui/icons/Facebook";

import LoginForm from "./components/LoginForm";

import LoginThumbSvg from "assets/svgs/Login/thumb.svg";
import GoogleSvg from "assets/svgs/Login/google.svg";

import "./styles.scss";

function Login() {
  const history = useHistory();

  const { setHasHeader } = useContext(AuthContext);

  // log in with google
  const handleGoogleLogIn = () => {
    auth.signInWithPopup(googleProvider).then(() => {
      history.goBack();
      setHasHeader(true);
    });
  };

  useEffect(() => {
    setHasHeader(false);
  }, [setHasHeader]);

  return (
    <section className="login">
      <Container>
        <div className="login__container">
          <div
            className="login__thumb"
            style={{ backgroundImage: `url(${LoginThumbSvg})` }}
          ></div>

          <div className="login__content">
            <h2>JOIN WITH US</h2>

            <div className="login__msg">
              <span>Don't have an account? </span>
              <Link className="login__msg-btn" to="#">
                <strong>Create an account</strong>
              </Link>
            </div>

            <LoginForm />

            <div className="login__separate">
              <span className="login__separate-text">OR</span>
            </div>

            <div className="login__options">
              <Button
                onClick={handleGoogleLogIn}
                variant="contained"
                className="login__option login__option--gg"
              >
                <img src={GoogleSvg} alt="google icon" />
                Log in with Google
              </Button>

              <Button
                variant="contained"
                className="login__option login__option--fb"
              >
                <FacebookIcon />
                Log in with Facebook
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Login;
