import styled, { css } from "styled-components";

const SettingTodo = () => {
  return (
    <Wrapper>
      <Form>
        <div>
          <h2>Language</h2>
          <Fieldset>
            <Label>
              <Input name="england" type="radio" value="theme1" />
              <BoxFlag $flag="england"></BoxFlag>
            </Label>
            <Label htmlFor="">
              <input name="ukraine" type="radio" value="theme2" />
              <BoxFlag $flag="ukraine"></BoxFlag>
            </Label>
            <Label htmlFor="">
              <input name="sweden" type="radio" value="theme3" />
              <BoxFlag $flag="sweden"></BoxFlag>
            </Label>
          </Fieldset>
        </div>
        {/*  */}
        {/* <div>
          <fieldset>
            <input name="2" type="radio" value="language1" />
            <input name="2" type="radio" value="language2" />
            <input name="2" type="radio" value="language3" />
            <input name="2" type="radio" value="language4" />
          </fieldset>
        </div> */}
        <button>Submit</button>
      </Form>
    </Wrapper>
  );
};

export default SettingTodo;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: pink;
  border-radius: ${(props) => props.theme.borderRadiusFormItem};
`;

const Form = styled.form`
  width: 100%;
`;

const Fieldset = styled.fieldset`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: space-around;
  margin: 0;
  padding: 0;
  border: transparent;
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
