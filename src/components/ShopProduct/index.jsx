import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import PropTypes from "prop-types";

import { AuthContext } from "context/AuthProvider";
import { addToCart } from "components/Cart/cartSlice";
import {
  addToastMessage,
  removeToastMessage,
} from "components/ToastMessage/toastMessageSlice";

// react-toastify
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

// lazy load img
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

// material ui icons
import StarIcon from "@material-ui/icons/Star";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import RoomIcon from "@material-ui/icons/Room";

import "./ShopProduct.scss";
import ToastMessage from "components/ToastMessage";

ShopProduct.propsTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  img: PropTypes.string,
  dsc: PropTypes.string,
  price: PropTypes.number,
  rate: PropTypes.number,

  toggleDialog: PropTypes.func,
};

ShopProduct.propsTypes = {
  id: "",
  name: "",
  img: "",
  dsc: "",
  price: 0,
  rate: 0,

  toggleDialog: null,
};

function ShopProduct(props) {
  const { id, name, img, dsc, price, rate, country, toggleDialog } = props;

  const params = useParams();
  const history = useHistory();

  const dispatch = useDispatch();

  const { user } = useContext(AuthContext);

  const handleAddToCart = (type) => {
    if (!user) {
      toggleDialog();
      return;
    }

    const action = addToCart({ id, name, img, dsc, price, rate, country });
    dispatch(action);
    showToastMsg(type);
  };

  const handleToDetail = (id) => {
    history.push(`/shop/${params.name}/${id}`);
  };

  const showToastMsg = (type) => {
    ToastMessage(type);
  };

  return (
    <div id={id} className="shop-product">
      <div
        onClick={() => handleToDetail(id)}
        className="shop-product__img-wrapper"
      >
        <LazyLoadImage
          effect="blur"
          src={img}
          className="shop-product__img"
          alt={name}
          width="100%"
          height="100%"
        ></LazyLoadImage>
        <div className="shop-product__rate">
          <StarIcon />
          <span>{rate}</span>
        </div>
      </div>

      <div onClick={() => handleToDetail(id)} className="shop-product__content">
        <div className="shop-product__name">{name}</div>
        <p className="shop-product__description">{dsc}</p>
        <div className="shop-product__row">
          <div className="shop-product__location">
            <RoomIcon />
            <span>{country}</span>
          </div>
          <div className="shop-product__price">${price}</div>
        </div>
      </div>

      <div className="shop-product__btns">
        <div
          onClick={() => showToastMsg("favourite")}
          className="shop-product__btn"
        >
          <FavoriteBorderIcon />
        </div>
        <div
          onClick={() => handleAddToCart("success")}
          className="shop-product__btn"
        >
          <ShoppingCartOutlinedIcon />
        </div>
      </div>
      <div className="shop-product__label">Favourite</div>
    </div>
  );
}

export default ShopProduct;
