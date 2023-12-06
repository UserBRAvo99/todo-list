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

.container {
  padding: 0 20px
}
body {
font-family: ${font.fontFamily};
font-size: ${font.fontSize};
font-style: ${font.fontStyle};
font-weight: ${font.fontWeight};
line-height: ${font.lineHeight};
letter-spacing: ${font.letterSpacing};
}
`;

export default Global;
