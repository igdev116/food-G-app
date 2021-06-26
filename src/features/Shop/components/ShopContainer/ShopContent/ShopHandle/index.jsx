import React from "react";

import SearchIcon from "@material-ui/icons/Search";
import ViewList from "@material-ui/icons/ViewList";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import "./ShopHandle.scss";

function ShopHandle() {
  return (
    <div className="shop-handle">
      <form className="shop-handle__search">
        <input placeholder="Search your product" />
        <button className="shop-handle__search-btn">
          <SearchIcon />
        </button>
      </form>

      <div className="shop-handle__drop">
        <div className="shop-handle__drop-current">
          <span>Featured</span>
          <ExpandMoreIcon />
        </div>

        <ul className="shop-handle__drop-list">
          <li className="shop-handle__drop-item">Price: Low to High</li>
          <li className="shop-handle__drop-item">Price: Low to High</li>
          <li className="shop-handle__drop-item">Price: Low to High</li>
          <li className="shop-handle__drop-item">Price: Low to High</li>
        </ul>
      </div>

      <div className="shop-handle__display-types">
        <ViewList className="shop-handle__display-type active" />
        <ViewModuleIcon className="shop-handle__display-type" />
      </div>
    </div>
  );
}

export default ShopHandle;
