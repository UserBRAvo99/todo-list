import styled from "styled-components";

export const Wrapper = styled.ul`
  padding: 15px 0;
  width: 100%;
  @media screen and (min-width: 530px) {
    width: 500px;
    margin: 0 auto;
  }
`;

export const List = styled.ul`
  display: flex;
  width: 100%;
  min-height: 56px;
  justify-content: space-around;
  height: auto;
  background-color: ${(props) => props.theme.colorListBkg};
  border-radius: ${(props) => props.theme.borderRadiusFormItem};
  box-shadow: ${(props) => props.theme.shadowHeader};
  align-items: center;
  padding: 5px;
`;

export const Item = styled.li``;

export const Btn = styled.button`
  border: transparent;
  background-color: transparent;
  color: ${(props) => props.theme.textColorWhite};
  border-radius: ${(props) => props.theme.borderRadiusFormItem};
  padding: 10px;
  transition: ${(props) => props.theme.transitionHover};
  cursor: pointer;
  &:hover,
  &:focus {
    transition: ${(props) => props.theme.transitionHover};
    background-color: ${(props) => props.theme.colorBtnFilterBkgHover};
    color: ${(props) => props.theme.textColorBlack};
  }
`;

export const Span = styled.span`
  color: inherit;
  color: ${(props) => props.theme.textColorWhite};
`;
