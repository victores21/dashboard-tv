import { configureStore } from "@reduxjs/toolkit";

//Slices
import showSlices from "../features/shows";
import userSlices from "../features/user";

const store = configureStore({
  reducer: {
    shows: showSlices,
    user: userSlices,
  },
});

export default store;
