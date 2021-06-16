import React from "react";

import PropTypes from "prop-types";

import "./FieldSignIn.scss";

FieldSignIn.propsTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.object,
};

FieldSignIn.defaultProps = {
  type: "",
  label: "",
  icon: null,
};

function FieldSignIn(props) {
  const { type, label, icon } = props;

  return (
    <div className="field-signin">
      <label htmlFor="InputSignIn">{label}</label>
      <div className="field-signin__wrapper">
        {icon}
        <input id="InputSignIn" type={type} />
      </div>
    </div>
  );
}

export default FieldSignIn;
