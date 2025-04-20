import styled from "styled-components";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

type StyledProps = {
  $favorito?: boolean;
};

type Props = {
  favorito?: boolean;
  onClick?: () => void;
};

const StyledButton = styled.button<StyledProps>`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: ${({ $favorito }) => ($favorito ? "#8b5cd6" : "#b78afa")};

  &:hover {
    color: ${({ $favorito }) => ($favorito ? "#6a0dad" : "#8b5cd6")};
  }
`;

const BotaoFavoritar: React.FC<Props> = ({ favorito = false, onClick }) => {
  return (
    <StyledButton $favorito={favorito} onClick={onClick}>
      {favorito ? <MdFavorite /> : <MdFavoriteBorder />}
    </StyledButton>
  );
};

export default BotaoFavoritar;