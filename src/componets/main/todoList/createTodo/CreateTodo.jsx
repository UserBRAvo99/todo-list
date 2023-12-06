import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../../redux/todoSlice";
import { FaPlus } from "react-icons/fa6";
import styled from "styled-components";

const CreateTodo = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === "") return;
    const newTodo = { id: nanoid(), done: false, text: value.trim() };
    dispatch(addTodo(newTodo));
    setValue("");
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <WrapperInput>
          <Input
            placeholder="Write new"
            value={value}
            type="text"
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <Btn>
            <FaPlus />
          </Btn>
        </WrapperInput>
      </Form>
    </Wrapper>
  );
};

export default CreateTodo;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
  @media screen and (min-width: 530px) {
    width: 500px;
    margin: 0 auto;
  }
`;

const Form = styled.form`
  width: 100%;
  padding: 10px;
  border-radius: ${(props) => props.theme.borderRadiusFormItem};
  background-color: ${(props) => props.theme.colorHeader};
  box-shadow: ${(props) => props.theme.shadowHeader};
`;

const WrapperInput = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
`;

const Input = styled.input`
  width: 80%;
  padding: 5px;
  border-radius: 5px;
  border: transparent;
`;

const Btn = styled.button`
  position: relative;
  align-items: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: transparent;
  background-color: ${(props) => props.theme.colorBtnAddBkg};
  & svg {
    width: 22px;
    height: 22px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    fill: ${(props) => props.theme.colorBtnAdd};
  }
`;
