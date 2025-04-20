import styled from "styled-components";

// Tipagem para a prop personalizada do botão
type FavoriteButtonProps = {
  $favorito?: boolean;
};

// Botão de favorito com cor dinâmica
export const FavoriteButton = styled.button<FavoriteButtonProps>`
  background: none;
  border: none;
  color: ${(props) => (props.$favorito ? "red" : "gray")};
  font-size: 24px;
  cursor: pointer;
  margin-top: 8px;

  &:hover {
    color: ${(props) => (props.$favorito ? "#ff6666" : "lightgray")};
  }

  @media (max-width: 768px) {
    font-size: 28px;
    margin-top: 12px;
    align-self: center;
  }
`;

// Botão de seta simples (sem props customizadas)
export const ArrowButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: gray;
  padding: 8px;

  &:hover {
    color: black;
  }

  @media (max-width: 768px) {
    font-size: 28px;
    padding: 12px;
  }
`;

export default FavoriteButton;
