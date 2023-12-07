import { RiTodoLine } from "react-icons/ri";

import { HeaderElement, Title, Wrapper, WrapperLogo } from "./header.style";
import SettingsForTodo from "./settingsForTodo/SettingsForTodo";

const Header = () => {
  return (
    <Wrapper>
      <HeaderElement>
        <WrapperLogo>
          <RiTodoLine />
          <Title>Todo</Title>
        </WrapperLogo>
      </HeaderElement>
      <SettingsForTodo />
    </Wrapper>
  );
};

export default Header;
