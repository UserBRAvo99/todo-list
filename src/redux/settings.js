import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  setting: {
    theme: {},
    language: "",
    sortTodoList: "row",
  },
};

const settingSlice = createSlice({
  name: "settingTodo",
  initialState,
  reducers: {
    // changeTheme: (state, actions) => {
    //   state.theme = classic;
    // },
    changeSortListTodo: (state, actions) => {
      state.setting.sortTodoList = actions.payload;
    },
  },
});

export const settingSliceReducer = settingSlice.reducer;

export const { changeSortListTodo } = settingSlice.actions;
