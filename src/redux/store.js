import { configureStore } from "@reduxjs/toolkit";
import { todoListReducer } from "./todoSlice";
import { settingSliceReducer } from "./settings";

export const store = configureStore({
  reducer: {
    todoListSlice: todoListReducer,
    settingSlice: settingSliceReducer,
  },
});
