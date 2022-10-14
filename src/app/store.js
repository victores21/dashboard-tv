import { configureStore } from "@reduxjs/toolkit";

//Slices
import showSlices from "../features/shows";

const store = configureStore({
  reducer: {
    shows: showSlices,
  },
});

export default store;
