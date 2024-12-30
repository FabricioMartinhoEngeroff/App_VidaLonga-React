import React from "react";
import { useFavoritosContext } from "../../Context/FavoritosContext";
import { useModalContext } from "../../Context/ModalContext";
import { useVideoContext } from "../../Context/VideoContext"; 
import styled from "styled-components";

// Styled Components
const Galeria = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const VideoList = styled.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 16px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const VideoItem = styled.div`
  flex-shrink: 0;
  width: 200px;
  text-align: center;

  video {
    width: 100%;
    height: auto;
    border-radius: 8px;
    cursor: pointer;
    object-fit: cover;
  }
`;

const BotaoRemover = styled.button`
  margin-top: 10px;
  padding: 5px 10px;
  border: none;
  background-color: #f44336;
  color: white;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #d32f2f;
  }
`;

const MensagemVazia = styled.p`
  text-align: center;
  font-size: 18px;
  color: #555;
`;

// Component
const Favoritos = () => {
  const { favoritos, removerFavorito } = useFavoritosContext();
  const { abrirModal } = useModalContext();
  const { toggleFavorite } = useVideoContext();

  const handleVideoHover = (event, action) => {
    if (action === "play") event.target.play();
    if (action === "pause") event.target.pause();
  };

  const handleRemoverFavorito = (id) => {
    removerFavorito(id);
    toggleFavorite(id); // Atualiza o estado do vídeo para desfavoritar em todos os contextos
  };

  if (favoritos.length === 0) {
    return (
      <MensagemVazia>Nenhum vídeo foi adicionado aos favoritos.</MensagemVazia>
    );
  }

  return (
    <Galeria>
      <VideoList>
        {favoritos.map((video) => (
          <VideoItem key={video.id}>
            <video
              src={video.path}
              muted
              playsInline
              onClick={() => abrirModal(video)}
              onMouseEnter={(e) => handleVideoHover(e, "play")}
              onMouseLeave={(e) => handleVideoHover(e, "pause")}
            />
            <BotaoRemover onClick={() => handleRemoverFavorito(video.id)}>
              Remover
            </BotaoRemover>
          </VideoItem>
        ))}
      </VideoList>
    </Galeria>
  );
};

export default Favoritos;
