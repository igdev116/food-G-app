import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

// features
import { filterShopByOrder } from "features/Shop/shopSlice";

// custom hooks
import { useFilterProducts } from "hooks/useFilterProducts";

// material ui icons
import SearchIcon from "@material-ui/icons/Search";
import ViewList from "@material-ui/icons/ViewList";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import "./ShopHandle.scss";

ShopHandle.propsTypes = {
  isFlex: PropTypes.bool.isRequired,
  setIsFlex: PropTypes.func.isRequired,
};

const dataTypes = [
  {
    value: "Price: Low to High",
    sort: "price_lth",
  },
  {
    value: "Price: High to Low",
    sort: "price_htl",
  },
  {
    value: "Rate: Low to High",
    sort: "rate_lth",
  },
  {
    value: "Rate: High to Low",
    sort: "rate_htl",
  },
];

function ShopHandle(props) {
  const { isFlex, setIsFlex } = props;
  const [inputValue, setInputValue] = useState("");
  const [isDrop, setIsDrop] = useState(false);
  const ref = useRef();
  const dispatch = useDispatch();

  // custom hooks
  const filterProducts = useFilterProducts();

  const handleClickDrop = (e) => {
    const el = ref.current;

    if (el && el.contains(e.target)) {
      setIsDrop(!isDrop);
    } else {
      setIsDrop(false);
    }
  };

  window.addEventListener("click", handleClickDrop);

  const onFilterBySort = (sort) => {
    const action = filterShopByOrder(sort);
    dispatch(action);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    if (!inputValue) return;
    const query = { name_like: inputValue };

    filterProducts("all", query);
    setInputValue("");
  };

  return (
    <div className="shop-handle">
      <form onSubmit={handleSearch} className="shop-handle__search">
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search your product"
        />
        <button className="shop-handle__search-btn">
          <SearchIcon />
        </button>
      </form>

      <div className="shop-handle__drop">
        <div ref={ref} className="shop-handle__drop-current">
          <span>Featured</span>
          <ExpandMoreIcon />
        </div>

        <ul
          className={
            isDrop ? "shop-handle__drop-list drop" : "shop-handle__drop-list"
          }
        >
          {dataTypes.map(({ value, sort }, index) => (
            <li
              onClick={() => onFilterBySort(sort)}
              key={index}
              className="shop-handle__drop-item"
            >
              {value}
            </li>
          ))}
        </ul>
      </div>

      <div className="shop-handle__display-types">
        <ViewList
          onClick={() => setIsFlex(true)}
          className={
            isFlex
              ? "shop-handle__display-type active"
              : "shop-handle__display-type"
          }
        />
        <ViewModuleIcon
          onClick={() => setIsFlex(false)}
          className={
            isFlex
              ? "shop-handle__display-type"
              : "shop-handle__display-type active"
          }
        />
      </div>
    </div>
  );
}

export default ShopHandle;
