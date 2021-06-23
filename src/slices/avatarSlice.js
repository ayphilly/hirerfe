import { createSlice } from "@reduxjs/toolkit";

export const avatarSlice = createSlice({
  name: "avatar",
  initialState: {
    avatar: '',
  },
  reducers: {
    setAvatar: (state, action) => {
      state.avatar = action.payload;
    }
  },
});

export const { setAvatar } = avatarSlice.actions;

export default avatarSlice.reducer;