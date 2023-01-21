import { createSlice } from "@reduxjs/toolkit";

const darkmodeSlice = createSlice({
  name: "Dark and Light mode",
  initialState: {
    darkmode: false,
  },
  reducers: {
    toggleMode: (state, action) => {
      return (state.darkmode = !state.darkmode);
    },
  },
});

export const { toggleMode } = darkmodeSlice.actions;

export default darkmodeSlice.reducer;
