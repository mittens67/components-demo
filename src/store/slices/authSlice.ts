import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,  // Track login status
    user: null,              // Store mock user data
  },
  reducers: {
    login: (state, action) => {
      console.log("Hello")
      state.isAuthenticated = true;
      state.user = action.payload; // Save user details
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
