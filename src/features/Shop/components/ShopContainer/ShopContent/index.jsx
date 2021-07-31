import React, { useState } from "react";
import { useSelector } from "react-redux";

import ShopHandle from "./ShopHandle";
import ShopProducts from "./ShopProducts";
import Pagination from "./Pagination";

import "./ShopContent.scss";

function ShopContent() {
  const [isFlex, setIsFlex] = useState(false);
  const products = useSelector((state) => state.shop.shopProducts);

  return (
    <div className="shop-content">
      <ShopHandle isFlex={isFlex} setIsFlex={setIsFlex} />
      <ShopProducts isFlex={isFlex} />
      {products.length > 0 && <Pagination />}
    </div>
  );
}

export default ShopContent;
