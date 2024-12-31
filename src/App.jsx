import React from "react";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { VideoProvider } from "./Context/VideoContext";
import { FavoritosProvider } from "./Context/FavoritosContext";
import ModalProvider from "./Context/ModalContext";
import Cabecalho from "./componentes/Cabecalho";
import BarraNavegacao from "./componentes/BarraNavegacao"; // Substituindo a BarraLateral
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
  flex-direction: column;
  flex-grow: 1;
  gap: 24px;
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
              {/* Cabeçalho no topo */}
              <Cabecalho />

              {/* Barra de Navegação Horizontal */}
              <BarraNavegacao />

              {/* Conteúdo Principal */}
              <MainContainer>
                <AppRoutes />
              </MainContainer>

              {/* Rodapé */}
              <Footer />

              {/* Modal de Zoom para Vídeos */}
              <ModalVideoZoom />
            </AppContainer>
          </FundoGradiente>
        </ModalProvider>
      </VideoProvider>
    </FavoritosProvider>
  </BrowserRouter>
);

export default App;
