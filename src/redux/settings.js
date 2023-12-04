import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  setting: {
    theme: {},
    language: "",
  },
};

const settingSlice = createSlice({
  name: "settingTodo",
  initialState,
  reducers: {
    // changeTheme: (state, actions) => {
    //   state.theme = classic;
    // },
  },
});

export const settingSliceReducer = settingSlice.reducer;
