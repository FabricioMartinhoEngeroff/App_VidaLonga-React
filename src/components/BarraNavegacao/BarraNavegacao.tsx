import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ItemNavegacao from "./ItemNavegacao/ItemNavegacao";

const BarraNavegacaoContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px 10px;
  background-color: #7da873;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  gap: 32px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10;
    gap: 10px;
    padding: 8px;
    justify-content: space-around;
    background-color: #7da873;
    box-shadow: 0 -2px 6px rgba(0, 0, 0, 0.25);
  }
`;

type Item = {
  nome: string;
  icone: string;
  path: string;
};

const itens: Item[] = [
  { nome: "Início", icone: "/icones/home-ativo.png", path: "/" },
  { nome: "Mais vistas", icone: "/icones/mais-vistas-ativo.png", path: "/mais-vistas" },
  { nome: "Favoritos", icone: "/icones/mais-curtidas-ativo.png", path: "/favoritos" },
  { nome: "Reels", icone: "/icones/novas-ativo.png", path: "/novas" },
  { nome: "Surpreenda", icone: "/icones/surpreenda-me-ativo.png", path: "/surpreenda" },
];

const BarraNavegacao = () => {
  const [ativo, setAtivo] = useState<string>(itens[0].nome);
  const navigate = useNavigate();

  const handleClick = (nome: string, path: string) => {
    setAtivo(nome);
    navigate(path);
  };

  return (
    <BarraNavegacaoContainer>
      {itens.map(({ nome, icone, path }) => (
        <ItemNavegacao
          key={nome}
          icone={icone}
          ativo={ativo === nome}
          onClick={() => handleClick(nome, path)}
        >
          {nome}
        </ItemNavegacao>
      ))}
    </BarraNavegacaoContainer>
  );
};

export default BarraNavegacao;