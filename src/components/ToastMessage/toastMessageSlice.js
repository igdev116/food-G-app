import { createSlice } from "@reduxjs/toolkit";

const toastMessage = createSlice({
  name: "toastMessage",
  initialState: [],
  reducers: {
    addToastMessage: (state, action) => {
      state.push(action.payload);
    },
    removeToastMessage: (state, action) => {
      state.shift();
    },
  },
});

const { reducer, actions } = toastMessage;

export const { addToastMessage, removeToastMessage } = actions;
export default reducer;
