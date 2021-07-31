import { createSlice } from "@reduxjs/toolkit";

const detailSlice = createSlice({
  name: "detail",
  initialState: [],
  reducers: {
    setDetailProducts: (state, action) => {
      return action.payload;
    },
  },
});

const { reducer, actions } = detailSlice;

export const { setDetailProducts } = actions;
export default reducer;
