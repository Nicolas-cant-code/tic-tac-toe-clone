import styled from "styled-components";

export const PlayerContainer = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 75%;
  margin: 0 2rem;
  border-radius: 20px;
  background-color: ${({ isPlayerActive, theme }) =>
    isPlayerActive ? theme.colors.purple : theme.colors.gray};
  transform: ${({ isPlayerActive }) =>
    isPlayerActive ? "scale(1.1)" : "scale(0.9)"};
  transition: transform 0.3s ease;
  opacity: ${({ isPlayerActive }) => (isPlayerActive ? 1 : 0.5)};
`;
