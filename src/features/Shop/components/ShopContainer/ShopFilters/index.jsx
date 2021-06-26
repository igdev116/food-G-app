import React, { useState } from "react";

import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";

import "./ShopFilters.scss";

function ShopFilters() {
  const [value, setValue] = useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="shop-filters">
      <h2 className="shop-filters__title">Popular</h2>
      <ul className="shop-filters__list">
        <li className="shop-filters__item">
          <img src="/svgs/Shop/burger.svg" alt="shop-icon" />
          <span className="shop-filters__item-name">Burgers</span>
        </li>
        <li className="shop-filters__item">
          <img src="/svgs/Shop/coffee.svg" alt="shop-icon" />
          <span className="shop-filters__item-name">Coffees</span>
        </li>
        <li className="shop-filters__item">
          <img src="/svgs/Shop/ice-cream.svg" alt="shop-icon" />
          <span className="shop-filters__item-name">Ice cream</span>
        </li>
        <li className="shop-filters__item">
          <img src="/svgs/Shop/drink.svg" alt="shop-icon" />
          <span className="shop-filters__item-name">Cold drinks</span>
        </li>
        <li className="shop-filters__item">
          <img src="/svgs/Shop/pizza.svg" alt="shop-icon" />
          <span className="shop-filters__item-name">Pizza</span>
        </li>
      </ul>

      <h2 className="shop-filters__title">Price</h2>
      <form className="shop-filters__form">
        <label className="shop-filters__label">
          <input className="shop-filters__input" type="radio" name="price" />
          <span className="checkmark"></span>
          Unger $100
        </label>

        <label className="shop-filters__label">
          <input className="shop-filters__input" type="radio" name="price" />
          <span className="checkmark"></span>
          Unger $100
        </label>

        <label className="shop-filters__label">
          <input className="shop-filters__input" type="radio" name="price" />
          <span className="checkmark"></span>
          Unger $100
        </label>

        <label className="shop-filters__label">
          <input className="shop-filters__input" type="radio" name="price" />
          <span className="checkmark"></span>
          Unger $100
        </label>
      </form>

      <h2 className="shop-filters__title">Rate</h2>
      <div className="shop-filters__stars">
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
      </div>
      <div className="shop-filters__stars">
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarBorderIcon />
      </div>
      <div className="shop-filters__stars">
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
