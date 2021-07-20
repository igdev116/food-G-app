import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "components/Cart/cartSlice";
import shopReducer from "features/Shop/shopSlice";
import detailReducer from "features/Detail/detailSlice";

const rootReducer = {
  shop: shopReducer,
  cart: cartReducer,
  detail: detailReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
