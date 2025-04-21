import { styled } from "styled-components";

const BotaoIcone = styled.button`
  margin-left: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;

  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  svg {
    width: 24px;
    height: 24px;
    color: #222;
  }

  @media (max-width: 768px) {
    margin-left: 8px;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export default BotaoIcone;
