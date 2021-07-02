import React, { useState } from "react";

import { useFilterProducts } from "hooks/useFilterProducts";

import { useHistory } from "react-router-dom";

import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";

import "./ShopFilters.scss";

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

function ShopFilters() {
  const history = useHistory();

  const filterProducts = useFilterProducts();

  const onFilterProducts = (params) => {
    filterProducts(params);
  };

  const onFilterProductsByType = (type) => {
    history.push(type);
    filterProducts();
  };

  return (
    <div className="shop-filters">
      <h2 className="shop-filters__title">Popular</h2>
      <ul className="shop-filters__list">
        {dataTypes.map(({ img, name, type }, index) => (
          <li
            key={index}
            onClick={() => onFilterProductsByType(type)}
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
            onClick={() => onFilterProducts(range)}
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
        onClick={() => onFilterProducts({ rate_like: 5 })}
        className="shop-filters__stars"
      >
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
      </div>
      <div
        onClick={() => onFilterProducts({ rate_like: 4 })}
        className="shop-filters__stars"
      >
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarBorderIcon />
      </div>
      <div
        onClick={() => onFilterProducts({ rate_like: 3 })}
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
