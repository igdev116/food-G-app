import { configureStore } from "@reduxjs/toolkit";

import shopReducer from "features/Shop/shopSlice";
import cartReducer from "components/Cart/cartSlice";
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
