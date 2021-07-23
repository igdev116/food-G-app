import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import PrimaryButton from "components/PrimaryButton";

// material ui icons
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import StoreMallDirectoryIcon from "@material-ui/icons/StoreMallDirectory";

import "./CartHandle.scss";

function CartHandle() {
  const [isActive, setIsActive] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  const cartProducts = useSelector((state) => state.cart);

  const handleDropUp = () => {
    setIsActive(!isActive);
  };

  // caculate total price
  useEffect(() => {
    let totalPrice = cartProducts.reduce(
      (accumulator, item) => accumulator + item.price * item.qnt,
      0
    );

    const totalQnt = cartProducts.reduce(
      (accumulator, item) => accumulator + item.qnt,
      0
    );

    totalPrice = (
      totalPrice *
      (totalQnt >= 5 ? 0.5 : totalQnt >= 3 ? 0.75 : totalQnt >= 2 ? 0.85 : 1)
    ).toFixed(2);

    setTotalPrice(totalPrice);
  }, [cartProducts]);

  return (
    <div className="cart-handle">
      <div onClick={handleDropUp} className="cart-handle__dropup"></div>

      <div
        className={
          isActive ? "cart-handle__detail active" : "cart-handle__detail"
        }
      >
        <h3 className="cart-handle__detail-title">Order Info</h3>
        <div className="cart-handle__row">
          <span className="cart-handle__label">Discount</span>
          <span className="cart-handle__content">$199</span>
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
          subClass="red cart-handle__btn"
          className="cart-handle__btn cart-handle__btn--checkout"
        >
          <ShoppingCartIcon />
          <span>Checkout</span>
        </PrimaryButton>
        <PrimaryButton subClass="cart-handle__btn">
          <StoreMallDirectoryIcon />
          <span>Buy more</span>
        </PrimaryButton>
      </div>
    </div>
  );
}

export default CartHandle;
