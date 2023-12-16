import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage, changeTheme } from "../../../redux/settings";
import ChangeTheme from "./changeTheme/ChangeTheme";
import ChangeLanguage from "./changeLanguage/ChangeLanguage";
import { languageChangeForTodo } from "../../../shared/languageChangeForTodo";

import { Btn, Form, Title, Wrapper } from "./changeSettingForTodo.style";

const ChangeSettingForTodo = ({ closeModal }) => {
  const { setting } = useSelector((state) => state.settingSlice);

  const [language, setLanguage] = useState("england");

  const [themeTodo, setThemeTodo] = useState("forest");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(changeLanguage(language));
    dispatch(changeTheme(themeTodo));
  };

  const handleChangeLanguage = (e) => {
    setLanguage(e.target.value);
  };

  const handleChangeTheme = (e) => {
    setThemeTodo(e.target.value);
  };

  return (
    <Wrapper>
      <Title>
        {languageChangeForTodo(setting.language).settingTodo.titleLanguage}
      </Title>
      <Form onSubmit={handleSubmit}>
        <ChangeLanguage handleClick={handleChangeLanguage} />

        <Title>
          {languageChangeForTodo(setting.language).settingTodo.titleTheme}
        </Title>
        <ChangeTheme handleClick={handleChangeTheme} />

        <Btn onClick={closeModal}>
          {languageChangeForTodo(setting.language).settingTodo.btnSubmitChange}
        </Btn>
      </Form>
    </Wrapper>
  );
};

export default ChangeSettingForTodo;
