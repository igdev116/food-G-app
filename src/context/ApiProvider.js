import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

// query string
import queryString from "query-string";

import shopApi from "api/shopApi";
import { setShopProducts } from "features/Shop/shopSlice";
import { PrevFilterContext } from "./PrevFilterProvider";

const ApiContext = React.createContext();

const ApiProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [totalRows, setTotalRows] = useState(0);
  const [paginationActive, setPaginationActive] = useState(0);
  const dispatch = useDispatch();

  const history = useHistory();

  const { handlePrevious } = useContext(PrevFilterContext);

  // call api to get obj have pagination
  useEffect(() => {
    const getPagination = async () => {
      const response = await shopApi.getAll("pagination");
      setTotalRows(response);
    };

    getPagination();
  }, []);

  const getProducts = async (type, params) => {
    const { prevPrice, prevRate } = handlePrevious();
    const currentPagination =
      params && params.hasOwnProperty("_page") && params["_page"];

    const valueWithPage =
      currentPagination && (prevPrice || JSON.parse(prevRate)); // get params of price or value when paginate

    try {
      setIsLoading(true);
      const response = await shopApi.getAll(type, {
        _limit: 16,
        ...params,
        ...valueWithPage,
      });
      const action = setShopProducts(response);

      dispatch(action);
      setIsLoading(false);
      currentPagination
        ? setPaginationActive(Number(currentPagination) - 1)
        : setPaginationActive(0);

      history.push({
        pathname: type,
        search: queryString.stringify({
          _limit: 16,
          ...params,
          ...valueWithPage,
        }),
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
