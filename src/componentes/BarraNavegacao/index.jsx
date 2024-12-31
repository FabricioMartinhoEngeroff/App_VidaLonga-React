import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ItemNavegacao from "./ItemNavegacao";

const BarraNavegacaoContainer = styled.nav`
  display: flex;
  justify-content: center; /* Centraliza os itens horizontalmente */
  align-items: center;
  padding: 10px 10; /* Reduz a altura da barra */
  background-color: #629359; /* Cor de fundo consistente com o banner */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2); 
  gap: 45px; 
  width: 100%; 
  margin: 0 auto; 
`;

const itens = [
  { nome: "Início", icone: "/icones/home-ativo.png", path: "/" },
  {
    nome: "Mais vistas",
    icone: "/icones/mais-vistas-ativo.png",
    path: "/mais-vistas",
  },
  {
    nome: "Favoritos",
    icone: "/icones/mais-curtidas-ativo.png",
    path: "/favoritos",
  },
  { nome: "Reels", icone: "/icones/novas-ativo.png", path: "/novas" },
  {
    nome: "Surpreenda",
    icone: "/icones/surpreenda-me-ativo.png",
    path: "/surpreenda",
  },
];

const BarraNavegacao = () => {
  const [ativo, setAtivo] = useState(itens[0].nome);
  const navigate = useNavigate();

  const handleClick = (nome, path) => {
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
