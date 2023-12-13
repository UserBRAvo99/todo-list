import { FaThLarge, FaThList } from "react-icons/fa";

import { Btn, Item, List, Span, Wrapper } from "./sortTodo.style";
import { useSelector } from "react-redux";

const SortTodo = ({ changeTodo }) => {
  const { setting } = useSelector((state) => state.settingSlice);

  return (
    <Wrapper>
      <List>
        <Item>
          <Span>|</Span>
        </Item>
        <Item>
          <Btn
            name="column"
            onClick={changeTodo}
            className={setting.sortTodoList === "column" && "activeFilter"}
          >
            <FaThList />
          </Btn>
        </Item>
        <Item>
          <Btn
            name="row"
            onClick={changeTodo}
            className={setting.sortTodoList === "row" && "activeFilter"}
          >
            <FaThLarge />
          </Btn>
        </Item>
      </List>
    </Wrapper>
  );
};

export default SortTodo;
