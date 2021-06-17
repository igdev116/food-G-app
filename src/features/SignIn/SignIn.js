import React from "react";

import auth, { googleProvider, facebookProvider } from "api/Firebase";

import FormSignIn from "./FormSignIn";
import Header from "components/Header";

import { Link } from "react-router-dom";

import { Button, Container, makeStyles } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";

import Google from "assets/svgs/google.svg";
import "./SignIn.scss";

const useStyles = makeStyles({
  container: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
  },
});

function SignIn() {
  const classes = useStyles();

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
    <>
      <Container fixed className={classes.container}>
        <div className="signin-container">
          <div className="signin-thumb"></div>

          <div className="signin">
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

            <div className="signin-options">
              <Button
                onClick={onGoogleSignIn}
                variant="contained"
                className="signin-option signin-option--gg"
              >
                <img src={Google} alt="google icon" />
                Sign in with Google
              </Button>

              <Button
                variant="contained"
                className="signin-option signin-option--fb"
              >
                <FacebookIcon />
                Sign in with Facebook
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default SignIn;
