import React from "react";
import FieldSignIn from "../FieldSignIn";
import PrRedBtn from "components/CusButtons";

import { Link } from "react-router-dom";
import { Checkbox } from "@material-ui/core";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import "./FormSignIn.scss";

function FormSignIn() {
  return (
    <form className="form">
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

      <div className="form__commit">
        <Checkbox color="primary" className="form__commit-checkbox" />
        <span>
          I agree Platform's{" "}
          <Link to="#">
            <strong>Terms of Service</strong>
          </Link>{" "}
          and{" "}
          <Link to="#">
            <strong>Privacy Policy</strong>
          </Link>
        </span>
      </div>

      <div className="signin-btn-wrapper">
        <PrRedBtn>Sign in</PrRedBtn>
      </div>
    </form>
  );
}

export default FormSignIn;
