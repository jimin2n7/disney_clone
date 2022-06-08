import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./moviesSlice";
import userSlice from "./userSlice";

export const store = configureStore({
    reducer:{
        movie: moviesSlice,
        user: userSlice,
    }
})