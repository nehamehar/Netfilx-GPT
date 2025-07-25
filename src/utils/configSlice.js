import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({ // <-- This is the corrected line
    name: "config",
    initialState: {
        lang: "en",
    },
    reducers: {
        changeLanguage: (state, action) => {
            state.lang = action.payload;
        }
    }
});

export const { changeLanguage } = configSlice.actions;
export default configSlice.reducer;