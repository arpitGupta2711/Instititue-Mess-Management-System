import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  weekDay: 0,
  weekDayMealTime: 0,
  meal: "paratha",
};
const UpdateMenuSlice = createSlice({
  name: "updatemenu",
  initialState,
  reducers: {},
});

export const {} = UpdateMenuSlice.actions;
export default UpdateMenuSlice.reducer;
