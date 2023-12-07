import SortTodo from "../sortTodo/SortTodo";

import { Btn, Item, List, Span, Wrapper } from "./filterTodo.style";

const FilterTodo = ({ filterTodo, changeTodo }) => {
  return (
    <Wrapper>
      <List>
        <Item>
          <Btn onClick={filterTodo} name="all">
            All
          </Btn>
        </Item>
        <Item>
          <Span>|</Span>
        </Item>
        <Item>
          <Btn onClick={filterTodo} name="complete">
            Complete
          </Btn>
        </Item>
        <Item>
          <Span>|</Span>
        </Item>
        <Item>
          <Btn onClick={filterTodo} name="incomplete">
            Incomplete
          </Btn>
        </Item>
        <Item className="hidden">
          <SortTodo changeTodo={changeTodo} />
        </Item>
      </List>
    </Wrapper>
  );
};

export default FilterTodo;
