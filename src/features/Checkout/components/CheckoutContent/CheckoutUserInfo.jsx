import { useContext } from "react";

import { AuthContext } from "contexts/AuthProvider";
import { auth } from "configs/firebaseConfig";

// material ui core
import { Avatar, FormControlLabel } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";

import "./CheckoutUserInfo.scss";

function CheckoutInfo() {
  const { user, setUser } = useContext(AuthContext);
  const { displayName, email, photoURL } = user || "";

  const logout = () => {
    auth.signOut().then(() => {
      setUser(false);
    });
  };

  return (
    <div className="checkout-user-info">
      <h2 className="checkout-user-info__title">Contact information</h2>
      <div className="checkout-user-info__container">
        <Avatar src={photoURL} alt="User" />
        <div className="checkout-user-info__content">
          <span className="checkout-user-info__name">{displayName}</span>
          {email && (
            <span className="checkout-user-info__email">({email})</span>
          )}
          <div onClick={logout} className="checkout-user-info__btn">
            Log out
          </div>
        </div>
      </div>
      <FormControlLabel
        className="checkout-user-info__msg"
        control={<Checkbox color="primary" />}
        label="Keep me up to date on news and offers"
      />
    </div>
  );
}

export default CheckoutInfo;
