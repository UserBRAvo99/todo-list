// redux-toolkit
// імпортуємо createSlice з пакету @reduxjs/toolkit
import { createSlice } from "@reduxjs/toolkit";

// створємо стейт для майбутніх задач
const initialState = {
  // в данному випадку тут буде масив тудушок (лист завдань)
  todos: [],
};

//  ініціалізую змінну todoListSlice та оголошуємо створення createSlice
const todoListSlice = createSlice({
  // вказуємо ім'я стейту , яке буде відображатись в консолі браузера
  name: "todoList",
  // вказуємо яку змінну ми беремо для початкового значення стейту
  initialState,
  // reducers - прописуємо методи зміни стейту, всі редюсери завжди отримують state, actions. Тобто state і якусь дію - actions, результат завжди приходить в actions.payload
  reducers: {
    //  addTodo - редюсер додає елемент на початок масиву
    addTodo: (state, actions) => {
      state.todos.unshift(actions.payload);
    },
    // deleteTodo - редюсер видаляє тудушку, тобто ми фільтруємо стейт і порівнюємо айді тудушки. Якщо todo.id === actions.payload то фільтер не додасть тудушку до масиву чкий поверне в результаті роботи.
    deleteTodo: (state, actions) => {
      state.todos = state.todos.filter((todo) => todo.id !== actions.payload);
    },
    // changeTodo - редюсар змінює значення done в item (зміна для чекбокса, виконано чи не виконано). Тут методом find знаходимо задовільнення умови item.id === actions.payload.id та змінюємо item.done
    changeTodo: (state, actions) => {
      const item = state.todos.find((item) => item.id === actions.payload.id);
      item.done = !item.done;
    },
  },
});

// інійіалізуємо змінну todoListReducer та визначаємо - todoListSlice.reducer. Експортуємо змінну
export const todoListReducer = todoListSlice.reducer;

//  експортуємо редюсери (методи) deleteTodo, addTodo, changeTodo з todoListSlice.actions і надалі можна буде передавати actions за допомогою діспаттча
export const { deleteTodo, addTodo, changeTodo } = todoListSlice.actions;
