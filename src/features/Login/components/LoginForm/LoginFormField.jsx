import PropTypes from "prop-types";

import "./LoginFormField.scss";

function LoginFormField(props) {
  const { type, label, icon, placeholder } = props;

  return (
    <div className="login-form-field">
      <label htmlFor={label}>{label}</label>
      <div className="login-form-field__wrapper">
        {icon}
        <input id={label} type={type} placeholder={placeholder} />
      </div>
    </div>
  );
}

LoginFormField.propsTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.object,
  placeholder: PropTypes.string,
};

export default LoginFormField;
