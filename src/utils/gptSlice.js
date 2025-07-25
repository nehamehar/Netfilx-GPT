import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState:{
        showGptSearch: false,
        movieNames: null,      // To store movie names from Gemini
        movieResults: null,  // To store movie details from TMDB
    },
    reducers:{
        toogleGptSerachView:(state)=>{
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResult: (state, action) => {
            const { movieNames, movieResults } = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        },
        setGptLoading: (state, action) => {
            state.isLoading = action.payload;
        },
    }
})

export const {toogleGptSerachView, addGptMovieResult,setGptLoading} = gptSlice.actions;
export default gptSlice.reducer;