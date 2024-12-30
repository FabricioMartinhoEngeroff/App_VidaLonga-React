import React, { createContext, useContext, useState } from "react";

export const ModalContext = createContext();
ModalContext.displayName = "Modal";

export default function ModalProvider({ children }) {
  const [videoSelecionado, setVideoSelecionado] = useState(null);

  const abrirModal = (video) => setVideoSelecionado(video);
  const fecharModal = () => setVideoSelecionado(null);

  const isModalOpen = !!videoSelecionado;

  return (
    <ModalContext.Provider
      value={{
        videoSelecionado,
        abrirModal,
        fecharModal,
        isModalOpen,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModalContext() {
  return useContext(ModalContext);
}
