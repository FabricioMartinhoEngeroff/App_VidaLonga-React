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
  color: ${({ $ativo }) => ($ativo ? "#000000" : "#FFFFFF")};
  font-family: ${({ $ativo }) =>
    $ativo ? "verdana-bold" : "verdana-regular"};
  font-size: 14px;
  text-align: center;
  gap: 3px;
  padding: 4px;

  &:hover {
    color: #d0ffd0;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 2px;
    gap: 2px;
  }
`;

const Icone = styled.img<EstiloProps>`
  width: 28px;
  height: 28px;
  margin-bottom: 3px;
  opacity: ${({ $ativo }) => ($ativo ? 1 : 0.6)};
  transition: opacity 0.3s ease;

  @media (max-width: 768px) {
    width: 24px;
    height: 24px;
  }
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
