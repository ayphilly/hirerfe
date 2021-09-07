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
    updateAvatar: (state, action) => {
      state.dashboard.data.company_data.avatar = action.payload;
    },
    updateEmpAccount(state, action) {
      const {name, value} = action.payload;
      state.dashboard.data.company_data[name] = value;
    },
    updateEmpProfile(state, action) {
      const {name, value} = action.payload;
      state.dashboard.data.company_data.profile[name] = value;
    },
  },
});

export const { setDashboard, updateEmpAccount, updateAvatar, updateEmpProfile } = companySlice.actions;

export default companySlice.reducer;
