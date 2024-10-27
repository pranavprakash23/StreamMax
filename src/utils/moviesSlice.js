import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        movieDetails:{},
        actionMovies:null
    },
    reducers:{
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addMovieDetails: (state, action) => {
            state.movieDetails[action.payload?.results?.imdb_id] = action.payload;
        },
        addActionMovies: (state, action) => {
            state.actionMovies = action.payload;
        },
    }
})

export const {addNowPlayingMovies, addMovieDetails, addActionMovies} = moviesSlice.actions;

export default moviesSlice.reducer;
