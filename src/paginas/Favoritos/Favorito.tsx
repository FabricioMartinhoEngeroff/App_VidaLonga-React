import React from "react";
import { useFavoritosContext } from "../../Context/FavoritosContext";
import { useModalContext } from "../../Context/ModalContext";
import { useVideoContext } from "../../Context/VideoContext";
import styled from "styled-components";
import { FiArrowRight } from "react-icons/fi";
import Carrossel from "../../components/Carrossel/Carrossel";
import Titulo from "../../components/Titulo/Titulo";
import { Video } from "../../types/video";

const TituloContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 20px;
  margin-bottom: 5px;
`;

const VerTudo = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  font-size: 14px;
  color: #6a0dad;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    color: #8b5cd6;
  }

  svg {
    margin-left: 3px;
  }
`;

const VideoItem = styled.div`
  flex-shrink: 0;
  width: 200px;
  text-align: center;

  video {
    width: 100%;
    border-radius: 8px;
    object-fit: cover;
  }

  h3 {
    margin-top: 10px;
    font-size: 16px;
    color: #000;
  }
`;

const BotaoRemover = styled.button`
  margin-top: 10px;
  padding: 5px 10px;
  border: none;
  background-color: rgba(187, 6, 248, 0.2);
  color: rgba(255, 255, 255, 0.7);
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #8b5cd6;
    color: white;
  }
`;

const MensagemVazia = styled.p`
  text-align: center;
  font-size: 18px;
  color: #555;
`;

const Favoritos: React.FC = () => {
  const { favoritos, removerFavorito } = useFavoritosContext();
  const { abrirModal } = useModalContext();
  const { toggleFavorite } = useVideoContext();

  const handleVerTudoClick = () => {
    console.log("Redirecionando para a página de favoritos...");
  };

  if (favoritos.length === 0) {
    return (
      <MensagemVazia>Nenhum vídeo foi adicionado aos favoritos.</MensagemVazia>
    );
  }

  return (
    <div>
      <TituloContainer>
        <Titulo $alinhamento="left">Favoritos</Titulo>
        <VerTudo onClick={handleVerTudoClick}>
          Ver tudo <FiArrowRight />
        </VerTudo>
      </TituloContainer>

      <Carrossel>
      {favoritos.map((video) => (
  <VideoItem key={video.id}>
    <video
      src={video.url} 
      muted
      playsInline
      onClick={() => abrirModal(video)}
      onMouseEnter={(e) => (e.currentTarget as HTMLVideoElement).play()}
      onMouseLeave={(e) => (e.currentTarget as HTMLVideoElement).pause()}
    />
    <h3>{video.title}</h3>
    <BotaoRemover onClick={() => toggleFavorite(video.id)}>
      Remover
    </BotaoRemover>
  </VideoItem>
))}
      </Carrossel>
    </div>
  );
};

export default Favoritos;