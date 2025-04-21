import { styled } from "styled-components";
import { FiSettings } from "react-icons/fi";
import search from "./search.png";

// Agrupa o campo + ícone de config
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: 8px;
  }
`;

// Campo + lupa posicionada
const ContainerEstilizado = styled.div`
  position: relative;
  flex: 1;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

// Estilização do input
const CampoTextoEstilizado = styled.input`
  height: 40px;
  padding: 0 40px 0 16px;
  border-radius: 20px;
  border: 1px solid #147a03;
  background-color: #7ea76c;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  font-size: 16px;
  color: #000;

  &::placeholder {
    color: black;
  }

  &:focus {
    border: 2px solid #7c3aed;
    outline: none;
  }
`;

// Lupa dentro do input
const IconeLupa = styled.img`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;

  @media (max-width: 768px) {
    right: 16px;
  }
`;

// Botão da engrenagem (fixa tamanho e mantém responsivo)
const ConfiguracaoContainer = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;

  svg {
    width: 24px;
    height: 24px;
    color: black;
  }

  @media (max-width: 768px) {
    align-self: flex-end;
    padding-right: 12px;
  }
`;

type CampoTextoProps = React.InputHTMLAttributes<HTMLInputElement>;

const CampoTexto: React.FC<CampoTextoProps> = (props) => {
  return (
    <Wrapper>
      <ContainerEstilizado>
        <CampoTextoEstilizado {...props} />
        <IconeLupa src={search} alt="ícone de lupa" />
      </ContainerEstilizado>
      <ConfiguracaoContainer>
        <FiSettings />
      </ConfiguracaoContainer>
    </Wrapper>
  );
};

export default CampoTexto;
