import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import companyReducer from "../slices/companySlice";
import talentReducer from "../slices/talentSlice";
import resetpasswordReducer from "../slices/resetpasswordSlice";
import avatarReducer from "../slices/avatarSlice";

function saveToLocalStorage(state) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("redux-state", serialisedState);
  } catch (e) {
    console.warn(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem("redux-state");
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

const store = configureStore({
  reducer: {
    auth: authReducer,
    company: companyReducer,
    talent: talentReducer,
    resetpassword: resetpasswordReducer,
    avatar: avatarReducer,
  },
  devTools: true,
  preloadedState: loadFromLocalStorage(),
});

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
