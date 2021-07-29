import CheckoutProgress from "./CheckoutProgress";
import CheckoutUserInfo from "./CheckoutUserInfo";
import CheckoutForm from "./CheckoutForm";
import CheckoutAside from "./CheckoutAside";
import BackgroundIcon from "components/BackgroundIcon";

import "./styles.scss";

function CheckoutContent() {
  return (
    <div className="checkout-content">
      <div className="checkout-content__left">
        <CheckoutProgress />
        <CheckoutUserInfo />
        <CheckoutForm />
      </div>

      <div className="checkout-content__right">
        <CheckoutAside />
        <BackgroundIcon
          index="8"
          width="25"
          top="25"
          right="-30"
          type="float"
          duration="3"
          zIndex="0"
        />
        <BackgroundIcon
          index="9"
          width="13.5"
          top="5"
          left="40"
          type="scale"
          duration="5"
          zIndex="0"
          delay="1"
        />
        <BackgroundIcon
          index="10"
          width="20"
          bottom="5"
          right="40"
          type="scale"
          duration="5"
          zIndex="0"
          delay="2"
        />
        <BackgroundIcon
          index="11"
          width="15"
          top="60"
          left="-55"
          type="float"
          duration="4"
          zIndex="0"
          delay="1"
        />
      </div>
    </div>
  );
}

export default CheckoutContent;
