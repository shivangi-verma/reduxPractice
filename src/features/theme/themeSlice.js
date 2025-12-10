import { createSlice } from "@reduxjs/toolkit";

const initialState = { mode: "light" };

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state, action) => {
      if (state.mode === "light") state.mode = "dark";
      else state.mode = "light";
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
