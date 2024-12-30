import { createContext, useContext, useState } from "react";

export const FavoritosContext = createContext();
FavoritosContext.displayName = "Favoritos";

export function FavoritosProvider({ children }) {
  const [favoritos, setFavoritos] = useState([]);

  function adicionarFavorito(video) {
    const favoritoExistente = favoritos.some((item) => item.id === video.id);
    const novaLista = favoritoExistente
      ? favoritos.filter((item) => item.id !== video.id)
      : [...favoritos, video];
    setFavoritos(novaLista);
  }

  return (
    <FavoritosContext.Provider value={{ favoritos, adicionarFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
}

export function useFavoritosContext() {
  return useContext(FavoritosContext);
}
