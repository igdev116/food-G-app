import React from "react";

import auth, { googleProvider } from "configs/firebase";
import FormSignIn from "./components/FormSignIn";

import { Link } from "react-router-dom";

import { Button, Container } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";

import "./SignIn.scss";

function SignIn() {
  // sign in with google
  const onGoogleSignIn = () => {
    auth
      .signInWithPopup(googleProvider)
      .then((result) => {
        const user = result.user;
      })
      .catch((error) => {
        alert(error);
      });
  };

  auth.onAuthStateChanged((user) => {
    console.log("State changed:", user);
  });

  return (
    <section className="signin">
      <Container>
        <div className="signin__container">
          <div
            className="signin__thumb"
            style={{ backgroundImage: "url(/svgs/SignIn/thumb.svg)" }}
          ></div>

          <div className="signin__content">
            <h2>JOIN WITH US</h2>

            <div className="signin__msg">
              <span>Don't have an account? </span>
              <Link className="signin__msg-btn" to="#">
                <strong>Sign up</strong>
              </Link>
            </div>

            <FormSignIn />

            <div className="signin__separate">
              <span className="signin__separate-text">OR</span>
            </div>

            <div className="signin__options">
              <Button
                onClick={onGoogleSignIn}
                variant="contained"
                className="signin__option signin__option--gg"
              >
                <img src="/svgs/SignIn/google.svg" alt="google icon" />
                Sign in with Google
              </Button>

              <Button
                variant="contained"
                className="signin__option signin__option--fb"
              >
                <FacebookIcon />
                Sign in with Facebook
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SignIn;
