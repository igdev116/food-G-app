import { useContext } from "react";

import { AuthContext } from "context/AuthProvider";

// material ui core
import { Avatar } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";

import "./CheckoutUserInfo.scss";

function CheckoutInfo() {
  const { user } = useContext(AuthContext);
  const { displayName, email, photoURL } = user || "";

  return (
    <div className="checkout-user-info">
      <h2 className="checkout-user-info__title">Contact information</h2>
      <div className="checkout-user-info__container">
        <Avatar src={photoURL} alt="User" />
        <div className="checkout-user-info__content">
          <span className="checkout-user-info__name">{displayName}</span>
          <span className="checkout-user-info__email">({email})</span>
          <div className="checkout-user-info__btn">Log out</div>
        </div>
      </div>
      <div className="checkout-user-info__msg">
        <Checkbox color="primary" />
        <span>Keep me up to date on news and offers</span>
      </div>
    </div>
  );
}

export default CheckoutInfo;
