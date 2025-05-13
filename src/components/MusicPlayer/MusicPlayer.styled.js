import styled from "styled-components";

export const MusicPlayerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10vh;
  width: 100vw;
  position: fixed;
  bottom: 0;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
`;
