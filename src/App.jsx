import React from "react";
import { BrowserRouter } from "react-router-dom";
import { VideoProvider } from "./Context/VideoContext";
import { FavoritosProvider } from "./Context/FavoritosContext";
import ModalProvider from "./Context/ModalContext";
import EstilosGlobais from "./componentes/EstilosGlobais";
import ModalVideoZoom from "./paginas/ModalVideosZoom";
import AppRoutes from "./AppRoutes";

const App = () => {
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
