import React from "react";
import FieldSignIn from "../FieldSignIn";
import PrCheckbox from "utils/cusMatUi";

import { Link } from "react-router-dom";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import "./FormSignIn.scss";

function FormSignIn() {
  return (
    <div className="form">
      <h2>Sign in to food G</h2>
      <div className="form__msg">
        <span>Don't have an account?</span>
        <Link className="form__msg-btn" to="/home">
          Sign up
        </Link>
      </div>

      <form>
        <FieldSignIn
          icon={<MailOutlineIcon />}
          type="text"
          label="Email address"
        />

        <FieldSignIn
          icon={<LockOutlinedIcon />}
          type="password"
          label="Password"
        />

        <div className="form__commit">
          <PrCheckbox className="form__commit-checkbox" />
          <span>
            I agree Platform's <strong>Terms of Service</strong> and{" "}
            <strong>Privacy Policy</strong>
          </span>
        </div>
      </form>
    </div>
  );
}

export default FormSignIn;
