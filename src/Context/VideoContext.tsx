import React, { createContext, useContext, useState, ReactNode } from "react";
import videosIniciais from "../videos-reels.json";
import { useFavoritosContext } from "./FavoritosContext";
import { Video } from "../types/video";

// Tipagem do contexto
interface VideoContextType {
  videosReels: Video[];
  toggleFavorite: (id: string) => void;
}

// Criação do contexto
const VideoContext = createContext<VideoContextType | undefined>(undefined);

// Tipagem do provider
interface VideoProviderProps {
  children: ReactNode;
}

export const VideoProvider: React.FC<VideoProviderProps> = ({ children }) => {
  const { adicionarFavorito, removerFavorito } = useFavoritosContext();

  // Conversão e adaptação dos dados mockados para o modelo do backend
  const videosConvertidos: Video[] = videosIniciais.map((video): Video => ({
    id: String(video.id),
    title: video.title,
    description: video.description,
    url: video.path,
    category: { id: "0", name: "Sem categoria" },
    comments: [],
    views: 0,
    watchTime: 0,
    receita: video.receita || "",
    proteinas: video.proteinas ?? 0,
    carboidratos: video.carboidratos ?? 0,
    gorduras: video.gorduras ?? 0,
    fibras: video.fibras ?? 0,
    favorita: video.favorita ?? false,
  }));

  const [videosReels, setVideosReels] = useState<Video[]>(videosConvertidos);

  const toggleFavorite = (id: string) => {
    setVideosReels((prev) =>
      prev.map((video) => {
        if (video.id === id) {
          const atualizado = { ...video, favorita: !video.favorita };
          atualizado.favorita
            ? adicionarFavorito(atualizado)
            : removerFavorito(atualizado.id);
          return atualizado;
        }
        return video;
      })
    );
  };

  return (
    <VideoContext.Provider value={{ videosReels, toggleFavorite }}>
      {children}
    </VideoContext.Provider>
  );
};

// Hook personalizado com verificação
export const useVideoContext = (): VideoContextType => {
  const context = useContext(VideoContext);
  if (!context) {
    throw new Error("useVideoContext deve ser usado dentro de um VideoProvider");
  }
  return context;
};
