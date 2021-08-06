import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AuthContext } from "contexts/AuthProvider";
import { db } from "configs/firebaseConfig";
import { addToCart } from "./cartSlice";
import { setIsShowCart } from "components/Header/headerSlice";

import CartItems from "./components/CartItems";
import CartHandle from "./components/CartHandle";
import EmptyCart from "components/EmptyCart";

import EmptyCartImg from "assets/svgs/Common/empty-cart.svg";

import "./Cart.scss";

function Cart() {
  const { user } = useContext(AuthContext);
  const { isShowCart } = useSelector((state) => state.header);
  const cartProducts = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const closeCart = () => {
    const action = setIsShowCart(false);

    dispatch(action);
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
    <div className={isShowCart ? "cart active" : "cart"}>
      <div onClick={closeCart} className="cart__overlay"></div>
      <div className="cart__container">
        <div className="cart__heading">
          <h2 className="cart__title">Shopping Cart</h2>
          <div
            onClick={closeCart}
            className={!isShowCart ? "cart__close active" : "cart__close"}
          ></div>
        </div>

        {cartProducts.length <= 0 && (
          <EmptyCart src={EmptyCartImg} type="shop" />
        )}
        <CartItems />
        <CartHandle />
      </div>
    </div>
  );
}

export default Cart;
