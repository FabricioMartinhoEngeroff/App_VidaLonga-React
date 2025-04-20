import React from "react";
import styled from "styled-components";
import { MdClose, MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { useModalContext } from "../../Context/ModalContext";
import { useVideoContext } from "../../Context/VideoContext";
import BotaoFavoritar from "../../components/BotaoFavoritar/BotaoFavoritar";


const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: relative;
  background: #080808;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const VideoContainer = styled.div`
  flex: 3;

  video {
    width: 100%;
    border-radius: 8px;
    aspect-ratio: 16/9;
  }
`;

const DescriptionContainer = styled.div`
  flex: 1;
  color: white;

  h3 {
    margin-bottom: 10px;
    font-size: 24px;
  }

  p {
    margin-bottom: 20px;
    font-size: 16px;
    line-height: 1.5;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 32px;
  color: white;
  cursor: pointer;

  &:hover {
    color: #8b5cd6;
  }
`;

const ModalVideoZoom: React.FC = () => {
  const { videoSelecionado, fecharModal } = useModalContext();
  const { videosReels, toggleFavorite } = useVideoContext();

  if (!videoSelecionado) return null;

  const videoAtualizado = videosReels.find(
    (video) => video.id === videoSelecionado.id
  );

  if (!videoAtualizado) return null;

  return (
    <ModalBackground onClick={fecharModal}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={fecharModal}>
          <MdClose />
        </CloseButton>
        <VideoContainer>
          <video controls>
            <source src={videoAtualizado.url} type="video/mp4" />
          </video>
        </VideoContainer>
        <DescriptionContainer>
          <h3>{videoAtualizado.title}</h3>
          <p>{videoAtualizado.description}</p>
          <BotaoFavoritar
            favorito={videoAtualizado.favorita ?? false}
            onClick={() => toggleFavorite(videoAtualizado.id)}
          />
        </DescriptionContainer>
      </ModalContent>
    </ModalBackground>
  );
};

export default ModalVideoZoom;
