import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      return (state = action.payload);
    },
  },
});

const { reducer, actions } = cartSlice;

export const { addToCart } = actions;
export default reducer;
