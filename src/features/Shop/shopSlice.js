import { SHOP_PRODUCTS_VIEW } from "constants/localStorage";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shopProducts: [],
  shopProductsView: localStorage.getItem(SHOP_PRODUCTS_VIEW) ?? "",
};

const shopSlice = createSlice({
  name: "shop",
  initialState: initialState,
  reducers: {
    setShopProducts: (state, action) => {
      return (state = { ...state, shopProducts: action.payload });
    },
    filterShopByOrder: (state, action) => {
      switch (action.payload) {
        case "price_lth":
          state.shopProducts.sort((a, b) => a.price - b.price);
          break;
        case "price_htl":
          state.shopProducts.sort((a, b) => b.price - a.price);
          break;
        case "rate_lth":
          state.shopProducts.sort((a, b) => a.rate - b.rate);
          break;
        case "rate_htl":
          state.shopProducts.sort((a, b) => b.rate - a.rate);
          break;
        default:
          return state;
      }
    },
    setShopProductsView: (state, action) => {
      localStorage.setItem(SHOP_PRODUCTS_VIEW, action.payload);

      return (state = { ...state, shopProductsView: action.payload });
    },
  },
});

const { reducer, actions } = shopSlice;

export const { setShopProducts, filterShopByOrder, setShopProductsView } =
  actions;
export default reducer;
