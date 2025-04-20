import React from "react";
import styled from "styled-components";
import Cabecalho from "../../components/Cabecalho/Cabeçalho";
import Rodape from "../../components/Rodape/Rodape";
import BarraNavegacao from "../../components/BarraNavegacao/BarraNavegacao";
import { Outlet } from "react-router-dom";

const FundoGradiente = styled.div`
  background: linear-gradient(
    174.61deg,
    #aebf9f 4.16%,
    #bcc9ad 48%,
    #d3e0c5 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 24px;
  overflow-x: hidden;
`;

const PaginaBase: React.FC = () => {
  return (
    <FundoGradiente>
      <AppContainer>
        <Cabecalho />
        <BarraNavegacao />
        <MainContainer>
          <Outlet />
        </MainContainer>
        <Rodape />
      </AppContainer>
    </FundoGradiente>
  );
};

export default PaginaBase;