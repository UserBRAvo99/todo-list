import styled from "styled-components";

const SettingTodo = () => {
  return (
    <Wrapper>
      <Form>
        <div>
          <h2>Language</h2>
          <Fieldset>
            <Label>
              <Input name="1" type="radio" value="theme1" />
              <BoxFlag></BoxFlag>
            </Label>
            <Label htmlFor="">
              <input name="1" type="radio" value="theme2" />
              <BoxFlag></BoxFlag>
            </Label>
            <Label htmlFor="">
              <input name="1" type="radio" value="theme3" />
              <BoxFlag></BoxFlag>
            </Label>
          </Fieldset>
        </div>
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
`;

const Label = styled.label`
  position: relative;
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
  background-color: pink;
  border-radius: 50%;
`;
