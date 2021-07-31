import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAtCheckout: false,
  isShowCart: false,
};

const headerSlice = createSlice({
  name: "header",
  initialState: initialState,
  reducers: {
    setIsAtCheckout: (state, action) => {
      return (state = { ...state, isAtCheckout: action.payload });
    },
    setIsShowCart: (state, action) => {
      return (state = { ...state, isShowCart: action.payload });
    },
  },
});

const { reducer, actions } = headerSlice;
export const { setIsAtCheckout, setIsShowCart } = actions;
export default reducer;
