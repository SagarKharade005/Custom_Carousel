import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { MOVIES_ID, KEY } from "../../Constant/movies";

const initialState = {
  selectedMovies: [],
};

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  return Promise.allSettled(
    MOVIES_ID.map((id) => {
      return fetch(`https://www.omdbapi.com/?i=${id}&apikey=${KEY}`)
        .then((value) => value.json())
        .then((e) => e);
    })
  ).then((result) => {
    return result;
  });
});

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies(state, action) {
      state.push(action.payload);
    },
    fevoriteMovies(state, action) {
      state.selectedMovies = [...state.selectedMovies, action.payload];
    },
    unfevoriteMovies(state, action) {
      return {
        ...state,
        status: "loading",
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state, action) => {
        state.loading = "true";
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = "false";
        const result = action.payload.reduce((acc, elm) => {
          const { imdbID, Title, Poster } = elm.value;
          return [...acc, { imdbID, Title, Poster }];
        }, []);

        state.allMovies = result;
      });
  },
});

export const { setMovies, fevoriteMovies, unfevoriteMovies } =
  movieSlice.actions;

export default movieSlice.reducer;
