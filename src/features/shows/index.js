import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Type will be have 2 states, Initial (when page loads), search (when user search shows)

const initialState = {
  shows: [],
  loading: true,
  error: false,
  type: "initial",
};

//Async Actions
export const getShows = createAsyncThunk("shows/getShows", () => {
  return fetch("https://api.tvmaze.com/shows?page=0")
    .then((res) => res.json())
    .then((shows) => shows);
});

export const getShowsByQuery = createAsyncThunk(
  "shows/getShowsByQuery",
  (query) => {
    return fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
      .then((res) => res.json())
      .then((shows) => shows);
  }
);

const showSlices = createSlice({
  name: "shows",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getShows.pending, (state) => {
      state.loading = true;
      state.type = "initial";
    });
    builder.addCase(getShows.fulfilled, (state, action) => {
      state.loading = false;
      state.shows = action.payload;
      state.error = false;
      state.type = "initial";
    });
    builder.addCase(getShows.rejected, (state, action) => {
      state.loading = false;
      state.shows = [];
      state.error = action.error.message;
      state.type = "initial";
    });
    //Search By Query
    builder.addCase(getShowsByQuery.pending, (state) => {
      state.loading = true;
      state.type = "search";
    });
    builder.addCase(getShowsByQuery.fulfilled, (state, action) => {
      state.loading = false;

      state.shows = action.payload.map((showsData) => showsData.show);
      state.error = false;
      state.type = "search";
      console.log(action.meta.arg);
    });
    builder.addCase(getShowsByQuery.rejected, (state, action) => {
      state.loading = false;
      state.shows = [];
      state.error = action.error.message;
      state.type = "search";
    });
  },
});

// export const {} = showSlices.actions;
export default showSlices.reducer;
