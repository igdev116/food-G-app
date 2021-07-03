import shopApi from "api/shopApi";
import { getShopProducts } from "features/Shop/shopSlice";

import { useDispatch } from "react-redux";

export const useFilterProducts = () => {
  const dispatch = useDispatch();

  return async (type, params) => {
    try {
      const response = await shopApi.getAll(type, params);
      const action = getShopProducts(response);
      dispatch(action);
    } catch (error) {
      console.log(error.message);
    }
  };
};
