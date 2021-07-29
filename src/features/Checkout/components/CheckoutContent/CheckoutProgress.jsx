// material ui icons
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import ListAltIcon from "@material-ui/icons/ListAlt";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

import "./CheckoutProgress.scss";

function CheckoutProgress() {
  return (
    <div className="checkout-progress">
      <div className="checkout-progress__node">
        <div className="checkout-progress__icon">
          <PeopleAltIcon />
        </div>
        <span className="checkout-progress__description">Login</span>
      </div>
      <span className="checkout-progress__line"></span>
      <div className="checkout-progress__node">
        <div className="checkout-progress__icon">
          <ListAltIcon />
        </div>
        <span className="checkout-progress__description">Confirm</span>
      </div>
      <span className="checkout-progress__line"></span>
      <div className="checkout-progress__node">
        <div className="checkout-progress__icon">
          <ThumbUpIcon />
        </div>
        <span className="checkout-progress__description">Success!</span>
      </div>
    </div>
  );
}

export default CheckoutProgress;
