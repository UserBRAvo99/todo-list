import styled from "styled-components";
import { FaThLarge, FaThList } from "react-icons/fa";

const SortTodo = ({ changeTodo }) => {
  return (
    <Wrapper>
      <List>
        <li>
          <span>|</span>
        </li>
        <li>
          <Btn name="column" onClick={changeTodo}>
            <FaThList />
          </Btn>
        </li>
        <li>
          <Btn name="row" onClick={changeTodo}>
            <FaThLarge />
          </Btn>
        </li>
      </List>
    </Wrapper>
  );
};

export default SortTodo;

const Wrapper = styled.div`
  display: none;
  @media screen and (min-width: 767px) {
    display: flex;
  }
`;

const List = styled.ul`
  display: flex;
  gap: 10px;
`;

const Btn = styled.button`
  padding: 5px;
`;
