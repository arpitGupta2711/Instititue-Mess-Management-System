import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const manageNavSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {},
});

export const { manageHomePageNavbar, manageAdminPageNavbar } =
  manageNavSlice.actions;
export default manageNavSlice.reducer;
