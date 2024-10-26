import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        movieDetails:null,
    },
    reducers:{
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addMovieDetails: (state, action) => {
            state.movieDetails = action.payload;
        },
    }
})

export const {addNowPlayingMovies, addMovieDetails} = moviesSlice.actions;

export default moviesSlice.reducer;
