import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, changeTodo, deleteTodo } from "../../../redux/todoSlice";
import styled from "styled-components";

const TodoList = () => {
  const [value, setValue] = useState("");

  const { todos } = useSelector((state) => state.todoListSlice);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = { id: nanoid(), done: false, text: value };
    dispatch(addTodo(newTodo));
    setValue("");
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const changeCheckBox = (id, check) => {
    dispatch(changeTodo(id, check));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={value}
          type="text"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button>add</button>
      </form>
      <List>
        {todos.map((todo) => {
          return (
            <Item key={todo.id}>
              <input onChange={() => changeCheckBox(todo)} type="checkbox" />
              <Text $done={todo.done}>{todo.text}</Text>
              <button onClick={() => handleDelete(todo.id)}>Delete</button>
            </Item>
          );
        })}
      </List>
    </div>
  );
};

export default TodoList;

const List = styled.ul`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const Item = styled.li`
  display: flex;
  width: 100%;
  height: auto;
  padding: 20px;
  background-color: pink;
  margin: 0 auto;
`;

const Text = styled.p`
  text-decoration: ${({ $done }) => ($done ? "line-through" : "none")};
`;
