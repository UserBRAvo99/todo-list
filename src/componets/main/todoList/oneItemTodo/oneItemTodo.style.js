import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  width: 100%;
  gap: 15px;
  justify-content: space-around;
  padding: 10px;
  background-color: ${(props) => props.theme.colorBkgItemTodo};
  border: solid 1px ${(props) => props.theme.colorBorderItemTodo};
  margin: 0 auto;
  border-radius: ${(props) => props.theme.borderRadiusFormItem};
  align-items: center;
  box-shadow: ${(props) => props.theme.shadowHeader};
  position: relative;
  @media screen and (min-width: 530px) {
    width: 500px;
    margin: 0 auto;
  }
  @media screen and (min-width: 767px) {
    width: ${({ $sort }) => {
      if ($sort === "row") {
        return "calc(50% - 10px)";
      }
      if ($sort === "column") {
        return "500px";
      }
    }};
    margin: ${({ $sort }) => {
      if ($sort === "row") {
        return "0";
      }
      if ($sort === "column") {
        return "0 auto";
      }
    }};
  }
  @media screen and (min-width: 767px) {
    width: ${({ $sort }) => {
      if ($sort === "row") {
        return "calc(50% - 10px)";
      }
      if ($sort === "column") {
        return "700px";
      }
    }};
  }
`;

export const Input = styled.input`
  opacity: 0;
`;

export const Span = styled.span`
  display: flex;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: solid 1px black;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translate(-50%, -50%);
  & svg {
    position: absolute;
    top: 30%;
    left: 65%;
    transform: translate(-50%, -50%);
    display: flex;
    width: 28px;
    height: 28px;
    color: ${(props) => props.theme.colorChecked};
  }
`;

export const WrapperText = styled.div`
  word-wrap: break-word;
  width: calc(100% - 120px);
`;

export const Text = styled.p`
  text-decoration: ${({ $done }) => ($done ? "line-through" : "none")};
`;
export const Btn = styled.button`
  position: relative;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: transparent;
  background-color: ${(props) => props.theme.colorBkgBtnItemTodo};
  & svg {
    width: 16px;
    height: 16px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    fill: ${(props) => props.theme.colorBtnAdd};
  }
`;
