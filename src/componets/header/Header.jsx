import styled from "styled-components";

const Header = () => {
  return (
    <>
      <HeaderElement>
        <div>
          <h1>Todo</h1>
        </div>
      </HeaderElement>
    </>
  );
};

export default Header;

const HeaderElement = styled.header`
  display: flex;
  width: 100%;
  background-color: pink;
  justify-content: center;
  padding: 0 20px;
`;
