import styled from "styled-components";

export const PlayerContainer = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 75%;
  margin: 2rem;
  border-radius: 20px;
  transform: ${({ isPlayerActive }) =>
    isPlayerActive ? "scale(1.1)" : "scale(0.9)"};
  filter: ${({ isPlayerActive }) => (isPlayerActive ? "" : "grayscale(60%)")};
  transition: transform 0.3s ease;
  opacity: ${({ isPlayerActive }) => (isPlayerActive ? 1 : 0.5)};

  ${(props) => props.theme.media.mobile} {
    flex-direction: row;
    width: 30%;
  }
`;

export const AvatarWrapper = styled.div`
  div {
    display: flex;
    width: 9rem;
    height: 9rem;

    ${(props) => props.theme.media.mobile} {
      width: 5rem;
      height: 5rem;
    }
  }
`;
