import React, { useState } from "react";

import ShopHandle from "./ShopHandle";
import ShopProducts from "./ShopProducts";

import "./ShopContent.scss";

function ShopContent() {
  const [isFlex, setIsFlex] = useState(false);

  return (
    <div className="shop-content">
      <ShopHandle isFlex={isFlex} setIsFlex={setIsFlex} />
      <ShopProducts isFlex={isFlex} />
    </div>
  );
}

export default ShopContent;
