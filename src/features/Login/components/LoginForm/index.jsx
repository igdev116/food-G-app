// material ui
import { Checkbox } from "@material-ui/core";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import LoginFormField from "./LoginFormField";
import PrimaryButton from "components/PrimaryButton";

import "./styles.scss";

function LoginForm() {
  return (
    <form className="form-login">
      <LoginFormField
        icon={<MailOutlineIcon />}
        type="text"
        label="Email address"
        placeholder="Your email"
      />

      <LoginFormField
        icon={<LockOutlinedIcon />}
        type="password"
        label="Password"
        placeholder="Your password"
      />

      <div className="form-login__commit">
        <Checkbox color="primary" className="form-login__commit-checkbox" />
        <span className="form-login__commit-msg">Save your password</span>
      </div>

      <div className="form-login__btn">
        <PrimaryButton subClass="red">Log in</PrimaryButton>
      </div>
    </form>
  );
}

export default LoginForm;
