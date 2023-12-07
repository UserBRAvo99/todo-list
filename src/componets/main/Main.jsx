"react-redux";

import { MainTodo } from "./main.style";
import TodoList from "./todoList/TodoList";

const Main = () => {
  return (
    <MainTodo className="container">
      <TodoList />
    </MainTodo>
  );
};

export default Main;
