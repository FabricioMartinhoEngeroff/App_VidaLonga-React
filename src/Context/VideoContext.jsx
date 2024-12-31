import React, { createContext, useContext, useState } from "react";
import videosIniciais from "../videos-reels.json";
import { useFavoritosContext } from "./FavoritosContext";

export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [videosReels, setVideosReels] = useState(videosIniciais);
  const { adicionarFavorito, removerFavorito } = useFavoritosContext();

  const toggleFavorite = (id) => {
    setVideosReels((prevVideos) =>
      prevVideos.map((video) => {
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

export const useVideoContext = () => useContext(VideoContext);
