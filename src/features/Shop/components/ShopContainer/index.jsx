import React, { useEffect } from "react";

import ShopContent from "./ShopContent";
import ShopFilters from "./ShopFilters";
import shopApi from "api/shopApi";
import { filterShop } from "features/Shop/shopSlice";

import { useDispatch } from "react-redux";

import "./ShopContainer.scss";

function ShopContainer() {
  const dispatch = useDispatch();

  const filterProducts = async (type, params) => {
    try {
      const response = await shopApi.getAll(type, params);
      const action = filterShop(response);
      dispatch(action);
    } catch (error) {
      console.log(error.message);
    }
  };

  // initial products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const params = {
          _limit: 15,
        };
        console.log(params);

        const response = await shopApi.getAll("best-foods", params);
        const action = filterShop(response);
        dispatch(action);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="shop-container">
      <ShopFilters filterProducts={filterProducts} />
      <ShopContent />
    </div>
  );
}

export default ShopContainer;
