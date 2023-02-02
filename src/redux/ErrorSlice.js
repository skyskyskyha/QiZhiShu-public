import { createSlice } from '@reduxjs/toolkit'

export const ErrorSlice = createSlice({
    name: "ErrorStatus",
    initialState: {
        errorOccured: true,
        errorType: 0
    },
    reducers: {
        raiseError: (state, action) => {
            state.errorOccured = true
            state.errorType = action.payload
        },
        resolveError: (state) => {
            state.errorOccured = false
        }
    }

})

export const {raiseError, resolveError} = ErrorSlice.actions
export default ErrorSlice.reducer