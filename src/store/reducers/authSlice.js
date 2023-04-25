import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authState: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authorized: state => {state.authState = true},
    unAuthorized: state => {state.authState = false}
  }
})

export const {authorized, unAuthorized} = authSlice.actions
export default authSlice.reducer