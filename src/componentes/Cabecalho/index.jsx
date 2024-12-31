import styled from "styled-components";
import CampoTexto from "../CampoTexto";
import Titulo from "../Titulo";

const HeaderEstilizado = styled.header`
  background-color: #629359;
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
  gap: 10px;
`;

const Logo = styled.img`
  height: 50px;
  width: auto;
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
