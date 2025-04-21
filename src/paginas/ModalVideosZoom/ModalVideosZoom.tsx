import React, { useState } from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { useModalContext } from "../../Context/ModalContext";
import { useVideoContext } from "../../Context/VideoContext";
import BotaoFavoritar from "../../components/BotaoFavoritar/BotaoFavoritar";

const ModalBackground = styled.div`
  position: fixed;
  inset: 0;
  background: #000;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  position: relative;
  background: #080808;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 769px) {
    width: 90%;
    height: 90%;
    max-width: 960px;
    border-radius: 12px;
    flex-direction: row;
    overflow: hidden;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 9999;
  background: none;
  border: none;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 32px;
  cursor: pointer;

  &:hover {
    color: #8b5cd6;
  }
`;

const VideoPlayer = styled.div`
  width: 100%;
  background: black;

  video {
    width: 100%;
    height: auto;
    aspect-ratio: 16/9;
    object-fit: cover;
  }

  @media (min-width: 769px) {
    flex: 2;

    video {
      height: 100%;
      width: 100%;
      aspect-ratio: auto;
    }
  }
`;

const Conteudo = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  color: white;
  background-color: #080808;

  @media (min-width: 769px) {
    max-height: 100%;
  }
`;

const Titulo = styled.h3`
  font-size: 20px;
  margin-bottom: 8px;
`;

const Descricao = styled.p`
  font-size: 15px;
  margin-bottom: 12px;
`;

const ReceitaBox = styled.div`
  background: #1c1c1c;
  padding: 12px;
  border-radius: 6px;
  margin-bottom: 16px;
  font-size: 15px;
  color: #ddd;
`;

const Nutrientes = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 16px 0;
  font-size: 14px;
  color: #ccc;

  li {
    margin-bottom: 6px;
    display: flex;
    justify-content: space-between;
  }
`;

const Comentarios = styled.div`
  margin-top: 16px;
`;

const ComentarioTituloLinha = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;

  .titulo {
    font-weight: bold;
    font-size: 15px;
  }
`;

const ComentarioItem = styled.div`
  margin-bottom: 6px;
  font-size: 13px;
  color: #bbb;
`;

const ComentarioForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  input {
    flex: 1;
    padding: 6px 8px;
    border-radius: 6px;
    border: 1px solid #ccc;
    font-size: 13px;
  }

  button {
    align-self: flex-end;
    padding: 6px 10px;
    background-color: #6a0dad;
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 13px;
    cursor: pointer;

    &:hover {
      background-color: #8b5cd6;
    }
  }
`;

const ModalVideoZoom: React.FC = () => {
  const { videoSelecionado, fecharModal } = useModalContext();
  const { videosReels, toggleFavorite } = useVideoContext();

  const [novoComentario, setNovoComentario] = useState("");
  const [comentarios, setComentarios] = useState<string[]>([]);

  if (!videoSelecionado) return null;

  const videoAtualizado = videosReels.find(
    (video) => video.id === videoSelecionado.id
  );

  if (!videoAtualizado) return null;

  const adicionarComentario = () => {
    const comentarioLimpo = novoComentario.trim();
    if (!comentarioLimpo) return;
    setComentarios((prev) => [...prev, `Você: ${comentarioLimpo}`]);
    setNovoComentario("");
  };

  return (
    <ModalBackground onClick={fecharModal}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={fecharModal}><MdClose /></CloseButton>

        <VideoPlayer>
          <video controls autoPlay>
            <source src={videoAtualizado.url} type="video/mp4" />
          </video>
        </VideoPlayer>

        <Conteudo>
          <Titulo>{videoAtualizado.title}</Titulo>
          <Descricao>{videoAtualizado.description}</Descricao>

          <ReceitaBox>
            <strong>Receita:</strong><br />
            {videoAtualizado.receita}
          </ReceitaBox>

          <Nutrientes>
            <li><span><strong>Proteínas:</strong></span> {videoAtualizado.proteinas}g</li>
            <li><span><strong>Carboidratos:</strong></span> {videoAtualizado.carboidratos}g</li>
            <li><span><strong>Gorduras:</strong></span> {videoAtualizado.gorduras}g</li>
            <li><span><strong>Fibras:</strong></span> {videoAtualizado.fibras}g</li>
            <li><span><strong>Calorias:</strong> {videoAtualizado.calorias ?? 0} kcal</span></li>
          </Nutrientes>

          <Comentarios>
            <ComentarioTituloLinha>
              <div className="titulo">Comentários</div>
              <BotaoFavoritar
                favorito={videoAtualizado.favorita ?? false}
                onClick={() => toggleFavorite(videoAtualizado.id)}
              />
            </ComentarioTituloLinha>

            {comentarios.map((c, i) => (
              <ComentarioItem key={i}>{c}</ComentarioItem>
            ))}

            <ComentarioForm>
              <input
                type="text"
                placeholder="Faça um comentário..."
                value={novoComentario}
                onChange={(e) => setNovoComentario(e.target.value)}
              />
              <button onClick={adicionarComentario}>Publicar</button>
            </ComentarioForm>
          </Comentarios>
        </Conteudo>
      </ModalContent>
    </ModalBackground>
  );
};

export default ModalVideoZoom;
