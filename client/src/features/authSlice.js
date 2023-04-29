import { createSlice } from "@reduxjs/toolkit";

const initialState = {};
const authSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    login: (state, action) => {
      console.log("action ", action);
      state = action.payload;
      console.log("state ", state);
    },
  },
});

export const { login } = authSlice.actions;
export default authSlice.reducer;
