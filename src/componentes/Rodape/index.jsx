import styled from "styled-components";

const Rodape = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background-color: #629359;
  color: black;
  font-size: 14px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
`;

const Footer = () => (
  <Rodape>
    <p>&copy; 2024 Receitas Saudáveis</p>
    <p>Desenvolvido por Dev Fabricio</p>
  </Rodape>
);

export default Footer;
