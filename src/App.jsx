import "normalize.css";

import Header from "./componets/header/Header";
import Main from "./componets/main/Main";
import styled, { ThemeProvider } from "styled-components";
import Footer from "./componets/footer/Footer";
import { useSelector } from "react-redux";

import Global from "./Global";
import { classic } from "./utils/theme/themeClassic";
import { forest } from "./utils/theme/themeForest";
import { dark } from "./utils/theme/themeDark";

function App() {
  const { setting } = useSelector((state) => state.settingSlice);

  return (
    <ThemeProvider
      theme={
        setting.theme === "classic"
          ? classic
          : setting.theme === "dark"
          ? dark
          : forest
      }
    >
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
  background-image: ${(props) => props.theme.imgBkgGlobal};
  background-size: contain;
`;
