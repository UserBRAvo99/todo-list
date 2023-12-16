import { RiTodoLine } from "react-icons/ri";
import SettingsForTodo from "./settingsForTodo/SettingsForTodo";
import { useSelector } from "react-redux";
import { languageChangeForTodo } from "../../shared/languageChangeForTodo";

import { HeaderElement, Title, Wrapper, WrapperLogo } from "./header.style";

const Header = () => {
  const { setting } = useSelector((state) => state.settingSlice);

  return (
    <Wrapper>
      <HeaderElement>
        <WrapperLogo>
          <RiTodoLine />
          <Title>{languageChangeForTodo(setting.language).titleTodo}</Title>
        </WrapperLogo>
        <SettingsForTodo />
      </HeaderElement>
    </Wrapper>
  );
};

export default Header;
