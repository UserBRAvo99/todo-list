import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  setting: {
    theme: {},
    language: "england",
    sortTodoList: "row",
  },
};

const settingSlice = createSlice({
  name: "settingTodo",
  initialState,
  reducers: {
    changeLanguage: (state, actions) => {
      state.language = actions.payload;
    },
    changeSortListTodo: (state, actions) => {
      state.setting.sortTodoList = actions.payload;
    },
  },
});

export const settingSliceReducer = settingSlice.reducer;

export const { changeSortListTodo, changeLanguage } = settingSlice.actions;
