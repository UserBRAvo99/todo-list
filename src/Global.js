// Global - встановлюємо глобальні стилі, інструмент  styled-components
import { createGlobalStyle } from "styled-components";
import { font } from "./utils/font";

const Global = createGlobalStyle`
* {
  box-sizing: border-box;
}
ul,
li,
h1,
h2,
h3,
h4,
h5,
p, button {
  padding: 0;
  margin: 0;
  list-style: none;
}

body {
font-family: ${font.fontFamily};
font-size: ${font.fontSize};
font-style: ${font.fontStyle};
font-weight: ${font.fontWeight};
line-height: ${font.lineHeight};
letter-spacing: ${font.letterSpacing};

background-color: ${(props) => props.theme.colorBody};;

@media screen and (min-width: 1024px) {
    width: 1024px;
    margin: 0 auto;
  }
}

.container {
  padding: 0 18px;
  @media screen and (min-width: 767px) {
    padding: 0 30px;
  }
  @media screen and (min-width: 1023px) {
    padding: 0 60px;
  }
}

.hidden {
  @media screen and (max-width: 767px) {
    display: none;
  }
}

.activeFilter {
  background-color: ${(props) => props.theme.colorBtnFilterBkgHover};
    svg {
      fill: ${(props) => props.theme.colorBtnSvgFilterHover};
    }
}

.activeLanguage {
  box-shadow: ${(props) => props.theme.shadowForSettingsLanguage};
}
`;

export default Global;
