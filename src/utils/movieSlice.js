import { createSlice } from "@reduxjs/toolkit";
const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo:null
    },
    reducers:{
        addNowPlayingMovies:(state, action)=>{
            state.nowPlayingMovies= action.payload
        },
        addPopularMovies:(state, action)=>{
            state.popularMovies = action.payload;
        },
        addHorrorMovie:(state, action)=>{
            state.horrorMovies = action.payload;
        },
        addTrendingMovie:(state, action)=>{
            state.trendingMovies = action.payload;
        },
        addUpcomingMovie:(state, action)=>{
            state.upcomingMovies = action.payload;
        },
        addTrailerVideo:(state, action)=>{
            state.trailerVideo = action.payload

        }
    }
})

export const {addNowPlayingMovies, addTrailerVideo, addPopularMovies, addHorrorMovie,addTrendingMovie,addUpcomingMovie} = movieSlice.actions
export default movieSlice.reducer;