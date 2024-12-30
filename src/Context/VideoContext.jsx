import React, { createContext, useState, useEffect } from "react";
import videosIniciais from "../videos-reels.json";
import { useFavoritosContext } from "./FavoritosContext";

export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [videosReels, setVideosReels] = useState(videosIniciais);
  const { adicionarFavorito } = useFavoritosContext();

  const toggleFavorite = (id) => {
    setVideosReels((prevVideos) =>
      prevVideos.map((video) =>
        video.id === id ? { ...video, favorita: !video.favorita } : video
      )
    );
  };

  useEffect(() => {
    videosReels.forEach((video) => {
      if (video.favorita) {
        adicionarFavorito(video);
      }
    });
  }, [videosReels, adicionarFavorito]);

  return (
    <VideoContext.Provider value={{ videosReels, toggleFavorite }}>
      {children}
    </VideoContext.Provider>
  );
};
