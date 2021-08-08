import { useContext, useEffect, useState, createContext } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import shopApi from "api/shopApi";
import { setShopProducts } from "features/Shop/shopSlice";
import { PrevFilterContext } from "./PrevFilterProvider";
import { PHONE_BREAKPOINT } from "constants/breakpoints";

// query string
import queryString from "query-string";

const ApiContext = createContext();

const ApiProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [totalRows, setTotalRows] = useState(0);
  const [paginationActive, setPaginationActive] = useState(0);
  const [isAtPhone, setIsAtPhone] = useState(false);

  const dispatch = useDispatch();

  const history = useHistory();

  const { handlePrevious } = useContext(PrevFilterContext);

  const checkIsAtPhone = () => {
    if (window.innerWidth < PHONE_BREAKPOINT) {
      setIsAtPhone(true);
    } else {
      setIsAtPhone(false);
    }
  };

  // handle when user refresh to phone mode
  useEffect(() => {
    window.addEventListener("load", checkIsAtPhone);

    return window.addEventListener("load", checkIsAtPhone);
  }, []);

  // handle when user resize to phone mode
  useEffect(() => {
    window.addEventListener("resize", checkIsAtPhone);

    return window.addEventListener("resize", checkIsAtPhone);
  }, []);

  // call api to get obj have pagination
  useEffect(() => {
    const getPagination = async () => {
      const response = await shopApi.getAll("pagination");
      setTotalRows(response);
    };

    getPagination();
  }, []);

  const getProducts = async (type, params) => {
    const { prevPrice, prevRate, prevSearch } = handlePrevious();
    const currentPagination =
      params && params.hasOwnProperty("_page") && params["_page"];

    const valueWithPage =
      currentPagination && (prevPrice || JSON.parse(prevRate) || prevSearch); // get params when paginate

    try {
      setIsLoading(true);

      const response = await shopApi.getAll(
        type,
        isAtPhone
          ? {
              ...params,
              ...valueWithPage,
            }
          : {
              _limit: 16,
              ...params,
              ...valueWithPage,
            }
      );
      const action = setShopProducts(response);

      dispatch(action);
      setIsLoading(false);
      currentPagination
        ? setPaginationActive(Number(currentPagination) - 1)
        : setPaginationActive(0);

      history.push({
        pathname: type,
        search: queryString.stringify(
          isAtPhone
            ? {
                ...params,
                ...valueWithPage,
              }
            : {
                _limit: 16,
                ...params,
                ...valueWithPage,
              }
        ),
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <ApiContext.Provider
      value={{
        isLoading,
        getProducts,
        totalRows,
        paginationActive,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export { ApiContext };
export default ApiProvider;
