import React, { useEffect, useState } from "react";

import ShopProduct from "./ShopProduct";

import { useSelector } from "react-redux";

import "./ShopProducts.scss";

function ShopProducts() {
  const [products, setProducts] = useState([]);

  const productData = useSelector((state) => state.shop);

  // set products to render
  useEffect(() => {
    setProducts(productData);
  }, [productData]);

  return (
    <div className="shop-products">
      {productData &&
        productData.map(
          ({ id, img, name, dsc, price, rate, country }, index) => (
            <ShopProduct
              key={index}
              id={id}
              img={img}
              dsc={dsc}
              price={price}
              name={name}
              rate={rate}
              country={country}
            />
          )
        )}
    </div>
  );
}

export default ShopProducts;
