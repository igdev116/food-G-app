import React, { useState } from "react";

import { useFilterProducts } from "hooks/useFilterProducts";
import { usePrevious } from "hooks/usePrevious";

import { useHistory, useParams } from "react-router-dom";

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
  const { name } = useParams();

  const [prevName, setPrevName] = useState(null);
  const [prevPrice, setPrevPrice] = useState(null);

  const filterProducts = useFilterProducts();

  const onFilterByName = (name) => {
    new Promise((resolve) => resolve(setPrevName(name))).then(() => {
      if (name !== prevName) {
        filterProducts(name);
        history.push(name);
        console.log("IF:");
      }
    });
  };

  const onFilterByPrice = (params) => {
    new Promise((resolve) => resolve(setPrevPrice(params))).then(() => {
      // console.log("INSIDE:", prevPrice, params, prevPrice !== params);
      if (prevPrice !== params) {
        filterProducts(name, params);
      }
    });
  };

  return (
    <div className="shop-filters">
      <h2 className="shop-filters__title">Popular</h2>
      <ul className="shop-filters__list">
        {dataTypes.map(({ img, name, type }, index) => (
          <li
            key={index}
            onClick={() => onFilterByName(type)}
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
            onClick={() => onFilterByPrice(range)}
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
        // onClick={() => onFilterByType({ rate_like: 5 })}
        className="shop-filters__stars"
      >
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
      </div>
      <div
        // onClick={() => onFilterByType({ rate_like: 4 })}
        className="shop-filters__stars"
      >
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarBorderIcon />
      </div>
      <div
        // onClick={() => onFilterByType({ rate_like: 3 })}
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
