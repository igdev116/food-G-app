import React from "react";
import { useSelector } from "react-redux";

import CartItem from "./CartItem";

import "./CartItems.scss";

function CartItems() {
  const cartProducts = useSelector((state) => state.cart);

  return (
    <div className="cart-items">
      {cartProducts.map((product) => (
        <CartItem key={product.id} {...product} />
      ))}
    </div>
  );
}

export default CartItems;
