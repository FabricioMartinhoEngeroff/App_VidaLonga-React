import React from "react";
import { BrowserRouter } from "react-router-dom";
import { VideoProvider } from "./Context/VideoContext";
import { FavoritosProvider } from "./Context/FavoritosContext";
import ModalProvider from "./Context/ModalContext";
import EstilosGlobais from "./components/EstilosGlobais/EstilosGlobais";
import ModalVideoZoom from "./paginas/ModalVideosZoom/ModalVideosZoom";
import AppRoutes from "./AppRoutes";
import BarraNavegacao from "@components/BarraNavegacao/BarraNavegacao";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <FavoritosProvider>
        <VideoProvider>
          <ModalProvider>
            <EstilosGlobais />
            <AppRoutes />
            <ModalVideoZoom />
          </ModalProvider>
        </VideoProvider>
      </FavoritosProvider>
    </BrowserRouter>
  );
};

export default App;