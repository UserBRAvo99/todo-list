import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTodo: (state, actions) => {
      state.todos.unshift(actions.payload);
    },
    deleteTodo: (state, actions) => {
      state.todos = state.todos.filter((todo) => todo.id !== actions.payload);
    },
    changeTodo: (state, actions) => {
      const item = state.todos.find((item) => item.id === actions.payload.id);
      item.done = !item.done;
    },
  },
});

export const todoListReducer = todoListSlice.reducer;

export const { deleteTodo, addTodo, changeTodo } = todoListSlice.actions;
