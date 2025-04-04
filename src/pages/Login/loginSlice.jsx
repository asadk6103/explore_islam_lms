import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LOGIN_REQUESTED, LOGIN_SLICE_NAME } from "./constants";

export const loginRequested = createAsyncThunk(LOGIN_REQUESTED, async ({ username, password }) => {
    try {
        // const response = await
        if (username === 'admin' && password === 'admin') {
            return {
                status: 200,
                message: "Success",
                user: {
                    id: 1,
                    full_name: "Administrator",
                    role: "admin"
                }
            }
        } else {
            throw new Error("Unauthorized")
        }
    } catch (err) {
        throw err
    }
})

const loginSlice = createSlice({
    name: LOGIN_SLICE_NAME,
    initialState: {
        isLoggedIn: false,
        user: null
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(loginRequested.fulfilled, (state, action) => {
            state.user = action.payload.user
            state.isLoggedIn = true
        })
    }
})

export const { } = loginSlice.actions

export const getIsLoggedIn = state => state.login.isLoggedIn
export const getUser = state => state.login.user

export default loginSlice.reducer