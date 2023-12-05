"react-redux";
import styled from "styled-components";
import TodoList from "./todoList/TodoList";
// import SettingTodo from "./todoList/settingTodo/SettingTodo";

const Main = () => {
  return (
    <MainTodo className="container">
      <TodoList />
      {/* <SettingTodo /> */}
    </MainTodo>
  );
};

export default Main;

const MainTodo = styled.main`
  width: 100%;
  min-height: calc(100vh - 106.8px);
`;
