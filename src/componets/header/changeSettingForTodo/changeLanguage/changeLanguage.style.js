import styled, { css } from "styled-components";

export const BoxFlag = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  ${({ $flag }) => {
    if ($flag === "england") {
      return css`
        background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/320px-Flag_of_the_United_Kingdom_%281-2%29.svg.png");
      `;
    }
    if ($flag === "ukraine") {
      return css`
        background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/320px-Flag_of_Ukraine.svg.png");
      `;
    }
    if ($flag === "sweden") {
      return css`
        background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Sweden.svg/320px-Flag_of_Sweden.svg.png");
      `;
    }
  }}
  background-size: cover;
  background-position: center;
  cursor: pointer;
  transition: ${(props) => props.theme.transitionHover};
  &:hover,
  &:focus {
    transition: ${(props) => props.theme.transitionHover};
    box-shadow: ${(props) => props.theme.shadowForSettingsLanguage};
  }
`;
