import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { db } from "firebase/configs";

import CartItems from "./components/CartItems";
import CartHandle from "./components/CartHandle";

import "./Cart.scss";

Cart.propsTypes = {
  isDropUp: PropTypes.bool,
  setIsDropUp: PropTypes.func,
};

Cart.defaultProps = {
  isDropUp: false,
  setIsDropUp: null,
};

function Cart(props) {
  const { isDropUp, setIsDropUp } = props;

  const handleCloseCart = () => {
    setIsDropUp(!isDropUp);
  };

  useEffect(() => {
    db.collection("cart")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`);
        });
      });
  }, []);

  return (
    <div className={isDropUp ? "cart active" : "cart"}>
      <div className="cart__container">
        <div className="cart__heading">
          <h2 className="cart__title">Shopping Cart</h2>
          <div
            onClick={handleCloseCart}
            className={!isDropUp ? "cart__close active" : "cart__close"}
          ></div>
        </div>

        <CartItems />
        <CartHandle />
      </div>
    </div>
  );
}

export default Cart;
