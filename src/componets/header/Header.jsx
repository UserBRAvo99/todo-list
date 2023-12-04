import styled from "styled-components";
import { RiTodoLine } from "react-icons/ri";

const Header = () => {
  return (
    <>
      <HeaderElement>
        <WrapperLogo>
          <RiTodoLine />
          <Title>Todo</Title>
        </WrapperLogo>
      </HeaderElement>
    </>
  );
};

export default Header;

const HeaderElement = styled.header`
  display: flex;
  width: 100%;
  background-color: ${(props) => props.theme.colorHeader};
  justify-content: center;
  padding: 20px 0;
  border-radius: 0 0 14px 14px;
  box-shadow: ${(props) => props.theme.shadowHeader};
`;

const WrapperLogo = styled.div`
  display: flex;
  align-items: center;
  & svg {
    width: 30px;
    height: 30px;
    margin-right: 10px;
    fill: ${(props) => props.theme.colorSvgHeader};
  }
`;

const Title = styled.h1`
  color: ${(props) => props.theme.textColorWhite};
`;
