import { createSlice } from "@reduxjs/toolkit";

const initialState = { mode: 'light' };

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state, action) => {
      if (state.theme == "light") state.theme = "dark";
      if (state.theme == "dark") state.theme = "light";
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
