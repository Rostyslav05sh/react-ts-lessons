import {configureStore} from "@reduxjs/toolkit";
import {authReducer, carReducer, loadingReducer} from "./slices";

const store = configureStore({
    reducer: {
        auth: authReducer,
        cars: carReducer,
        loadingReducer
    }
})

export {
    store
}