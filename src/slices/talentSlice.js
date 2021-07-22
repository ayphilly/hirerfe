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
    talentData: {},
    avatar: ''
  },
  reducers: {
    setProfileField: (state, action) => {
      const { field, value } = action.payload;
      state.profile[field] = value;
    },
    setTalentData: (state, action) => {
      state.talentData = action.payload;
    },
    setAvatar: (state, action) => {
      state.avatar = action.payload;
    },
    updateTalent(state, action) {
      const {name, value} = action.payload;
      state.talentData.profile[name] = value;
    },
    updateTalentAvailability(state, action) {
      const {id, value} = action.payload;
      state.talentData.profile.availability.id = id;
      state.talentData.profile.availability.value = value;
    }
  },
});

export const { setProfileField, setTalentData,updateTalent, setAvatar,updateTalentAvailability } = talentSlice.actions;

export default talentSlice.reducer;
