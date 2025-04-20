import React, { useState } from "react";
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

const VideoCard = styled.div`
  width: 100%;
  max-width: 300px;
  background: rgba(98, 147, 89, 0.15); /* ajustável */
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  padding: 12px;
  margin: 0 8px;
  display: flex;
  flex-direction: column;
`;

const VideoWrapper = styled.div`
  position: relative;

  video {
    width: 100%;
    border-radius: 8px;
    object-fit: cover;
  }
`;

const LikeArea = styled.div`
  margin-top: 6px;
  display: flex;
  align-items: center;
`;

const InfoArea = styled.div`
  margin-top: 8px;

  h3 {
    font-size: 15px;
    margin-bottom: 4px;
    color: #000;
  }

  .descricao {
    font-size: 13px;
    color: #555;
  }
`;

const Comentarios = styled.div`
  margin-top: 8px;
  font-size: 12px;
  color: #333;

  .titulo {
    font-weight: bold;
    margin-bottom: 4px;
    color: #444;
  }

  span {
    display: block;
    margin-bottom: 2px;
  }

  .verTodos {
    color: #888;
    cursor: pointer;
    margin-bottom: 6px;

    &:hover {
      color: #6a0dad;
      text-decoration: underline;
    }
  }
`;

const ComentarioForm = styled.div`
  display: flex;
  gap: 6px;
  margin-top: 6px;

  input {
    flex: 1;
    padding: 6px 8px;
    border-radius: 6px;
    border: 1px solid #ccc;
    font-size: 12px;
  }

  button {
    padding: 6px 10px;
    background-color: #6a0dad;
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 12px;
    cursor: pointer;

    &:hover {
      background-color: #8b5cd6;
    }
  }
`;

// Componente Inicio refatorado
const Inicio: React.FC = () => {
  const { videosReels, toggleFavorite } = useVideoContext();
  const { abrirModal } = useModalContext();

  const [comentariosState, setComentariosState] = useState<{ [id: string]: string[] }>(
    Object.fromEntries(videosReels.map((video) => [video.id, video.comments?.map(c => `${c.user?.name ?? "user"}: ${c.text}`) || []]))
  );

  const [novoComentario, setNovoComentario] = useState<{ [id: string]: string }>({});

  const adicionarComentario = (id: string) => {
    if (!novoComentario[id]) return;
    const texto = `Você: ${novoComentario[id]}`;

    setComentariosState((prev) => ({
      ...prev,
      [id]: [...(prev[id] || []), texto],
    }));

    setNovoComentario((prev) => ({ ...prev, [id]: "" }));
  };

  return (
    <div>
      <TituloContainer>
        <Titulo $alinhamento="left">Reels</Titulo>
        <VerTudo onClick={() => console.log("Ver tudo")}>
          Ver tudo <FiArrowRight />
        </VerTudo>
      </TituloContainer>

      <Carrossel>
        {videosReels.map((video) => (
          <VideoCard key={video.id}>
            <VideoWrapper>
              <video
                src={video.url}
                muted
                playsInline
                onClick={() => abrirModal(video)}
                onMouseEnter={(e) => (e.currentTarget as HTMLVideoElement).play()}
                onMouseLeave={(e) => (e.currentTarget as HTMLVideoElement).pause()}
              />
            </VideoWrapper>

            <LikeArea>
              <BotaoFavoritar
                favorito={video.favorita}
                onClick={() => toggleFavorite(video.id)}
              />
            </LikeArea>

            <InfoArea>
              <h3>{video.title}</h3>
              <p className="descricao">{video.description}</p>
            </InfoArea>

            <Comentarios>
              {comentariosState[video.id]?.length > 2 && (
                <span className="verTodos" onClick={() => abrirModal(video)}>
                  Ver todos os {comentariosState[video.id].length} comentários
                </span>
              )}

              <div className="titulo">Comentários</div>
              {comentariosState[video.id]?.slice(-2).map((comentario, index) => (
                <span key={index}>{comentario}</span>
              ))}
            </Comentarios>

            <ComentarioForm>
              <input
                type="text"
                placeholder="Adicione um comentário..."
                value={novoComentario[video.id] || ""}
                onChange={(e) =>
                  setNovoComentario((prev) => ({
                    ...prev,
                    [video.id]: e.target.value,
                  }))
                }
              />
              <button onClick={() => adicionarComentario(video.id)}>Publicar</button>
            </ComentarioForm>
          </VideoCard>
        ))}
      </Carrossel>
    </div>
  );
};

export default Inicio;