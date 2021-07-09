import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

// query string
import queryString from "query-string";

import shopApi from "api/shopApi";
import { setShopProducts } from "features/Shop/shopSlice";

const ApiContext = React.createContext();

const ApiProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [totalRows, setTotalRows] = useState(0);
  const [paginationActive, setPaginationActive] = useState(0);
  const dispatch = useDispatch();

  const history = useHistory();

  // call api to get obj have pagination
  useEffect(() => {
    const getPagination = async () => {
      const response = await shopApi.getAll("pagination");
      setTotalRows(response);
    };

    getPagination();
  }, []);

  const getProducts = async (type, params) => {
    const currentPagination =
      params && params.hasOwnProperty("_page") && params["_page"];

    try {
      setIsLoading(true);
      const response = await shopApi.getAll(type, { _limit: 16, ...params });
      const action = setShopProducts(response);

      dispatch(action);
      setIsLoading(false);
      currentPagination && setPaginationActive(Number(currentPagination) - 1);

      history.push({
        pathname: type,
        search: queryString.stringify({ _limit: 16, ...params }),
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
