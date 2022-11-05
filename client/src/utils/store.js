import { configureStore } from "@reduxjs/toolkit";
import allReducers from "./reducers";

const store = configureStore({
    reducer: allReducers,
});

export default store;