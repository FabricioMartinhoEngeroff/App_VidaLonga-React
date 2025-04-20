import React, { createContext, useContext, useState, ReactNode } from "react";

// Tipagem do vídeo (você pode expandir conforme necessário)
type Video = {
  id: string;
  [key: string]: any;
};

// Tipagem do contexto
type ModalContextType = {
  videoSelecionado: Video | null;
  abrirModal: (video: Video) => void;
  fecharModal: () => void;
  isModalOpen: boolean;
};

// Criação do contexto
export const ModalContext = createContext<ModalContextType | undefined>(undefined);
ModalContext.displayName = "Modal";

// Tipagem do provider
type ModalProviderProps = {
  children: ReactNode;
};

export default function ModalProvider({ children }: ModalProviderProps) {
  const [videoSelecionado, setVideoSelecionado] = useState<Video | null>(null);

  const abrirModal = (video: Video) => setVideoSelecionado(video);
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

// Hook personalizado para acessar o contexto com segurança
export function useModalContext(): ModalContextType {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModalContext deve ser usado dentro de um ModalProvider");
  }
  return context;
}