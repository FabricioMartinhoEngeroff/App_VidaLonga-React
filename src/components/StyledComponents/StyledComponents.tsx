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

  &:hover {
    color: ${(props) => (props.$favorito ? "#ff6666" : "lightgray")};
  }
`;

// Botão de seta simples (sem props customizadas)
export const ArrowButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: gray;

  &:hover {
    color: black;
  }
`;

export default FavoriteButton;