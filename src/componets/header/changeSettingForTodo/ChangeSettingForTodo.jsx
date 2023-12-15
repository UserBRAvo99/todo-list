import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeLanguage, changeTheme } from "../../../redux/settings";
import ChangeTheme from "./changeTheme/ChangeTheme";
import ChangeLanguage from "./changeLanguage/ChangeLanguage";

import { Btn, Form, Title, Wrapper } from "./changeSettingForTodo.style";

const ChangeSettingForTodo = ({ closeModal }) => {
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
      <Title>Language</Title>
      <Form onSubmit={handleSubmit}>
        <ChangeLanguage handleClick={handleChangeLanguage} />

        <Title>Theme</Title>
        <ChangeTheme handleClick={handleChangeTheme} />

        <Btn onClick={closeModal}>Change</Btn>
      </Form>
    </Wrapper>
  );
};

export default ChangeSettingForTodo;
