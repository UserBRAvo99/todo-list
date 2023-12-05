import "normalize.css";

import Header from "./componets/header/Header";
import Main from "./componets/main/Main";
import styled from "styled-components";
import Footer from "./componets/footer/Footer";

function App() {
  return (
    <Wrapper>
      <Header />
      <Main />
      <Footer />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  background-image: url("https://img.freepik.com/premium-vector/vector-cartoon-flat-illustration-seamless-pattern-with-christmas-doodle-icons-new-year-decorations-background_364586-350.jpg?w=740");
  background-size: contain;
`;
