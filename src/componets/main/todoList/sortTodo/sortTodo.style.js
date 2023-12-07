import styled from "styled-components";

export const Wrapper = styled.div`
  display: none;
  @media screen and (min-width: 767px) {
    display: flex;
  }
`;

export const List = styled.ul`
  display: flex;
  gap: 10px;
`;

export const Item = styled.li`
  display: flex;
`;

export const Span = styled.span`
  color: ${(props) => props.theme.textColorWhite};
`;

export const Btn = styled.button`
  padding: 10px;
  width: 34px;
  height: 34px;
  margin: auto 0;
  background-color: transparent;
  border: transparent;
  position: relative;
  transition: ${(props) => props.theme.transitionHover};
  border-radius: ${(props) => props.theme.borderRadiusFormItem};
  cursor: pointer;
  & svg {
    position: absolute;
    width: 22px;
    height: 22px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    fill: ${(props) => props.theme.textColorWhite};
  }
  &:hover,
  &:focus {
    transition: ${(props) => props.theme.transitionHover};
    background-color: ${(props) => props.theme.colorBtnFilterBkgHover};
    svg {
      transition: ${(props) => props.theme.transitionHover};
      fill: ${(props) => props.theme.colorBtnSvgFilterHover};
    }
  }
`;
