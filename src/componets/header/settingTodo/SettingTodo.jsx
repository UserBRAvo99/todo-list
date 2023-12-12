import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { css } from "styled-components";
import { changeLanguage } from "../../../redux/settings";

const SettingTodo = ({ closeModal }) => {
  const { setting } = useSelector((state) => state.settingSlice);

  const [language, setLanguage] = useState(setting.language);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(changeLanguage(language));
  };

  const handleChangeLanguage = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <Wrapper>
      <Title>Language</Title>
      <Form onSubmit={handleSubmit}>
        <WrapperCountry onChange={handleChangeLanguage}>
          <Label name="england">
            <Input name="language" type="radio" value="england" />
            <BoxFlag $flag="england"></BoxFlag>
          </Label>
          <Label name="ukraine">
            <Input name="language" type="radio" value="ukraine" />
            <BoxFlag $flag="ukraine"></BoxFlag>
          </Label>
          <Label name="sweden">
            <Input name="language" type="radio" value="sweden" />
            <BoxFlag $flag="sweden"></BoxFlag>
          </Label>
        </WrapperCountry>

        {/* <div>
          <fieldset>
            <input name="2" type="radio" value="language1" />
            <input name="2" type="radio" value="language2" />
            <input name="2" type="radio" value="language3" />
            <input name="2" type="radio" value="language4" />
          </fieldset>
        </div> */}
        <Btn onClick={closeModal}>Submit</Btn>
      </Form>
    </Wrapper>
  );
};

export default SettingTodo;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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

const WrapperCountry = styled.div`
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
`;

const Btn = styled.button`
  margin: 0 auto;

  cursor: pointer;
`;
