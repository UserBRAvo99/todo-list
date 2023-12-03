import { configureStore } from "@reduxjs/toolkit";
import { todoListReducer } from "./todoSlice";

export const store = configureStore({
  reducer: {
    todoListSlice: todoListReducer,
  },
});
