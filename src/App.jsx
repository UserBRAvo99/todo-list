import "normalize.css";

import Header from "./componets/header/Header";
import Main from "./componets/main/Main";
import styled, { ThemeProvider } from "styled-components";
import Footer from "./componets/footer/Footer";
// import { useState } from "react";

import Global from "./Global";
import { forest } from "./utils/theme";

function App() {
  // const [globalTheme, setGlobalTheme] = useState(forest);

  return (
    <ThemeProvider theme={forest}>
      <Wrapper>
        <Header />
        <Main />
        <Footer />
      </Wrapper>
      <Global />
    </ThemeProvider>
  );
}

export default App;

const Wrapper = styled.div`
  background-image: url("https://img.freepik.com/premium-vector/vector-cartoon-flat-illustration-seamless-pattern-with-christmas-doodle-icons-new-year-decorations-background_364586-350.jpg?w=740");
  background-size: contain;
`;
