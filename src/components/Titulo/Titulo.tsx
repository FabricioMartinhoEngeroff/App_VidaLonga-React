import styled from "styled-components";

// Tipagem da prop $alinhamento
type TituloProps = {
  $alinhamento?: "left" | "center" | "right";
};

// Componente estilizado com responsividade
const Titulo = styled.h2<TituloProps>`
  color: #6a0dad;
  font-size: 32px;
  text-align: ${(props) => props.$alinhamento || "left"};
  word-break: break-word;
  margin: ${(props) => (props.$alinhamento === "center" ? "0 auto" : "0")};

  @media (max-width: 768px) {
    font-size: 24px;
    padding: 0 10px;
  }
`;

export default Titulo;
