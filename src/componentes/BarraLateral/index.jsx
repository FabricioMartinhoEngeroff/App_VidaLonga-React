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
  { nome: "Início", icone: "/icones/home-ativo.png", rota: "/" },
  {
    nome: "Mais vistas",
    icone: "/icones/mais-vistas-ativo.png",
    rota: "/mais-vistas",
  },
  {
    nome: "Favoritos",
    icone: "/icones/mais-curtidas-ativo.png",
    rota: "/favoritos",
  },
  { nome: "Novas", icone: "/icones/novas-ativo.png", rota: "/novas" },
  {
    nome: "Surpreenda",
    icone: "/icones/surpreenda-me-ativo.png",
    rota: "/surpreenda",
  },
];

const BarraLateral = () => {
  const [ativo, setAtivo] = useState(itens[0].nome);
  const navigate = useNavigate();

  const handleClick = (nome, rota) => {
    setAtivo(nome);
    navigate(rota);
  };

  return (
    <aside>
      <NavegacaoContainer>
        <ListaEstilizada>
          {itens.map(({ nome, icone, rota }) => (
            <ItemNavegacao
              key={nome}
              icone={icone}
              ativo={ativo === nome}
              onClick={() => handleClick(nome, rota)}
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
