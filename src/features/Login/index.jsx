import React, { useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import { googleProvider, auth } from "configs/firebaseConfig";
import { AuthContext } from "contexts/AuthProvider";

// material ui core
import { Button, Container } from "@material-ui/core";

// material ui icons
import FacebookIcon from "@material-ui/icons/Facebook";

import LoginForm from "./components/LoginForm";

import "./styles.scss";

function SignIn() {
  const history = useHistory();

  // sign in with google
  const handleGoogleLogIn = () => {
    auth.signInWithPopup(googleProvider).then(() => {
      history.goBack();
      setHasHeader(true);
    });
  };

  const { setHasHeader } = useContext(AuthContext);

  useEffect(() => {
    setHasHeader(false);
  }, [setHasHeader]);

  return (
    <section className="login">
      <Container>
        <div className="login__container">
          <div
            className="login__thumb"
            style={{ backgroundImage: "url(/svgs/SignIn/thumb.svg)" }}
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
                className="login__option signin__option--gg"
              >
                <img src="/svgs/SignIn/google.svg" alt="google icon" />
                Log in with Google
              </Button>

              <Button
                variant="contained"
                className="login__option signin__option--fb"
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

export default SignIn;
