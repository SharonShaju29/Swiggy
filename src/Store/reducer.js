import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMobile: false,
};

const mainReducer = createSlice({
  name: "mainReducer",
  initialState,
  reducers: {
    isMobile: (state, value) => {
      state.isMobile = value.payload;
    },
  },
});

export const { isMobile } = mainReducer.actions;

export default mainReducer.reducer;
