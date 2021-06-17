import React from "react";
import PropTypes from "prop-types";

import "./FieldSignIn.scss";

FieldSignIn.propsTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.object,
  placeholder: PropTypes.string,
};

FieldSignIn.defaultProps = {
  type: "",
  label: "",
  icon: null,
  placeholder: "",
};

function FieldSignIn(props) {
  const { type, label, icon, placeholder } = props;

  return (
    <div className="field-signin">
      <label htmlFor={label}>{label}</label>
      <div className="field-signin__wrapper">
        {icon}
        <input id={label} type={type} placeholder={placeholder} />
      </div>
    </div>
  );
}

export default FieldSignIn;
