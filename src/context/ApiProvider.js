import React, { useState } from "react";

import shopApi from "api/shopApi";
import { setShopProducts } from "features/Shop/shopSlice";

import { useDispatch } from "react-redux";

const ApiContext = React.createContext();

const ApiProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  const getProducts = async (type, params) => {
    try {
      setIsLoading(true);
      const response = await shopApi.getAll(type, params);
      const action = setShopProducts(response);
      dispatch(action);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <ApiContext.Provider value={{ isLoading, getProducts }}>
      {children}
    </ApiContext.Provider>
  );
};

export { ApiContext };
export default ApiProvider;
