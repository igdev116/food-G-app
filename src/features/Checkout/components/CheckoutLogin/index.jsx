// material ui core
import { Container } from "@material-ui/core";

import PrimaryButton from "components/PrimaryButton";

import CheckoutLoginSvg from "assets/svgs/Checkout/login.svg";

import "assets/styles/_typography.scss";
import "./styles.scss";

function CheckoutLogin() {
  return (
    <Container>
      <div className="checkout-login">
        <div className="primary-yellow-text">Join with us!!</div>
        <h2 className="primary-heading-text">
          You are not logged in. Please log in and try again!
        </h2>
        <PrimaryButton page="login" subClass="red">
          Login now
        </PrimaryButton>
        <img
          className="checkout-login__img"
          src={CheckoutLoginSvg}
          alt="Login"
        />
      </div>
    </Container>
  );
}

export default CheckoutLogin;
