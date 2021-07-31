import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

import { ApiContext } from "contexts/ApiProvider";
import { setIsAtCheckout, setIsShowCart } from "components/Header/headerSlice";
import { setIsShowWishlist } from "components/Wishlist/wishlistSlice";

// material ui core
import { Button } from "@material-ui/core";

import "./PrimaryButton.scss";

function PrimaryButton(props) {
  const { page, subClass, children } = props;

  const dispatch = useDispatch();

  const history = useHistory();

  const { getProducts } = useContext(ApiContext);

  const handleMovePage = () => {
    const cartAction = setIsShowCart(false);
    const wishlistAction = setIsShowWishlist(false);

    dispatch(cartAction);
    dispatch(wishlistAction);

    if (page === "shop") {
      const action = setIsAtCheckout(false);

      history.push("/shop/best-foods");
      getProducts("best-foods");
      dispatch(action);
    } else if (page === "checkout") {
      const action = setIsAtCheckout(true);

      history.push("/checkout");
      dispatch(action);
    }
  };

  return (
    <Button
      onClick={handleMovePage}
      className={`primary-btn ${subClass || ""}`}
    >
      {children}
    </Button>
  );
}

PrimaryButton.propsTypes = {
  page: PropTypes.string,
  subClass: PropTypes.string,
};

PrimaryButton.defaultProps = {
  page: "",
  subClass: "",
};

export default PrimaryButton;
