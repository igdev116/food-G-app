import { useState } from "react";
import { useSelector } from "react-redux";

import ShopHandle from "./ShopHandle";
import ShopProducts from "./ShopProducts";
import ShopPagination from "./ShopPagination";

import "./styles.scss";

function ShopContent() {
  const [isFlex, setIsFlex] = useState(false);
  const products = useSelector((state) => state.shop.shopProducts);

  return (
    <div className="shop-content">
      <ShopHandle isFlex={isFlex} setIsFlex={setIsFlex} />
      <ShopProducts isFlex={isFlex} />
      {products.length > 0 && <ShopPagination />}
    </div>
  );
}

export default ShopContent;
