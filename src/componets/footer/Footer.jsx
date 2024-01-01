import styled from "styled-components";

const Footer = () => {
  return <FooterTodo />;
};
//
//
//
//
//
//
//

// комент

export default Footer;

const FooterTodo = styled.footer`
  display: flex;
  width: 100%;
  height: 30px;
  background-color: ${(props) => props.theme.colorBkgFooter};
  border-radius: 14px 14px 0 0;
  box-shadow: ${(props) => props.theme.shadowFooter};
`;
