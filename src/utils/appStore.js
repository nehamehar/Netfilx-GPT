import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
const appStore = configureStore(
    {
        reducer:{
            user : userReducer,
        },
    },
)
// as soon as user sign in or out i want to update this to appStore how to do?
export default appStore