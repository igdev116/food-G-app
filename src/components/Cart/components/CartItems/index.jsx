import React, { useContext } from "react";
import { useSelector } from "react-redux";

import useFirestore from "hooks/useFirestore";
import { AuthContext } from "context/AuthProvider";

import CartItem from "./CartItem";

import "./CartItems.scss";

function CartItems() {
  const cartProducts = useSelector((state) => state.cart);
  const { user } = useContext(AuthContext);

  const { addToFirestore, removeFromFirestore } = useFirestore();

  const handleAddToFirestore = (product, action) => {
    addToFirestore(user.uid, {
      type: "success",
      productInfo: product,
      action: action,
    });
  };

  const handleRemoveFromFirestore = (product) => {
    removeFromFirestore(user.uid, {
      type: "success",
      productInfo: product,
    });
  };

  return (
    <div className="cart-items">
      {cartProducts.map((product) => (
        <CartItem
          handleAddToFirestore={handleAddToFirestore}
          handleRemoveFromFirestore={handleRemoveFromFirestore}
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}

export default CartItems;
