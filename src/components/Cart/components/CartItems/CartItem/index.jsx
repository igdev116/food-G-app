import React from "react";

// material ui core
import { Button } from "@material-ui/core";

// material ui icons
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import "./CartItem.scss";

function CartItem() {
  const img =
    "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/137148/Gramercy-Tavern-Burger-and-Kielbasa-Kit-6.4.21-72ppi-1x1-15.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1";

  return (
    <div className="cart-item">
      <div className="cart-item__img">
        <img src={img} alt="Cart product" />
      </div>

      <div className="cart-item__content">
        <div className="cart-item__name">Lorem ipsum dolor</div>
        <div className="cart-item__price">$20.00</div>
        <div className="cart-item__handle">
          <Button>
            <AddIcon />
          </Button>
          <span className="cart-item__qnt">100</span>
          <Button>
            <RemoveIcon />
          </Button>
        </div>
      </div>

      <Button className="cart-item__rm">
        <DeleteOutlineIcon />
      </Button>
    </div>
  );
}

export default CartItem;
