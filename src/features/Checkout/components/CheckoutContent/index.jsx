import { useState } from "react";
import { useSelector } from "react-redux";

import CheckoutProgress from "./CheckoutProgress";
import CheckoutUserInfo from "./CheckoutUserInfo";
import CheckoutForm from "./CheckoutForm";
import CheckoutAside from "./CheckoutAside";
import CheckoutSuccess from "../CheckoutSuccess";
import BackgroundIcon from "components/BackgroundIcon";

import {
  BackgroundIconBlurOne,
  BackgroundIconBlurTwo,
  BackgroundIconBlurThree,
  BackgroundIconBlurFour,
} from "utils/backgroundIcons";

import "./styles.scss";

function CheckoutContent() {
  const [isCheckoutSuccess, setIsCheckoutSuccess] = useState(false);
  const [isPurchased, setIsPurchased] = useState(false);
  const cartProducts = useSelector((state) => state.cart);

  if (isPurchased) return <CheckoutSuccess />;

  return (
    <div className="checkout-content">
      <div className="checkout-content__left">
        <CheckoutProgress isCheckoutSuccess={isCheckoutSuccess} />
        <CheckoutUserInfo />
        <CheckoutForm
          setIsCheckoutSuccess={setIsCheckoutSuccess}
          setIsPurchased={setIsPurchased}
        />
      </div>

      <div
        className="checkout-content__right"
        style={{ paddingTop: cartProducts.length > 0 ? "95px" : "60px" }}
      >
        <CheckoutAside />
        <BackgroundIcon
          src={BackgroundIconBlurOne}
          width="25"
          top="25"
          right="-30"
          type="float"
          duration="3"
          zIndex="0"
        />
        <BackgroundIcon
          src={BackgroundIconBlurTwo}
          width="18"
          bottom="30"
          left="5"
          type="float"
          duration="4"
          zIndex="0"
          delay="1"
        />
        <BackgroundIcon
          src={BackgroundIconBlurThree}
          width="20"
          bottom="5"
          right="40"
          type="scale"
          duration="6"
          zIndex="0"
          delay="2"
        />
        <BackgroundIcon
          src={BackgroundIconBlurFour}
          width="12.5"
          top="5"
          left="30"
          type="scale"
          duration="5"
          zIndex="0"
          delay="1"
        />
      </div>
    </div>
  );
}

export default CheckoutContent;
