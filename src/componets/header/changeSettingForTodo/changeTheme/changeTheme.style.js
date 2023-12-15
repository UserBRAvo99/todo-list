import styled, { css } from "styled-components";

export const BoxTheme = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  ${({ $theme }) => {
    if ($theme === "forest") {
      return css`
        background: radial-gradient(
          circle,
          rgba(22, 113, 92, 1) 0%,
          rgba(148, 67, 85, 1) 35%,
          rgba(255, 255, 255, 1) 100%
        );
      `;
    }
    if ($theme === "classic") {
      return css`
        background: radial-gradient(
          circle,
          rgba(255, 255, 255, 1) 0%,
          rgba(11, 117, 190, 1) 100%
        );
      `;
    }
    if ($theme === "dark") {
      return css`
        background: radial-gradient(
          circle,
          rgba(0, 0, 0, 1) 0%,
          rgba(255, 255, 255, 1) 100%
        );
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
