import React from "react";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { VideoProvider } from "./Context/VideoContext";
import { FavoritosProvider } from "./Context/FavoritosContext";
import ModalProvider from "./Context/ModalContext";
import Cabecalho from "./componentes/Cabecalho";
import BarraLateral from "./componentes/BarraLateral";
import Footer from "./componentes/Rodape";
import AppRoutes from "./AppRoutes";
import EstilosGlobais from "./componentes/EstilosGlobais";
import ModalVideoZoom from "./paginas/ModalVideosZoom";

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
  gap: 24px;
  flex-grow: 1;
  overflow-x: hidden;
`;

const App = () => (
  <BrowserRouter>
    <FavoritosProvider> 
      <VideoProvider>
        <ModalProvider>
          <FundoGradiente>
            <EstilosGlobais />
            <AppContainer>
              <Cabecalho />
              <MainContainer>
                <BarraLateral />
                <AppRoutes />
              </MainContainer>
              <Footer />
              <ModalVideoZoom />
            </AppContainer>
          </FundoGradiente>
        </ModalProvider>
      </VideoProvider>
    </FavoritosProvider>
  </BrowserRouter>
);

export default App;