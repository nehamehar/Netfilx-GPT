import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import movieReducer from "./movieSlice"
const appStore = configureStore(
    {
        reducer:{
            user : userReducer,
            movies: movieReducer,
        },
    },
)
// as soon as user sign in or out i want to update this to appStore how to do?
export default appStore