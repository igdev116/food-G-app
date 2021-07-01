import React, { useEffect } from "react";

import ShopContent from "./ShopContent";
import ShopFilters from "./ShopFilters";
import shopApi from "api/shopApi";
import { filterShop } from "features/Shop/shopSlice";

import { useDispatch } from "react-redux";

import "./ShopContainer.scss";

function ShopContainer() {
  const dispatch = useDispatch();

  const filterByTypes = async (type) => {
    const response = await shopApi.getAll(type);
    const action = filterShop(response);
    dispatch(action);
  };

  const filterByPrices = async (type, params) => {
    try {
      const response = await shopApi.getAll(type, params);
      const action = filterShop(response);
      dispatch(action);
    } catch (error) {
      console.log(error.message);
    }
  };

  const filterByRatings = async (type, params) => {
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
      <ShopFilters
        filterByTypes={filterByTypes}
        filterByPrices={filterByPrices}
        filterByRatings={filterByRatings}
      />
      <ShopContent />
    </div>
  );
}

export default ShopContainer;
