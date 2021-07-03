import React, { useEffect } from "react";

import ShopContent from "./ShopContent";
import ShopFilters from "./ShopFilters";

import { useParams } from "react-router-dom";

import { useFilterProducts } from "hooks/useFilterProducts";

import "./ShopContainer.scss";

function ShopContainer() {
  const { name } = useParams();

  const filterProducts = useFilterProducts();

  useEffect(() => {
    const params = {
      _limit: 10,
    };

    filterProducts(name, params);
  }, [name, filterProducts]);

  return (
    <div className="shop-container">
      <ShopFilters />
      <ShopContent />
    </div>
  );
}
// https://felixgerschau.com/react-rerender-components/#:~:text=In%20function%20components%2C%20the%20execution,t%20even%20receive%20any%20props.
export default ShopContainer;
