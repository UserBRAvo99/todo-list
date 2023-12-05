import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { id: "1", done: false, text: "Todo 1" },
    { id: "2", done: false, text: "Todo 2" },
    { id: "3", done: false, text: "Todo 3" },
    { id: "4", done: false, text: "Todo 4" },
  ],
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
