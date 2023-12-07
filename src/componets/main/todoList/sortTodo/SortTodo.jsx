import { FaThLarge, FaThList } from "react-icons/fa";

import { Btn, Item, List, Span, Wrapper } from "./sortTodo.style";

const SortTodo = ({ changeTodo }) => {
  return (
    <Wrapper>
      <List>
        <Item>
          <Span>|</Span>
        </Item>
        <Item>
          <Btn name="column" onClick={changeTodo}>
            <FaThList />
          </Btn>
        </Item>
        <Item>
          <Btn name="row" onClick={changeTodo}>
            <FaThLarge />
          </Btn>
        </Item>
      </List>
    </Wrapper>
  );
};

export default SortTodo;
