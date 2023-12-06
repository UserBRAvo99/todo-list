import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTodo, deleteTodo } from "../../../redux/todoSlice";
import styled from "styled-components";
import CreateTodo from "./createTodo/CreateTodo";
import FilterTodo from "./filterTodo/FilterTodo";
import { IoCheckmarkSharp, IoClose } from "react-icons/io5";

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
      <WrapperCreateAndFilter>
        <CreateTodo />
        <FilterTodo filterTodo={handleFilterTodo} />
      </WrapperCreateAndFilter>
      <List>
        {todoList.map((todo) => {
          return (
            <Item key={todo.id}>
              <label>
                <Input
                  onChange={() => changeCheckBox(todo)}
                  type="checkbox"
                  checked={todo.done}
                />
                <Span>{todo.done && <IoCheckmarkSharp />}</Span>
              </label>
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

const WrapperCreateAndFilter = styled.div`
  display: flex;
`;

const List = styled.ul`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding: 15px 0 60px 0;
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
  position: relative;
`;

const Input = styled.input`
  opacity: 0;
`;

const Span = styled.span`
  display: flex;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: solid 1px black;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translate(-50%, -50%);
  & svg {
    position: absolute;
    top: 30%;
    left: 65%;
    transform: translate(-50%, -50%);
    display: flex;
    width: 28px;
    height: 28px;
    color: ${(props) => props.theme.colorChecked};
  }
`;

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
