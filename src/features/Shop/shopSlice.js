import { createSlice } from "@reduxjs/toolkit";

const shop = createSlice({
  name: "shop",
  initialState: [],
  reducers: {
    filterShop: (state, action) => {},
  },
});

const { reducer, actions } = shop;

export const { filterShop } = actions;
export default reducer;
