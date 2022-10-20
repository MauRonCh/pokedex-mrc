import { configureStore } from "@reduxjs/toolkit";
import username from "./slices/username.slice";

export default configureStore({
    reducer:{
        username
    }
})