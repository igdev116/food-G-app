import React, { useState } from "react";
import PropTypes from "prop-types";

import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";

import "./ShopFilters.scss";

ShopFilters.propsTypes = {
  filterProducts: PropTypes.func,
};

ShopFilters.defaultProps = {
  filterProducts: null,
};

const dataTypes = [
  {
    img: "burger.svg",
    name: "Burgers",
    type: "burgers",
  },
  {
    img: "bread.svg",
    name: "Breads",
    type: "breads",
  },
  {
    img: "ice-cream.svg",
    name: "Ice cream",
    type: "ice-cream",
  },
  {
    img: "drinks.svg",
    name: "Drinks",
    type: "drinks",
  },
  {
    img: "pizza.svg",
    name: "Pizzas",
    type: "pizzas",
  },
];

const dataPrices = [
  { info: "Under $100", range: { price_lte: 100 } },
  { info: "$50 to $100", range: { price_gte: 50, price_lte: 100 } },
  { info: "Under $50", range: { price_lte: 50 } },
  { info: "Above $100", range: { price_gte: 100 } },
];

function ShopFilters(props) {
  const { filterProducts } = props;

  const [currentType, setCurrentType] = useState("best-foods");

  const onFilterProducts = (type, params) => {
    setCurrentType(type);
    filterProducts(type, params);
  };

  return (
    <div className="shop-filters">
      <h2 className="shop-filters__title">Popular</h2>
      <ul className="shop-filters__list">
        {dataTypes.map(({ img, name, type }, index) => (
          <li
            key={index}
            onClick={() => onFilterProducts(type)}
            className="shop-filters__item"
          >
            <img src={`/svgs/Shop/${img}`} alt="Shop icons" />
            <span className="shop-filters__item-name">{name}</span>
          </li>
        ))}
      </ul>

      <h2 className="shop-filters__title">Price</h2>
      <form className="shop-filters__form">
        {dataPrices.map(({ info, range }, index) => (
          <label
            onClick={() => onFilterProducts(currentType, range)}
            key={index}
            className="shop-filters__label"
          >
            <input className="shop-filters__input" type="radio" name="price" />
            <span className="checkmark"></span>
            {info}
          </label>
        ))}
      </form>

      <h2 className="shop-filters__title">Rate</h2>
      <div
        onClick={() => onFilterProducts(currentType, { rate_like: 5 })}
        className="shop-filters__stars"
      >
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
      </div>
      <div
        onClick={() => onFilterProducts(currentType, { rate_like: 4 })}
        className="shop-filters__stars"
      >
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarBorderIcon />
      </div>
      <div
        onClick={() => onFilterProducts(currentType, { rate_like: 3 })}
        className="shop-filters__stars"
      >
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarBorderIcon />
        <StarBorderIcon />
      </div>
    </div>
  );
}

export default ShopFilters;
