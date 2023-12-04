import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTodo, deleteTodo } from "../../../redux/todoSlice";
import styled from "styled-components";
import CreateTodo from "./createTodo/CreateTodo";

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);

  // const [value, setValue] = useState("");

  const { todos } = useSelector((state) => state.todoListSlice);

  const dispatch = useDispatch();

  useEffect(() => {
    setTodoList(todos);
  }, [todos]);

  const handleFilterTodo = (e) => {
    const filter = e.target.name;
    if (filter === "complete") {
      const filterComplete = todos.filter((todo) => todo.done === true);
      return setTodoList(filterComplete);
    }
    if (filter === "incomplete") {
      const filterComplete = todos.filter((todo) => todo.done === false);
      return setTodoList(filterComplete);
    }
    setTodoList(todos);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const newTodo = { id: nanoid(), done: false, text: value };
  //   dispatch(addTodo(newTodo));
  //   setValue("");
  // };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const changeCheckBox = (id, check) => {
    dispatch(changeTodo(id, check));
  };

  return (
    <div className="container">
      <div>
        {/* <form onSubmit={handleSubmit}>
          <input
            value={value}
            type="text"
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <button>add</button>
        </form> */}
        <CreateTodo />
        <div>
          <ul>
            <li>
              <button onClick={handleFilterTodo} name="all">
                All
              </button>
            </li>
            <li>
              <button onClick={handleFilterTodo} name="complete">
                Complete
              </button>
            </li>
            <li>
              <button onClick={handleFilterTodo} name="incomplete">
                Incomplete
              </button>
            </li>
          </ul>
        </div>
        <List>
          {todoList.map((todo) => {
            return (
              <Item key={todo.id}>
                <Input
                  onChange={() => changeCheckBox(todo)}
                  type="checkbox"
                  checked={todo.done}
                />
                <WrapperText>
                  <Text $done={todo.done}>{todo.text}</Text>
                </WrapperText>
                <button onClick={() => handleDelete(todo.id)}>Delete</button>
              </Item>
            );
          })}
        </List>
      </div>
    </div>
  );
};

export default TodoList;

const List = styled.ul`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const Item = styled.li`
  display: flex;
  width: 100%;
  gap: 20px;
  justify-content: space-between;
  padding: 20px;
  background-color: pink;
  margin: 0 auto;
  border-radius: 14px;
  align-items: center;
`;

const Input = styled.input``;

const WrapperText = styled.div`
  word-wrap: break-word;
  width: calc(100% - 120px);
`;

const Text = styled.p`
  text-decoration: ${({ $done }) => ($done ? "line-through" : "none")};
`;
