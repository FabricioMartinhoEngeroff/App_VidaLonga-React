import React from "react";
import styled from "styled-components";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

const StyledButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: ${({ $favorito }) => ($favorito ? "#8b5cd6" : "#b78afa")};

  &:hover {
    color: ${({ $favorito }) => ($favorito ? "#6a0dad" : "#8b5cd6")};
  }
`;

const BotaoFavoritar = ({ favorito = false, onClick }) => {
  return (
    <StyledButton $favorito={favorito} onClick={onClick}>
      {favorito ? <MdFavorite /> : <MdFavoriteBorder />}
    </StyledButton>
  );
};

export default BotaoFavoritar;
