import React from "react";
import styled from "styled-components";
import { useFavoritosContext } from "../../Context/FavoritosContext";
import { useModalContext } from "../../Context/ModalContext";

const GaleriaContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 20px;
`;

const VideoCard = styled.div`
  flex: 0 1 calc(25% - 16px);
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  background-color: #f9f9f9;

  video {
    width: 100%;
    height: auto;
    border-radius: 8px;
    cursor: pointer;
  }
`;

const Favoritos = () => {
  const { favoritos } = useFavoritosContext();
  const { abrirModal } = useModalContext();

  if (favoritos.length === 0) {
    return <p>Você ainda não possui vídeos favoritos.</p>;
  }

  return (
    <GaleriaContainer>
      {favoritos.map((video) => (
        <VideoCard key={video.id}>
          <video
            src={video.path}
            onClick={() => abrirModal(video)}
            controls
          />
          <h4>{video.title}</h4>
        </VideoCard>
      ))}
    </GaleriaContainer>
  );
};

export default Favoritos;
