import { createSlice } from "@reduxjs/toolkit";

const detail = createSlice({
  name: "detail",
  initialState: [],
  reducers: {
    setDetailProducts: (state, action) => {
      return action.payload;
    },
  },
});

const { reducer, actions } = detail;

export const { setDetailProducts } = actions;
export default reducer;
