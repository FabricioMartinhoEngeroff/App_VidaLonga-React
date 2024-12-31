import React, { useContext } from "react";
import styled from "styled-components";
import { FiArrowRight } from "react-icons/fi";
import { VideoContext } from "../../Context/VideoContext";
import { useModalContext } from "../../Context/ModalContext";
import Carrossel from "../../componentes/Carrossel";
import Titulo from "../../componentes/Titulo";
import BotaoFavoritar from "../../componentes/BotaoFavoritar";

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

const Inicio = () => {
  const { videosReels, toggleFavorite } = useContext(VideoContext);
  const { abrirModal } = useModalContext();

  const handleVerTudoClick = () => {
    console.log("Redirecionando para a página de todos os vídeos...");
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
              src={video.path}
              onClick={() => abrirModal(video)}
              muted
              playsInline
              onMouseEnter={(e) => e.target.play()}
              onMouseLeave={(e) => e.target.pause()}
            />
            <h3>{video.title}</h3>
            <div className="favorite-container">
              <BotaoFavoritar
                favorito={video.favorita}
                onClick={() => toggleFavorite(video.id)}
              />
            </div>
          </VideoItem>
        ))}
      </Carrossel>
    </div>
  );
};

export default Inicio;
