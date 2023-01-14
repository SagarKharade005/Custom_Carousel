import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../Redux/reducers/moviesReducer";

const store = configureStore({
  reducer: {
    Movies: moviesReducer,
  },
});

export default store;
