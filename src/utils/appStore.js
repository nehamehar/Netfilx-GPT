import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import movieReducer from "./movieSlice"
import gptReducer from "./gptSlice"
import configReducer from "./configSlice"
const appStore = configureStore(
    {
        reducer:{
            user : userReducer,
            movies: movieReducer,
            gpt: gptReducer,
            config: configReducer,
        },
    },
)
// as soon as user sign in or out i want to update this to appStore how to do?
export default appStore