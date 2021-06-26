import React from "react";

import ShopProduct from "./ShopProduct";

import "./ShopProducts.scss";

function ShopProducts() {
  return (
    <div className="shop-products">
      <ShopProduct />
      <ShopProduct />
      <ShopProduct />
      <ShopProduct />
      <ShopProduct />
      <ShopProduct />
    </div>
  );
}

export default ShopProducts;
