import React from "react";

import ShopContent from "./ShopContent";
import ShopFilters from "./ShopFilters";

import "./ShopContainer.scss";

function ShopContainer() {
  return (
    <div className="shop-container">
      <ShopFilters />
      <ShopContent />
    </div>
  );
}

export default ShopContainer;
