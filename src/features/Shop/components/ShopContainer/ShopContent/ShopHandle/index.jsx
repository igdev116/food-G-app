import React, { useRef, useState } from "react";

import { useParams } from "react-router-dom";

import { useFilterProducts } from "hooks/useFilterProducts";

import SearchIcon from "@material-ui/icons/Search";
import ViewList from "@material-ui/icons/ViewList";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import "./ShopHandle.scss";

const dataTypes = [
  {
    value: "Price: Low to High",
    sort: { _sort: "price", _order: "dsc" },
  },
  {
    value: "Price: High to Low",
    sort: "htl",
  },
  {
    value: "Rate: Low to High",
    sort: "lth",
  },
  {
    value: "Rate: High to Low",
    sort: "lth",
  },
];

function ShopHandle() {
  const [isDrop, setIsDrop] = useState(false);
  const ref = useRef();

  const { name } = useParams();

  const filterProducts = useFilterProducts();

  window.addEventListener("click", (e) => {
    if (ref.current.contains(e.target)) {
      setIsDrop(!isDrop);
    } else {
      setIsDrop(false);
    }
  });

  const onFilterProducts = (sort) => {
    filterProducts(name, sort);
  };

  return (
    <div className="shop-handle">
      <form className="shop-handle__search">
        <input placeholder="Search your product" />
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
              onClick={() => onFilterProducts(sort)}
              key={index}
              className="shop-handle__drop-item"
            >
              {value}
            </li>
          ))}
        </ul>
      </div>

      <div className="shop-handle__display-types">
        <ViewList className="shop-handle__display-type" />
        <ViewModuleIcon className="shop-handle__display-type active" />
      </div>
    </div>
  );
}

export default ShopHandle;
