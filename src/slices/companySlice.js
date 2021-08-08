import { createSlice } from "@reduxjs/toolkit";

export const companySlice = createSlice({
  name: "company",
  initialState: {
    dashboard:{},
    myjobs: {},
  },
  reducers: {
    setDashboard: (state, action) => {
      state.dashboard = action.payload;
    },
  },
});

export const { setDashboard } = companySlice.actions;

export default companySlice.reducer;
