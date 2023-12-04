import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  setting: {
    theme: "",
    language: "",
  },
};

const settingSlice = createSlice({
  name: "settingTodo",
  initialState,
  reducers: {},
});

export const settingSliceReducer = settingSlice.reducer;
