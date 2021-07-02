import shopApi from "api/shopApi";
import { filterShop } from "features/Shop/shopSlice";

import { useDispatch } from "react-redux";

export const useFilterProducts = () => {
  const dispatch = useDispatch();

  return async (type, params) => {
    try {
      const response = await shopApi.getAll(type, params);
      const action = filterShop(response);
      dispatch(action);
    } catch (error) {
      console.log(error.message);
    }
  };
};
