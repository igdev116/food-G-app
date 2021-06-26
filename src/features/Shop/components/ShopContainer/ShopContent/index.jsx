import React from "react";

import ShopHandle from "./ShopHandle";
import ShopProducts from "./ShopProducts";

import "./ShopContent.scss";

function ShopContent() {
  return (
    <div className="shop-content">
      <ShopHandle />
      <ShopProducts />
    </div>
  );
}

export default ShopContent;
