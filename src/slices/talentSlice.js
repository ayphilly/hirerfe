import { createSlice } from "@reduxjs/toolkit";

export const talentSlice = createSlice({
  name: "talent",
  initialState: {
    profile: {
      user: {
        name: "",
        send_text: false,
      },
      education: {
        level: "",
        field: "",
        school: "",
        location: "",
        from_month: "",
        from_year: "",
        currently: false,
        to_month: "",
        to_year: "",
      },
      experience: {
        title: "",
        company: "",
        location: "",
        description: "",
        from_month: "",
        from_year: "",
        no_experience: false,
        currently: false,
        to_month: "",
        to_year: "",
      },
      skills: {
        skill: [],
      },
    },
  },
  reducers: {
    setProfileField: (state, action) => {
      const { field, value } = action.payload;
      state.profile[field] = value;
    },
  },
});

export const { setProfileField } = talentSlice.actions;

export default talentSlice.reducer;
