import { createSlice } from "@reduxjs/toolkit";

//
const initialState = {
  setting: {
    theme: "forest",
    language: "england",
    sortTodoList: "row",
  },
};

const settingSlice = createSlice({
  name: "settingTodo",
  initialState,
  reducers: {
    changeLanguage: (state, actions) => {
      state.setting.language = actions.payload;
    },
    changeSortListTodo: (state, actions) => {
      state.setting.sortTodoList = actions.payload;
    },
    changeTheme: (state, actions) => {
      state.setting.theme = actions.payload;
    },
  },
});

export const settingSliceReducer = settingSlice.reducer;

export const { changeSortListTodo, changeLanguage, changeTheme } =
  settingSlice.actions;
