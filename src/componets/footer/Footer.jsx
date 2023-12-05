import styled from "styled-components";

const Footer = () => {
  return <FooterTodo></FooterTodo>;
};

export default Footer;

const FooterTodo = styled.footer`
  display: flex;
  width: 100%;
  height: 30px;
  background-color: ${(props) => props.theme.colorBkgFooter};
`;
