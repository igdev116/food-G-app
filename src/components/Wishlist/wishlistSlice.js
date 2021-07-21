import { createSlice } from "@reduxjs/toolkit";

const wishlist = createSlice({
  name: "wishList",
  initialState: [],
  reducers: {
    addTowishlist: (state, action) => {
      return (state = action.payload);
    },
  },
});

const { reducer, actions } = wishlist;

export const { addToWishlist } = actions;
export default reducer;
