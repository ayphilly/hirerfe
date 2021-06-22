import { createSlice } from "@reduxjs/toolkit";

export const resetpasswordSlice = createSlice({
  name: "resetpassword",
  initialState: {
    email: '',
  },
  reducers: {
    setMail: (state, action) => {
      state.email = action.payload;
    }
  },
});

export const { setMail } = resetpasswordSlice.actions;

export default resetpasswordSlice.reducer;