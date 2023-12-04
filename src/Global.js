import { createGlobalStyle } from "styled-components";

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
`;

export default Global;
