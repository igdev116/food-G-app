import React from "react";
import PropTypes from "prop-types";

// material ui core
import { Button } from "@material-ui/core";

// material ui icons
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import "./CartItem.scss";

CartItem.propTypes = {
  cartProducts: PropTypes.object,
};

CartItem.defaultProps = {
  cartProducts: {},
};

function CartItem(props) {
  const { id, name, img, price } = props;

  return (
    <div id={id} className="cart-item">
      <div className="cart-item__img">
        <img src={img} alt="Cart product" />
      </div>

      <div className="cart-item__content">
        <div className="cart-item__name">{name}</div>
        <div className="cart-item__price">${price}</div>
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
