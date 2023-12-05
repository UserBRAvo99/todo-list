import styled from "styled-components";

const FilterTodo = ({ filterTodo }) => {
  return (
    <Wrapper>
      <List>
        <Item>
          <Btn onClick={filterTodo} name="all">
            All
          </Btn>
        </Item>
        <Item>
          <Btn onClick={filterTodo} name="complete">
            Complete
          </Btn>
        </Item>
        <Item>
          <Btn onClick={filterTodo} name="incomplete">
            Incomplete
          </Btn>
        </Item>
      </List>
    </Wrapper>
  );
};

export default FilterTodo;

const Wrapper = styled.ul`
  padding: 15px 0;
`;

const List = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-around;
  height: auto;
  background-color: ${(props) => props.theme.colorListBkg};
  padding: 15px;
  border-radius: ${(props) => props.theme.borderRadiusFormItem};
  box-shadow: ${(props) => props.theme.shadowHeader};
`;

const Item = styled.li``;

const Btn = styled.button`
  border: transparent;
  background-color: transparent;
  color: ${(props) => props.theme.textColorWhite};
`;
