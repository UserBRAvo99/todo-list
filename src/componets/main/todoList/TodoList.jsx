import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTodo, deleteTodo } from "../../../redux/todoSlice";
import styled from "styled-components";
import CreateTodo from "./createTodo/CreateTodo";
import FilterTodo from "./filterTodo/FilterTodo";
import { IoClose } from "react-icons/io5";

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);

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

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const changeCheckBox = (id, check) => {
    dispatch(changeTodo(id, check));
  };

  return (
    <>
      <CreateTodo />
      <FilterTodo filterTodo={handleFilterTodo} />
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
              <Btn onClick={() => handleDelete(todo.id)}>
                <IoClose />
              </Btn>
            </Item>
          );
        })}
      </List>
    </>
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
  padding: 15px 0;
`;

const Item = styled.li`
  display: flex;
  width: 100%;
  gap: 15px;
  justify-content: space-between;
  padding: 10px;
  background-color: ${(props) => props.theme.colorBkgItemTodo};
  border: solid 1px ${(props) => props.theme.colorBorderItemTodo};
  margin: 0 auto;
  border-radius: ${(props) => props.theme.borderRadiusFormItem};
  align-items: center;
  box-shadow: ${(props) => props.theme.shadowHeader};
`;

const Input = styled.input``;

const WrapperText = styled.div`
  word-wrap: break-word;
  width: calc(100% - 120px);
`;

const Text = styled.p`
  text-decoration: ${({ $done }) => ($done ? "line-through" : "none")};
`;
const Btn = styled.button`
  position: relative;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: transparent;
  background-color: ${(props) => props.theme.colorBkgBtnItemTodo};
  & svg {
    width: 16px;
    height: 16px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    fill: ${(props) => props.theme.colorBtnAdd};
  }
`;
