import styled from "styled-components";
import CampoTexto from "../CampoTexto";
import Titulo from "../Titulo";

const HeaderEstilizado = styled.header`
  background-color: #7da873;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  height: 80px;
`;

const LogoETituloContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Logo = styled.img`
  height: 85px;
  width: auto;
  margin: 10;
  padding: 0;
  display: block;
  outline: none;
  box-shadow: #629359;
  background-color: #629359;
`;

const CampoTextoContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  max-width: 400px;
`;

const Cabecalho = () => {
  return (
    <HeaderEstilizado>
      <LogoETituloContainer>
        <Logo src="/Logo.png" alt="Logo" />
        <Titulo $alinhamento="left">Vida Longa Flix</Titulo>
      </LogoETituloContainer>
      <CampoTextoContainer>
        <CampoTexto placeholder="Pesquisar..." />
      </CampoTextoContainer>
    </HeaderEstilizado>
  );
};

export default Cabecalho;
