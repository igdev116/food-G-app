import { configureStore } from "@reduxjs/toolkit";

import shopReducer from "features/Shop/shopSlice";
import cartReducer from "components/Cart/cartSlice";

const rootReducer = {
  shop: shopReducer,
  cart: cartReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
