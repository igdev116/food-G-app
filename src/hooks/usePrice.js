import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function useTotalPrice() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const cartProducts = useSelector((state) => state.cart);

  // caculate total price
  useEffect(() => {
    const totalPrice = cartProducts.reduce(
      (accumulator, item) => accumulator + item.price * item.qnt,
      0
    );

    const totalQnt = cartProducts.reduce(
      (accumulator, item) => accumulator + item.qnt,
      0
    );

    const fixedTotalPrice = (
      totalPrice *
      (totalQnt >= 5 ? 0.5 : totalQnt >= 3 ? 0.75 : totalQnt >= 2 ? 0.85 : 1)
    ).toFixed(2);

    setTotalPrice(fixedTotalPrice);
    setDiscount((totalPrice - Number(fixedTotalPrice)).toFixed(2));
  }, [cartProducts]);

  return { totalPrice, discount };
}

export default useTotalPrice;
