import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isLoggedIn: false,
};

const userSlices = createSlice({
  name: "user",
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logOut: (state) => {
      state.user = {};
      state.isLoggedIn = false;
    },
  },
});

export const { logIn, logOut } = userSlices.actions;
export default userSlices.reducer;
