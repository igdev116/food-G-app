import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import usePrice from "hooks/usePrice";

// material ui icons
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import StoreMallDirectoryIcon from "@material-ui/icons/StoreMallDirectory";

import PrimaryButton from "components/PrimaryButton";

import "./CartHandle.scss";

function CartHandle() {
  const [isActive, setIsActive] = useState(false);

  const history = useHistory();

  const { totalPrice, discount } = usePrice();

  const toggleDropUp = () => {
    setIsActive(!isActive);
  };

  const moveToCheckout = () => {
    history.push("/checkout");
  };

  return (
    <div className="cart-handle">
      <div onClick={toggleDropUp} className="cart-handle__dropup"></div>

      <div
        className={
          isActive ? "cart-handle__detail active" : "cart-handle__detail"
        }
      >
        <h3 className="cart-handle__detail-title">Order Info</h3>
        <div className="cart-handle__row">
          <span className="cart-handle__label">Discount</span>
          <span className="cart-handle__content">${discount}</span>
        </div>
        <div className="cart-handle__row">
          <span className="cart-handle__label">Shipping Cost</span>
          <span className="cart-handle__content">Free</span>
        </div>
        <div className="cart-handle__row">
          <span className="cart-handle__label">Voucher</span>
          <span className="cart-handle__content">None</span>
        </div>
      </div>

      <div className="cart-handle__total">
        <span className="cart-handle__txt">Total</span>
        <span className="cart-handle__price">${totalPrice}</span>
      </div>

      <div className="cart-handle__btns">
        <PrimaryButton
          page="checkout"
          subClass="red cart-handle__btn"
          className="cart-handle__btn cart-handle__btn--checkout"
        >
          <ShoppingCartIcon />
          <span>Checkout</span>
        </PrimaryButton>
        <PrimaryButton page="shop" subClass="cart-handle__btn">
          <StoreMallDirectoryIcon />
          <span>Buy more</span>
        </PrimaryButton>
      </div>
    </div>
  );
}

export default CartHandle;
