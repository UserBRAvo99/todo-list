import styled from "styled-components";

import { font } from "../../../utils/font";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  background-color: ${(props) => props.theme.colorBkgSetting};
  border-radius: ${(props) => props.theme.borderRadiusFormItem};
  padding: 20px;
`;

export const Title = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: ${(props) => props.theme.colorModalTitle};
  font-family: ${font.fontFamily};
  align-items: center;
  text-align: center;
  padding: 0 0 30px 0;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Btn = styled.button`
  background-color: ${(props) => props.theme.colorBtnBkg};
  color: ${(props) => props.theme.colorBtnTitle};
  border: transparent;
  padding: 10px 20px;
  border-radius: ${(props) => props.theme.borderRadiusFormItem};
  font-size: 18px;
  margin: 0 auto;
  cursor: pointer;
  transition: ${(props) => props.theme.transitionHover};
  &:hover,
  &:focus {
    transition: ${(props) => props.theme.transitionHover};
    background-color: ${(props) => props.theme.colorBtnBkgHover};
    color: ${(props) => props.theme.colorBtnTitleHover};
    box-shadow: ${(props) => props.theme.ShadowBtnChange};
  }
`;
