import PrimaryButton from "components/PrimaryButton";

// material ui core
import { Container } from "@material-ui/core";

import "./styles.scss";
import "assets/styles/_typography.scss";

function CheckoutLogin() {
  return (
    <Container>
      <div className="checkout-login">
        <div className="pr-yellow-text">Join with us!!</div>
        <h2 className="pr-heading-text">
          You are not logged in. Please log in and try again!
        </h2>
        <PrimaryButton subClass="red">Login now</PrimaryButton>
        <img
          className="checkout-login__img"
          src="/svgs/Checkout/login.svg"
          alt="Login"
        />
      </div>
    </Container>
  );
}

export default CheckoutLogin;
