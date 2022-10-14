import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  shows: [],
  loading: true,
  error: false,
};

//Async Actions
export const getShows = createAsyncThunk("shows/getShows", () => {
  return fetch("https://api.tvmaze.com/shows?page=0")
    .then((res) => res.json())
    .then((shows) => shows);
});

const showSlices = createSlice({
  name: "shows",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getShows.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getShows.fulfilled, (state, action) => {
      state.loading = false;
      state.shows = action.payload;
      state.error = false;
    });
    builder.addCase(getShows.rejected, (state, action) => {
      state.loading = false;
      state.shows = [];
      state.error = action.error.message;
    });
  },
});

// export const {} = showSlices.actions;
export default showSlices.reducer;
