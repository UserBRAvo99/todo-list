import { IoCheckmarkSharp, IoClose } from "react-icons/io5";

import { Btn, Item, Span, Text, WrapperText, Input } from "./oneItemTodo.style";

const OneItemTodo = ({ todo, settingTodo, deleteTodo, change }) => {
  return (
    <Item key={todo.id} $sort={settingTodo}>
      <label>
        <Input
          onChange={() => change(todo)}
          type="checkbox"
          checked={todo.done}
        />
        <Span>{todo.done && <IoCheckmarkSharp />}</Span>
      </label>
      <WrapperText>
        <Text $done={todo.done}>{todo.text}</Text>
      </WrapperText>
      <Btn onClick={() => deleteTodo(todo.id)}>
        <IoClose />
      </Btn>
    </Item>
  );
};

export default OneItemTodo;
