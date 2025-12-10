import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export const fetchJoke = createAsyncThunk("joke/fetchJoke", async () => {
  const res = await fetch("https://official-joke-api.appspot.com/random_joke");
  const data = await res.json();
  return data;
});

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const jokeSlice = createSlice({
  name: "joke",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJoke.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchJoke.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchJoke.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch joke";
      });
  },
});

export default jokeSlice.reducer;
