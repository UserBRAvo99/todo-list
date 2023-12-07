import styled from "styled-components";
import SortTodo from "../sortTodo/SortTodo";

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
        <li>
          <SortTodo changeTodo={changeTodo} />
        </li>
      </List>
    </Wrapper>
  );
};

export default FilterTodo;

const Wrapper = styled.ul`
  padding: 15px 0;
  width: 100%;
  @media screen and (min-width: 530px) {
    width: 500px;
    margin: 0 auto;
  }
`;

const List = styled.ul`
  display: flex;
  width: 100%;
  min-height: 56px;
  justify-content: space-around;
  height: auto;
  background-color: ${(props) => props.theme.colorListBkg};
  border-radius: ${(props) => props.theme.borderRadiusFormItem};
  box-shadow: ${(props) => props.theme.shadowHeader};
  align-items: center;
  padding: 5px;
`;

const Item = styled.li``;

const Btn = styled.button`
  border: transparent;
  background-color: transparent;
  color: ${(props) => props.theme.textColorWhite};
  border-radius: ${(props) => props.theme.borderRadiusFormItem};
  padding: 10px;
`;

const Span = styled.span`
  color: inherit;
  color: ${(props) => props.theme.textColorWhite};
`;
