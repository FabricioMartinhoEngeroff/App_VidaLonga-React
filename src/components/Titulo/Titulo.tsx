import styled from "styled-components";

// Tipagem da prop $alinhamento
type TituloProps = {
  $alinhamento?: "left" | "center" | "right";
};

// Componente estilizado com prop tipada
const Titulo = styled.h2<TituloProps>`
  color: #6a0dad;
  font-size: 32px;
  text-align: ${(props) => (props.$alinhamento ? props.$alinhamento : "left")};
`;

export default Titulo;