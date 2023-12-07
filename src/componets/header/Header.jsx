import { RiTodoLine } from "react-icons/ri";

import { HeaderElement, Title, Wrapper, WrapperLogo } from "./header.style";

const Header = () => {
  return (
    <Wrapper>
      <HeaderElement>
        <WrapperLogo>
          <RiTodoLine />
          <Title>Todo</Title>
        </WrapperLogo>
      </HeaderElement>
    </Wrapper>
  );
};

export default Header;
