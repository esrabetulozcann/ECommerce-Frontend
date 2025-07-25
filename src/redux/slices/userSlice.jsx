import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false, // EKLENDİ
  userInfo: {
    firstName: "Esra Betül",
    lastName: "Özcan",
    email: "esrabetulozccc@gmail.com",
    phone: "505******37",
    birthDate: "", // format: YYYY-MM-DD
  },
  twoFactorEnabled: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.userInfo = action.payload; // gelen kullanıcı bilgileri
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.userInfo = {}; // istersen sıfırla
    },
    updateUserInfo: (state, action) => {
      state.userInfo = { ...state.userInfo, ...action.payload };
    },
    toggleTwoFactor: (state) => {
      state.twoFactorEnabled = !state.twoFactorEnabled;
    },
  },
});

export const { login, logout, updateUserInfo, toggleTwoFactor } = userSlice.actions;
export default userSlice.reducer;
