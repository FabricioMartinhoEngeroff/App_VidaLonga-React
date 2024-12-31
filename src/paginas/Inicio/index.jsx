import React, { useContext } from "react";
import styled from "styled-components";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { FiArrowRight } from "react-icons/fi"; // Importa a seta
import { VideoContext } from "../../Context/VideoContext";
import { useModalContext } from "../../Context/ModalContext";
import Carrossel from "../../componentes/Carrossel";
import Titulo from "../../componentes/Titulo";

const TituloContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px; /* Define o espaçamento mínimo entre o título e "Ver tudo" */
  padding: 0 20px;
  margin-bottom: 5px; /* Espaço entre o título e o carrossel */
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
    margin-left: 3px; /* Pequeno espaçamento entre o texto e a seta */
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

const FavoriteButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #8b5cd6;
`;

const Inicio = () => {
  const { videosReels, toggleFavorite } = useContext(VideoContext);
  const { abrirModal } = useModalContext();

  const handleVerTudoClick = () => {
    console.log("Redirecionando para a página de todos os vídeos...");
    // Aqui você pode adicionar lógica para redirecionar
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
              <FavoriteButton onClick={() => toggleFavorite(video.id)}>
                {video.favorita ? <MdFavorite /> : <MdFavoriteBorder />}
              </FavoriteButton>
            </div>
          </VideoItem>
        ))}
      </Carrossel>
    </div>
  );
};

export default Inicio;
