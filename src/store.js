import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import  themeReducer  from "./features/theme/themeSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
  },
});
export default store;
