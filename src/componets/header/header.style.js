import styled from "styled-components";
import { font } from "../../utils/font";

export const Wrapper = styled.header`
  padding-bottom: 15px;
  position: relative;
`;

export const HeaderElement = styled.header`
  display: flex;
  width: 100%;
  background-color: ${(props) => props.theme.colorHeader};
  justify-content: center;
  padding: 20px 0;
  border-radius: 0 0 14px 14px;
  box-shadow: ${(props) => props.theme.shadowHeader};
  position: relative;
`;

export const WrapperLogo = styled.div`
  display: flex;
  align-items: center;
  & svg {
    width: 30px;
    height: 30px;
    margin-right: 10px;
    fill: ${(props) => props.theme.colorSvgHeader};
  }
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.textColorWhite};
  font-family: ${font.fontFamily};
  font-size: 36px;
  font-weight: 700;
`;
