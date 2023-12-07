import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTodo, deleteTodo } from "../../../redux/todoSlice";
import CreateTodo from "./createTodo/CreateTodo";
import FilterTodo from "./filterTodo/FilterTodo";
import { changeSortListTodo } from "../../../redux/settings";
import OneItemTodo from "./oneItemTodo/oneItemTodo";

import { List, WrapperCreateAndFilter } from "./todoList.style";

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);

  const { todos } = useSelector((state) => state.todoListSlice);

  const { setting } = useSelector((state) => state.settingSlice);

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

  const changeListFlex = (e) => {
    dispatch(changeSortListTodo(e.currentTarget.name));
  };

  return (
    <>
      <WrapperCreateAndFilter>
        <CreateTodo />
        <FilterTodo filterTodo={handleFilterTodo} changeTodo={changeListFlex} />
      </WrapperCreateAndFilter>
      <List $sort={setting.sortTodoList}>
        {todoList.map((todo) => {
          return (
            <OneItemTodo
              key={todo.id}
              todo={todo}
              settingTodo={setting.sortTodoList}
              deleteTodo={handleDelete}
              change={changeCheckBox}
            />
          );
        })}
      </List>
    </>
  );
};

export default TodoList;
