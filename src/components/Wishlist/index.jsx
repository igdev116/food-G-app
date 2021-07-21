import React from "react";
import PropTypes from "prop-types";

// material ui core
import { Button } from "@material-ui/core";

// material ui icons
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import RadioOutlinedIcon from "@material-ui/icons/RadioOutlined";

import "./Wishlist.scss";

Wishlist.propTypes = {
  isShowWishlist: PropTypes.bool,
  setIsShowWishlist: PropTypes.func,
};

Wishlist.defaultProps = {
  isShowWishlist: false,
  setIsShowWishlist: null,
};

function Wishlist(props) {
  const { isShowWishlist, setIsShowWishlist } = props;

  const img =
    "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/137148/Gramercy-Tavern-Burger-and-Kielbasa-Kit-6.4.21-72ppi-1x1-15.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1";

  return (
    <div className={isShowWishlist ? "wishlist active" : "wishlist"}>
      <div className="wishlist__top">
        <div className="wishlist__shop">
          <RadioOutlinedIcon />
          <span>Your wishlist</span>
        </div>

        <Button onClick={() => setIsShowWishlist(false)}>
          <ExitToAppOutlinedIcon />
        </Button>
      </div>

      <div className="wishlist__items">
        <div className="wishlist__item">
          <div className="wishlist__img">
            <img src={img} alt="" />
          </div>
          <div className="wishlist__content">
            <span className="wishlist__name">Commander's Palace</span>
            <p className="wishlist__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae quo voluptates ducimus reiciendis perspiciatis eligendi
              nisi, expedita accusantium molestias ullam.
            </p>
            <span className="wishlist__price">$89.00</span>
          </div>

          <Button className="wishlist__rm">
            <DeleteOutlineIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
