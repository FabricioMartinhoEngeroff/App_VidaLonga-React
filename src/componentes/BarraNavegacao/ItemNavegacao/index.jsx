import styled from "styled-components";

const ItemListaEstilizado = styled.div`
  display: flex;
  flex-direction: column; /* Organiza ícone e texto verticalmente */
  align-items: center; /* Centraliza ícone e texto */
  justify-content: center; /* Garante alinhamento vertical */
  cursor: pointer;
  color: ${(props) => (props.$ativo ? "#000000" : "#FFFFFF")}; /* Cor dinâmica */
  font-family: ${(props) =>
    props.$ativo ? "verdana-bold" : "verdana-regular"}; /* Fonte dinâmica */
  font-size: 14px; /* Tamanho da fonte */
  text-align: center;
  gap: 3px; /* Espaçamento entre o ícone e o texto */

  &:hover {
    color: #7ea76c; /* Cor ao passar o mouse */
  }
`;

const Icone = styled.img`
  width: 28px; /* Largura do ícone */
  height: 28px; /* Altura do ícone */
  margin-bottom: 3px; /* Espaçamento entre o ícone e o texto */
  opacity: ${(props) => (props.$ativo ? 1 : 0.6)}; /* Transparência dinâmica */
`;

const ItemNavegacao = ({ children, icone, ativo = false, onClick }) => {
  return (
    <ItemListaEstilizado $ativo={ativo} onClick={onClick}>
      <Icone src={icone} alt={children} $ativo={ativo} />
      {children}
    </ItemListaEstilizado>
  );
};

export default ItemNavegacao;
