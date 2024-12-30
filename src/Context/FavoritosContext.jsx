import React, { createContext, useContext, useState } from "react";

export const FavoritosContext = createContext();
FavoritosContext.displayName = "Favoritos";

export const FavoritosProvider = ({ children }) => {
  const [favoritos, setFavoritos] = useState([]);

  const adicionarFavorito = (video) => {
    if (!favoritos.some((fav) => fav.id === video.id)) {
      setFavoritos([...favoritos, video]);
    }
  };

  const removerFavorito = (id) => {
    setFavoritos(favoritos.filter((video) => video.id !== id));
  };

  return (
    <FavoritosContext.Provider value={{ favoritos, adicionarFavorito, removerFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
};

export const useFavoritosContext = () => {
  return useContext(FavoritosContext);
};