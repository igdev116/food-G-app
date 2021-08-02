import { configureStore } from "@reduxjs/toolkit";

import headerReducer from "components/Header/headerSlice";
import cartReducer from "components/Cart/cartSlice";
import wishlistReducer from "components/Wishlist/wishlistSlice";
import shopReducer from "features/Shop/shopSlice";
import detailReducer from "features/Detail/detailSlice";

const rootReducer = {
  header: headerReducer,
  shop: shopReducer,
  cart: cartReducer,
  detail: detailReducer,
  wishlist: wishlistReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
