import React from "react";
import styled from "styled-components";
import Titulo from "../../componentes/Titulo";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  padding: 20px;
  background: linear-gradient(
    174.61deg,
    #aebf9f 4.16%,
    #bcc9ad 48%,
    #d3e0c5 96.76%
  );
`;

const MensagemErro = styled.p`
  font-size: 18px;
  color: #555;
  margin: 10px 0;
`;

const BotaoVoltar = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  background-color: #6a0dad;
  color: white;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #8b5cd6;
  }
`;

const NaoEncontrada = () => {
  const voltarInicio = () => {
    window.location.href = "/";
  };

  return (
    <Container>
      <Titulo $alinhamento="center">Página Não Encontrada</Titulo>
      <MensagemErro>Ops! Algo deu errado. A página que você procura não existe.</MensagemErro>
      <BotaoVoltar onClick={voltarInicio}>Voltar para a Página Inicial</BotaoVoltar>
    </Container>
  );
};

export default NaoEncontrada;
