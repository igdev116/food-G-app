import React from "react";

import PropTypes from "prop-types";

import "./Checkbox.scss";

Checkbox.propsTypes = {
  content: PropTypes.string,
  checked: PropTypes.bool,
  handleOptionChange: PropTypes.func,
  handleOptionClick: PropTypes.func,
};

Checkbox.defaultProps = {
  content: "",
  checked: false,
  handleOptionChange: null,
  handleOptionClick: null,
};

function Checkbox(props) {
  const { content, checked, handleOptionChange, handleOptionClick } = props;

  return (
    <label onClick={handleOptionClick} className="checkbox">
      <input
        checked={checked}
        onChange={handleOptionChange}
        className="checkbox__input"
        type="radio"
        name="Radio"
        value={content}
      />
      <span className="checkmark"></span>
      {content}
    </label>
  );
}

export default Checkbox;
