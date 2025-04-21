import styled from "styled-components";
import CampoTexto from "../CampoTexto/CampoTexto";
import Titulo from "../Titulo/Titulo";

// Header com responsividade
const HeaderEstilizado = styled.header`
  background-color: #7da873;
  padding: 10px 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  height: auto;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

// Container logo + título
const LogoETituloContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

// Logo responsiva
const Logo = styled.img`
  height: 50px;
  width: auto;
  margin: 0;
  padding: 0;
  display: block;
  background-color: #629359;
  border-radius: 50%;
`;

// Campo de texto alinhado e adaptável
const CampoTextoContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  max-width: 400px;

  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
  }
`;

const Cabecalho: React.FC = () => {
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
