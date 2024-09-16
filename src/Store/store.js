import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./reducer";

const store = configureStore({
  reducer: {
    mainReducer: mainReducer,
  },
});

export default store;
