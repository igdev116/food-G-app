import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import { ApiContext } from "context/ApiProvider";
import { usePrevious } from "hooks/usePrevious";

// material ui icons
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
  const { name } = useParams();

  const handlePrevious = usePrevious();
  const { selectedRadio } = handlePrevious();

  const { getProducts } = useContext(ApiContext);

  const onFilterByName = (params) => {
    const { prevName, setPrevName, setSelectedRadio } = handlePrevious(
      "name",
      params
    );

    if (params !== prevName) {
      getProducts(params);
      setSelectedRadio(null);
    }

    setPrevName(params);
  };

  const onFilterByPrice = (params) => {
    const { prevPrice, setPrevPrice } = handlePrevious("price", params);

    if (prevPrice !== params) {
      getProducts(name, params);
    }

    setPrevPrice(params);
  };

  const onFilterByRate = (params) => {
    const stringParams = JSON.stringify(params); // covert to string to compare
    const { prevRate, setPrevRate } = handlePrevious("rate", params);

    if (prevRate !== stringParams) {
      getProducts(name, params);
    }

    setPrevRate(stringParams);
  };

  const handleOptionChange = (e) => {
    const { setSelectedRadio } = handlePrevious();

    setSelectedRadio(e.target.value);
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
            <input
              checked={selectedRadio === info}
              onChange={handleOptionChange}
              className="shop-filters__input"
              type="radio"
              name="Radio"
              value={info}
            />
            <span className="checkmark"></span>
            {info}
          </label>
        ))}
      </form>

      <h2 className="shop-filters__title">Rate</h2>
      <div
        onClick={() => onFilterByRate({ rate_like: 5 })}
        className="shop-filters__stars"
      >
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
      </div>
      <div
        onClick={() => onFilterByRate({ rate_like: 4 })}
        className="shop-filters__stars"
      >
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarBorderIcon />
      </div>
      <div
        onClick={() => onFilterByRate({ rate_like: 3 })}
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
