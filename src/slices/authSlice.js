import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: "",
    authData: {},
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setAuthData: (state, action) => {
      state.authData = action.payload;
    },
  },
});

export const { setToken, setAuthData } = authSlice.actions;

export default authSlice.reducer;
