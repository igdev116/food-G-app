// material ui
import { Checkbox } from "@material-ui/core";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

// react hook form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// yup
import * as yup from "yup";

import LoginFormField from "./LoginFormField";
import PrimaryButton from "components/PrimaryButton";
import ToastMessage from "components/ToastMessage";

import "./styles.scss";

const schema = yup.object().shape({
  email: yup
    .string()
    .required("This field is required")
    .matches(
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      "This is not valid email format"
    ),
  password: yup
    .string()
    .required("This field is required")
    .matches(
      /^(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
      "Password should be 8 chars minimum and at least 1 number"
    ),
});

function LoginForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onHandleSubmit = () => {
    reset({
      email: "",
      password: "",
    });

    ToastMessage("closed");
  };

  return (
    <form onSubmit={handleSubmit(onHandleSubmit)} className="form-login">
      <LoginFormField
        icon={<MailOutlineIcon />}
        name="email"
        label="Email address"
        placeholder="Your email"
        register={register}
        errors={errors}
      />

      <LoginFormField
        icon={<LockOutlinedIcon />}
        name="password"
        label="Password"
        placeholder="Your password"
        register={register}
        errors={errors}
      />

      <div className="form-login__commit">
        <Checkbox color="primary" className="form-login__commit-checkbox" />
        <span className="form-login__commit-msg">Save your password</span>
      </div>

      <button type="submit" className="form-login__btn">
        <PrimaryButton subClass="red">Log in</PrimaryButton>
      </button>
    </form>
  );
}

export default LoginForm;
