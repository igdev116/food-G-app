import React from "react";

import FieldSignIn from "../FieldSignIn";
import PrRedBtn from "components/PrimaryButton";

// router dom
import { Link } from "react-router-dom";

// material ui
import { Checkbox } from "@material-ui/core";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import "./FormSignIn.scss";

function FormSignIn() {
  return (
    <form className="form-signin">
      <FieldSignIn
        icon={<MailOutlineIcon />}
        type="text"
        label="Email address"
        placeholder="Your email"
      />

      <FieldSignIn
        icon={<LockOutlinedIcon />}
        type="password"
        label="Password"
        placeholder="Your password"
      />

      <div className="form-signin__commit">
        <Checkbox color="primary" className="form-signin__commit-checkbox" />
        <span className="form-signin__commit-msg">Save your password</span>
      </div>

      <div className="signin-btn-wrapper">
        <PrRedBtn>Sign in</PrRedBtn>
      </div>
    </form>
  );
}

export default FormSignIn;
