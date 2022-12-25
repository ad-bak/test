import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: { admin: false },
  reducers: {
    login(state, action) {
      state.admin = true;
    },
    logout(state, action) {
      state.admin = false;
    },
  },
});

export const adminActions = adminSlice.actions;

export default adminSlice;
