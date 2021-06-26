import React from "react";

import PrRedBtn from "components/CusButtons";

import StarIcon from "@material-ui/icons/Star";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import "./ShopProduct.scss";

function ShopProduct() {
  return (
    <div className="shop-product">
      <div className="shop-product__img-wrapper">
        <img
          style={{
            backgroundImage:
              "url(https://d1omecegou7wuo.cloudfront.net/wp-content/uploads/2020/01/featured-honey-soy-chicken-wings.jpg)",
          }}
          className="shop-product__img"
        ></img>
      </div>
      <div className="shop-product__content">
        <div className="shop-product__name">Bacon Burger</div>
        <p className="shop-product__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          velit facere molestiae odit voluptatibus excepturi atque dignissimos
          perspiciatis nobis porro!
        </p>
        <div className="shop-product__row">
          <div className="shop-product__price">$18</div>
          <div className="shop-product__rate">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
        </div>
      </div>
      <div className="shop-product__btns">
        <div className="shop-product__btn">
          <FavoriteBorderIcon />
        </div>
        <div className="shop-product__btn">
          <ShoppingCartOutlinedIcon />
        </div>
      </div>
      <div className="shop-product__label">Favourite</div>
    </div>
  );
}

export default ShopProduct;
