import { configureStore } from "@reduxjs/toolkit";
import darkmodeSlice from "../Slices/darkmodeSlice";

const store = configureStore({
  reducer: {
    togglemode: darkmodeSlice,
  },
});

export default store;
