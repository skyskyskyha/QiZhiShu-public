import { createSlice } from '@reduxjs/toolkit'
import store from 'store'
const USER_STORAGE = 'user_storage'

export const SignInSlice = createSlice({
    name: "SignInStatus",
    initialState: {
        hasSignedIn: false,
        token: {},
    },
    reducers: {
        signIn: (state, action) => {
            state.hasSignedIn = true
            state.token = action.payload
            store.set(USER_STORAGE, action.payload)
        },
        signOut: state => {
            state.token = {}
            state.hasSignedIn = false
            store.clearAll()
        }
    }
})

export const {signIn, signOut} = SignInSlice.actions
export default SignInSlice.reducer
