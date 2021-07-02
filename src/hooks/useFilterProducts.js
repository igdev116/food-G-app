import shopApi from "api/shopApi";
import { filterShop } from "features/Shop/shopSlice";

import { useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { usePrevious } from "./usePrevious";

export const useFilterProducts = () => {
  const dispatch = useDispatch();
  const { name } = useParams();
  const { pathname } = useLocation();

  const prevPathname = usePrevious(pathname);

  return async (params) => {
    try {
      if (pathname !== prevPathname) {
        console.log(name, params);
        const response = await shopApi.getAll(name, params);
        const action = filterShop(response);
        dispatch(action);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
};
