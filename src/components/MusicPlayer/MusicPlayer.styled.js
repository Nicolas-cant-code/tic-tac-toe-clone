import styled from "styled-components";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { FaShuffle } from "react-icons/fa6";

export const MusicPlayerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ isHomeScreen }) => (isHomeScreen ? "center" : "end")};
  height: 10vh;
  width: 100vw;
  position: fixed;
  bottom: 0;
  margin-bottom: 3rem;
  margin-left: ${({ isHomeScreen }) => (isHomeScreen ? "0" : "-2.5rem")};
  color: ${({ theme }) => theme.colors.text};
`;

export const PlayIcon = styled(FaPlay)`
  color: ${({ theme }) => theme.colors.text};
  font-size: 2rem;
  margin: 0.5rem 0.5rem 0 0;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

export const PauseIcon = styled(FaPause)`
  color: ${({ theme }) => theme.colors.text};
  font-size: 2rem;
  margin: 0.5rem 0.5rem 0 0;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

export const ShuffleIcon = styled(FaShuffle)`
  color: ${({ theme }) => theme.colors.text};
  font-size: 2rem;
  margin-top: 0.5rem;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;
