import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isShowWishlist: false,
  wishlistProducts: [],
};

const wishlistSlice = createSlice({
  name: "wishList",
  initialState: initialState,
  reducers: {
    addToWishlist: (state, action) => {
      return (state = { ...state, wishlistProducts: action.payload });
    },
    setIsShowWishlist: (state, action) => {
      return (state = { ...state, isShowWishlist: action.payload });
    },
  },
});

const { reducer, actions } = wishlistSlice;

export const { addToWishlist, setIsShowWishlist } = actions;
export default reducer;
