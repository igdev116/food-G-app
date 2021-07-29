import { useContext } from "react";

import { AuthContext } from "context/AuthProvider";

import CheckoutBanner from "./components/CheckoutBanner";
import CheckoutContent from "./components/CheckoutContent";

import "./Checkout.scss";

function Checkout() {
  const { setIsCheckout } = useContext(AuthContext);

  setIsCheckout(true);

  return (
    <div className="checkout">
      <CheckoutBanner />
      <CheckoutContent />
    </div>
  );
}

export default Checkout;
