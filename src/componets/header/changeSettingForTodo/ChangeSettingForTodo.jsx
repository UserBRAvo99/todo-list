import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { css } from "styled-components";
import { changeLanguage, changeTheme } from "../../../redux/settings";

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
      <Title>Language</Title>
      <Form onSubmit={handleSubmit}>
        <WrapperChange onChange={handleChangeLanguage}>
          <Label name="england">
            <Input name="language" type="radio" value="england" />
            <BoxFlag
              $flag="england"
              className={setting.language === "england" && "activeLanguage"}
            ></BoxFlag>
          </Label>
          <Label name="ukraine">
            <Input name="language" type="radio" value="ukraine" />
            <BoxFlag
              $flag="ukraine"
              className={setting.language === "ukraine" && "activeLanguage"}
            ></BoxFlag>
          </Label>
          <Label name="sweden">
            <Input name="language" type="radio" value="sweden" />
            <BoxFlag
              $flag="sweden"
              className={setting.language === "sweden" && "activeLanguage"}
            ></BoxFlag>
          </Label>
        </WrapperChange>

        <Title>Theme</Title>
        <WrapperChange onChange={handleChangeTheme}>
          <Label name="forest">
            <Input name="theme" type="radio" value="forest" />
            <BoxTheme
              $theme="forest"
              className={setting.theme === "forest" && "activeLanguage"}
            ></BoxTheme>
          </Label>
          <Label name="classic">
            <Input name="theme" type="radio" value="classic" />
            <BoxTheme
              $theme="classic"
              className={setting.theme === "classic" && "activeLanguage"}
            ></BoxTheme>
          </Label>
          <Label name="dark">
            <Input name="theme" type="radio" value="dark" />
            <BoxTheme
              $theme="dark"
              className={setting.theme === "dark" && "activeLanguage"}
            ></BoxTheme>
          </Label>
        </WrapperChange>

        <Btn onClick={closeModal}>Submit</Btn>
      </Form>
    </Wrapper>
  );
};

export default ChangeSettingForTodo;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  background-color: white;
  border-radius: ${(props) => props.theme.borderRadiusFormItem};
`;

const Title = styled.h2`
  align-items: center;
  text-align: center;
  padding: 30px 0 15px 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const WrapperChange = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: space-around;
  padding: 15px 0;
`;

const Label = styled.label`
  position: relative;
  border: transparent;
`;

const Input = styled.input`
  opacity: 0;
`;

const BoxFlag = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  ${({ $flag }) => {
    if ($flag === "england") {
      return css`
        background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/320px-Flag_of_the_United_Kingdom_%281-2%29.svg.png");
      `;
    }
    if ($flag === "ukraine") {
      return css`
        background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/320px-Flag_of_Ukraine.svg.png");
      `;
    }
    if ($flag === "sweden") {
      return css`
        background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Sweden.svg/320px-Flag_of_Sweden.svg.png");
      `;
    }
  }}
  background-size: cover;
  background-position: center;
  cursor: pointer;
  transition: ${(props) => props.theme.transitionHover};
  &:hover,
  &:focus {
    transition: ${(props) => props.theme.transitionHover};
    box-shadow: ${(props) => props.theme.shadowForSettingsLanguage};
  }
`;

const BoxTheme = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  ${({ $theme }) => {
    if ($theme === "forest") {
      return css`
        background: radial-gradient(
          circle,
          rgba(22, 113, 92, 1) 0%,
          rgba(148, 67, 85, 1) 35%,
          rgba(255, 255, 255, 1) 100%
        );
      `;
    }
    if ($theme === "classic") {
      return css`
        background: radial-gradient(
          circle,
          rgba(0, 0, 0, 1) 0%,
          rgba(11, 117, 190, 1) 100%
        );
      `;
    }
    if ($theme === "dark") {
      return css`
        background: radial-gradient(
          circle,
          rgba(0, 0, 0, 1) 0%,
          rgba(255, 255, 255, 1) 100%
        );
      `;
    }
  }}
  background-size: cover;
  background-position: center;
  cursor: pointer;
  transition: ${(props) => props.theme.transitionHover};
  &:hover,
  &:focus {
    transition: ${(props) => props.theme.transitionHover};
    box-shadow: ${(props) => props.theme.shadowForSettingsLanguage};
  }
`;

const Btn = styled.button`
  margin: 0 auto;
  cursor: pointer;
`;
