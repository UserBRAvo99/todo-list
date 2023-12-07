import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../../redux/todoSlice";
import { FaPlus } from "react-icons/fa6";

import { Btn, Form, Wrapper, WrapperInput, Input } from "./createTodo.style";

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
            placeholder="..."
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
