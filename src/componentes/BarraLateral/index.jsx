import styled from "styled-components";
import ItemNavegacao from "./ItemNavegacao";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ListaEstilizada = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 170px;
`;

const NavegacaoContainer = styled.nav`
  margin-top: 15px;
  width: 130px;
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
  { nome: "Novas", icone: "/icones/novas-ativo.png", path: "/novas" },
  {
    nome: "Surpreenda",
    icone: "/icones/surpreenda-me-ativo.png",
    path: "/surpreenda",
  },
];

const BarraLateral = () => {
  const [ativo, setAtivo] = useState(itens[0].nome);
  const navigate = useNavigate();

  const handleClick = (nome, path) => {
    setAtivo(nome); 
    navigate(path); 
  }

  return (
    <aside>
      <NavegacaoContainer>
        <ListaEstilizada>
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
        </ListaEstilizada>
      </NavegacaoContainer>
    </aside>
  );
};

export default BarraLateral;
