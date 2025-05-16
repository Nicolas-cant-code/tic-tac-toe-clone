import styled from "styled-components";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { FaShuffle } from "react-icons/fa6";

export const MusicPlayerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10vh;
  width: 100vw;
  position: absolute;
  bottom: 0;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.text};

  ${({ isHomeScreen }) => {
    if (!isHomeScreen) {
      return `
        @media (min-width: 1001px) and (max-height: 830px) {
          top: 52px;
          justify-content: end;
          margin-left: -1.75rem;
        }
          @media (max-width: 521px) and (min-height: 440px) and (max-height: 625px) {
      top: 52px;
          justify-content: end;
          margin-left: -1.75rem;
    }
          @media (min-width: 521px) and (max-height: 440px) {
          display: none;
    }
          @media (max-width: 520px) and (max-height: 625px) {
          display: none;
    }
      `;
    }
  }}
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
