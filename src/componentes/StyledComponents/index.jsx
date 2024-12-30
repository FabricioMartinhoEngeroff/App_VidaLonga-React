import styled from "styled-components";

export const FavoriteButton = styled.button`
  background: none;
  border: none;
  color: ${(props) => (props.$favorito ? "red" : "gray")};
  font-size: 24px;
  cursor: pointer;

  &:hover {
    color: ${(props) => (props.$favorito ? "#ff6666" : "lightgray")};
  }
`;

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
