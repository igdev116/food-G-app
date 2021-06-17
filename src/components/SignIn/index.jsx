import React from "react";

import FormSignIn from "./FormSignIn";

import { Link } from "react-router-dom";
import { Button, Container } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";

import Google from "assets/svgs/google.svg";

import "./SignIn.scss";

function SignIn() {
  return (
    <>
      <Container fixed>
        <div className="signin">
          <h2>Sign in to food G</h2>

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
      </Container>
    </>
  );
}

export default SignIn;
