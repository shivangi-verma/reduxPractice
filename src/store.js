import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import themeReducer from "./features/theme/themeSlice";
import jokeReducer from "./features/joke/jokeSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
    joke: jokeReducer,
  },
});
export default store;
