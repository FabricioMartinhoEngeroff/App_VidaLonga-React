import styled from "styled-components";

const ItemListaEstilizado = styled.li`
  font-size: 20px;
  line-height: 20px;
  margin-bottom: 20px;
  cursor: pointer;
  color: ${(props) => (props.$ativo ? "#000000" : "#FFFFFF")};
  font-family: ${(props) =>
    props.$ativo ? "verdana-bold" : "verdana-regular"};
  display: flex;
  align-items: center;

  &:hover {
    background-color: transparent;
  }
`;

const TextoComBorda = styled.span`
  display: flex;
  align-items: center;
  gap: 20px;
  border: 2px solid #629359;
  padding: 2px 5px;
  border-radius: 10px;
  background-color: #629359;

  &:hover {
    background-color: #7ea76c;
  }
`;

const Icone = styled.img`
  margin-right: 5px;
  width: 24px;
  height: 24px;
  margin: 0;
  padding: 0;
  opacity: ${(props) => (props.$ativo ? 1 : 0.5)};
  filter: ${(props) => (!props.$ativo ? "grayscale(100%)" : "none")};
`;

const ItemNavegacao = ({ children, icone, ativo = false, onClick }) => {
  return (
    <ItemListaEstilizado $ativo={ativo} onClick={onClick}>
      <TextoComBorda>
        <Icone src={icone} alt={children} $ativo={ativo} />
        {children}
      </TextoComBorda>
    </ItemListaEstilizado>
  );
};

export default ItemNavegacao;
