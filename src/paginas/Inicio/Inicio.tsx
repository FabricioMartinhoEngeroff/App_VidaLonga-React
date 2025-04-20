import React from "react";
import styled from "styled-components";
import { FiArrowRight } from "react-icons/fi";
import { useVideoContext } from "../../Context/VideoContext";
import { useModalContext } from "../../Context/ModalContext";
import Carrossel from "../../components/Carrossel/Carrossel";
import Titulo from "../../components/Titulo/Titulo";
import BotaoFavoritar from "../../components/BotaoFavoritar/BotaoFavoritar";

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
  max-width: 200px;
  text-align: center;

  video {
    width: 100%;
    height: auto;
    border-radius: 8px;
    object-fit: cover;
  }

  h3 {
    margin-top: 10px;
    font-size: 16px;
    color: #000;
    text-align: center;
  }
`;

const Inicio: React.FC = () => {
  const { videosReels, toggleFavorite } = useVideoContext();
  const { abrirModal } = useModalContext();

  const handleVerTudoClick = () => {
    console.log("Redirecionando para todos os vídeos...");
  };

  return (
    <div>
      <TituloContainer>
        <Titulo $alinhamento="left">Reels</Titulo>
        <VerTudo onClick={handleVerTudoClick}>
          Ver tudo <FiArrowRight />
        </VerTudo>
      </TituloContainer>
      <Carrossel>
        {videosReels.map((video) => (
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
            <BotaoFavoritar
              favorito={video.favorita}
              onClick={() => toggleFavorite(video.id)}
            />
          </VideoItem>
        ))}
      </Carrossel>
    </div>
  );
};

export default Inicio;
