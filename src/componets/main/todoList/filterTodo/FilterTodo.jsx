import SortTodo from "../sortTodo/SortTodo";

import { Btn, Item, List, Span, Wrapper } from "./filterTodo.style";

const FilterTodo = ({ filterTodo, changeTodo, dataLanguage }) => {
  return (
    <Wrapper>
      <List>
        <Item>
          <Btn onClick={filterTodo} name="all">
            {dataLanguage.all}
          </Btn>
        </Item>
        <Item>
          <Span>|</Span>
        </Item>
        <Item>
          <Btn onClick={filterTodo} name="complete">
            {dataLanguage.complete}
          </Btn>
        </Item>
        <Item>
          <Span>|</Span>
        </Item>
        <Item>
          <Btn onClick={filterTodo} name="incomplete">
            {dataLanguage.incomplete}
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
