import { createSlice } from "@reduxjs/toolkit";

const shop = createSlice({
  name: "shop",
  initialState: [],
  reducers: {
    getShopProducts: (state, action) => {
      return (state = action.payload);
    },
    filterShopByOrder: (state, action) => {
      switch (action.payload) {
        case "price_lth":
          state.sort((a, b) => a.price - b.price);
          break;
        case "price_htl":
          state.sort((a, b) => b.price - a.price);
          break;
        case "rate_lth":
          state.sort((a, b) => a.rate - b.rate);
          break;
        case "rate_htl":
          state.sort((a, b) => b.rate - a.rate);
          break;
        default:
          return state;
      }
    },
  },
});

const { reducer, actions } = shop;

export const { getShopProducts, filterShopByOrder } = actions;
export default reducer;
