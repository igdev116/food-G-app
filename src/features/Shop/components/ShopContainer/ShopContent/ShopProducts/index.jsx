import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

// features
import ShopProduct from "./ShopProduct";

import "./ShopProducts.scss";

ShopProducts.propsTypes = {
  isFlex: PropTypes.bool.isRequired,
};

function ShopProducts(props) {
  const { isFlex } = props;
  const [products, setProducts] = useState([]);

  const productData = useSelector((state) => state.shop);

  // get products from store to render
  useEffect(() => {
    setProducts(productData);
  }, [productData]);

  return (
    <div className={isFlex ? "shop-products display-flex" : "shop-products"}>
      {productData &&
        productData.map((item) => <ShopProduct key={item.index} {...item} />)}
    </div>
  );
}

export default ShopProducts;
