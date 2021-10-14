import { configureStore } from "@reduxjs/toolkit";
import credReducer from "./credSlice";

const store = configureStore({
  reducer: {
    credentials: credReducer,
  },
});

export default store;
