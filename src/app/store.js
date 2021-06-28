import { configureStore } from "@reduxjs/toolkit";

import shopReducer from "features/Shop/shopSlice";

const rootReducer = {
  shop: shopReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
