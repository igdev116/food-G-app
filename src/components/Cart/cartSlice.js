import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {},
  },
});

const { reducer, actions } = cart;

export const { addToCart } = actions;
export default reducer;
