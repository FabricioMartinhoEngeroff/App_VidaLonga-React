import styled from "styled-components";

type ItemNavegacaoProps = {
  children: React.ReactNode;
  icone: string;
  ativo?: boolean;
  onClick?: () => void;
};

type EstiloProps = {
  $ativo: boolean;
};

const ItemListaEstilizado = styled.div<EstiloProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${(props) => (props.$ativo ? "#000000" : "#FFFFFF")};
  font-family: ${(props) =>
    props.$ativo ? "verdana-bold" : "verdana-regular"};
  font-size: 14px;
  text-align: center;
  gap: 3px;

  &:hover {
    color: #7ea76c;
  }
`;

const Icone = styled.img<EstiloProps>`
  width: 28px;
  height: 28px;
  margin-bottom: 3px;
  opacity: ${(props) => (props.$ativo ? 1 : 0.6)};
`;

const ItemNavegacao = ({ children, icone, ativo = false, onClick }: ItemNavegacaoProps) => {
  return (
    <ItemListaEstilizado $ativo={ativo} onClick={onClick}>
      <Icone src={icone} alt={String(children)} $ativo={ativo} />
      {children}
    </ItemListaEstilizado>
  );
};

export default ItemNavegacao;