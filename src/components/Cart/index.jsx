import React, { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { AuthContext } from "context/AuthProvider";
import { db } from "firebase/configs";
import { addToCart } from "./cartSlice";

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
  const dispatch = useDispatch();

  const { user } = useContext(AuthContext);

  const handleCloseCart = () => {
    setIsDropUp(!isDropUp);
  };

  // get data from firestore
  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .onSnapshot((doc) => {
          if (doc.data()) {
            const action = addToCart(doc.data().cart);
            dispatch(action);
          }
        });
    }
  }, [user, dispatch]);

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
