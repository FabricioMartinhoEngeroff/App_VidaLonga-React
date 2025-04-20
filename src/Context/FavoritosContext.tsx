import React, { createContext, useContext, useState, ReactNode } from "react";

// Tipagem do vídeo favorito
type Video = {
  id: string;
  [key: string]: any; // permite propriedades extras se necessário
};

// Tipagem do contexto
type FavoritosContextType = {
  favoritos: Video[];
  adicionarFavorito: (video: Video) => void;
  removerFavorito: (id: string) => void;
};

// Criação do contexto com valor inicial "undefined"
export const FavoritosContext = createContext<FavoritosContextType | undefined>(undefined);
FavoritosContext.displayName = "Favoritos";

// Tipagem dos children do provider
type FavoritosProviderProps = {
  children: ReactNode;
};

export const FavoritosProvider: React.FC<FavoritosProviderProps> = ({ children }) => {
  const [favoritos, setFavoritos] = useState<Video[]>([]);

  const adicionarFavorito = (video: Video) => {
    if (!favoritos.some((fav) => fav.id === video.id)) {
      setFavoritos([...favoritos, video]);
    }
  };

  const removerFavorito = (id: string) => {
    setFavoritos(favoritos.filter((video) => video.id !== id));
  };

  return (
    <FavoritosContext.Provider value={{ favoritos, adicionarFavorito, removerFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
};

export const useFavoritosContext = (): FavoritosContextType => {
  const context = useContext(FavoritosContext);
  if (!context) {
    throw new Error("useFavoritosContext deve ser usado dentro de um FavoritosProvider");
  }
  return context;
};