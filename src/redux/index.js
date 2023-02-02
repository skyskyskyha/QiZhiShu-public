import { createSlice } from '@reduxjs/toolkit'

export const SignInSlice = createSlice({
    name: "SignInStatus",
    initialState: {
        hasSignedIn: false,
        token: "",
    },
    reducers: {
        signIn: (state, action) => {
            state.hasSignedIn = true
            state.token = action.payload
        },
        signOut: state => {
            state.hasSignIn = false
        }
    }

})

export const {signIn, signOut} = SignInSlice.actions
export default SignInSlice.reducer