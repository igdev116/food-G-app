import PropTypes from "prop-types";

import "./CheckoutFormField.scss";

function CheckoutFormField(props) {
  const { label, name, errors, register } = props;

  return (
    <div className="checkout-form-field">
      <div className="checkout-form-field__wrapper">
        <input
          className="checkout-form-field__input"
          placeholder=" "
          type="text"
          {...register(name)}
        />
        <span className="checkout-form-field__label">{label}</span>
      </div>
      <span className="checkout-form-field__error">
        {errors[name]?.message}
      </span>
    </div>
  );
}

CheckoutFormField.propsTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default CheckoutFormField;
