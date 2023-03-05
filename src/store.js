import { configureStore } from "@reduxjs/toolkit";
import SignInSliceReducer from "./redux/SignInSlice";
import ErrorReducer from "./redux/ErrorSlice"
export default configureStore({
    reducer: {
        SignInStatus: SignInSliceReducer,
        ErrorStatus: ErrorReducer
    }
})
