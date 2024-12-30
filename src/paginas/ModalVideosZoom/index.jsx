import React from "react";
import styled from "styled-components";
import { MdClose, MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { useModalContext } from "../../Context/ModalContext";
import { useFavoritosContext } from "../../Context/FavoritosContext";

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
    color: red;
  }
`;

const FavoriteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: ${({ $favorito }) => ($favorito ? "red" : "white")};
  display: flex;
  align-items: center;

  &:hover {
    color: ${({ $favorito }) => ($favorito ? "darkred" : "lightgray")};
  }
`;

const ModalVideoZoom = () => {
  const { videoSelecionado, fecharModal } = useModalContext();
  const { adicionarFavorito } = useFavoritosContext();

  if (!videoSelecionado) return null;

  return (
    <ModalBackground onClick={fecharModal}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={fecharModal}>
          <MdClose />
        </CloseButton>
        <VideoContainer>
          <video controls>
            <source src={videoSelecionado.path} type="video/mp4" />
          </video>
        </VideoContainer>
        <DescriptionContainer>
          <h3>{videoSelecionado.title}</h3>
          <p>{videoSelecionado.description}</p>
          <FavoriteButton
            $favorito={videoSelecionado.favorita}
            onClick={() => adicionarFavorito(videoSelecionado)}
          >
            {videoSelecionado.favorita ? <MdFavorite /> : <MdFavoriteBorder />}
          </FavoriteButton>
        </DescriptionContainer>
      </ModalContent>
    </ModalBackground>
  );
};

export default ModalVideoZoom;
