import { createSlice } from "@reduxjs/toolkit";

export const talentSlice = createSlice({
  name: "talent",
  initialState: {
    talentData: {},
    avatar: ''
  },
  reducers: {
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

export const { setTalentData,updateTalent, setAvatar,updateTalentAvailability } = talentSlice.actions;

export default talentSlice.reducer;
