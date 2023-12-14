import styled from "styled-components";

export const Wrapper = styled.div`
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

export const Form = styled.form`
  width: 100%;
  padding: 10px;
  border-radius: ${(props) => props.theme.borderRadiusFormItem};
  background-color: ${(props) => props.theme.colorHeader};
  box-shadow: ${(props) => props.theme.shadowHeader};
  border: ${(props) => props.theme.borderHeader};
`;

export const WrapperInput = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
`;

export const Input = styled.input`
  width: 80%;
  padding: 5px;
  border-radius: 5px;
  border: ${(props) => props.theme.borderHeader};
`;

export const Btn = styled.button`
  position: relative;
  align-items: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: transparent;
  background-color: ${(props) => props.theme.colorBtnAddBkg};
  fill: ${(props) => props.theme.colorBtnAdd};
  transition: ${(props) => props.theme.transitionHover};
  cursor: pointer;
  & svg {
    width: 22px;
    height: 22px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    fill: ${(props) => props.theme.colorBtnAdd};
  }
  &:hover,
  &:focus {
    transition: ${(props) => props.theme.transitionHover};
    background-color: ${(props) => props.theme.colorBtnAddBkgHover};
    border: ${(props) => props.theme.borderBtnAdd};
    svg {
      fill: ${(props) => props.theme.colorBtnSvgHover};
    }
  }
`;
