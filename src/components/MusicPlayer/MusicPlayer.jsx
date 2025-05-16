import React, { useContext, useEffect, useRef, useState } from "react";
import {
  MusicPlayerWrapper,
  PauseIcon,
  ShuffleIcon,
  PlayIcon,
} from "./MusicPlayer.styled";
import playList from "../../utils/MusicUtils/playlist";
import { randomIndex } from "../../utils/MusicUtils";
import { SubTitle, Title } from "../../styles/General.styled";
import { SfxContext } from "../../context/SoundEffectsContext";
import { useLocation } from "react-router-dom";

const MusicPlayer = ({ isHomeScreen }) => {
  const { hoverSfx } = useContext(SfxContext);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(randomIndex(playList));
  const playerRef = useRef(null);
  const [playPromise, setPlayPromise] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const songName = decodeURIComponent(playList[currentSong])
    .split("/")
    .pop()
    .replace(/\.[^/.]+$/, "");

  useEffect(() => {
    if (isPlaying) {
      const promise = playerRef.current?.play();
      setPlayPromise(promise);
      if (playerRef.current?.volume) {
        playerRef.current.volume = 0.5;
      }
      return;
    }

    playerRef.current.pause();
  }, [isPlaying]);

  const shuffleHandler = async () => {
    await playPromise.then(() => {
      playerRef.current.pause();
      setIsPlaying(false);
    });

    setCurrentSong(randomIndex(playList));
    setIsPlaying(true);
  };

  return (
    <MusicPlayerWrapper isHomeScreen={isHomeScreen}>
      {isPlaying ? (
        <div style={{ textAlign: "center", maxWidth: "2000px" }}>
          <SubTitle>Now Playing</SubTitle>
          <a
            href={playList[currentSong]}
            target="_blank"
            style={{ textDecoration: "none", cursor: "pointer" }}
          >
            <Title small style={{ flexWrap: "wrap" }}>
              {songName}
            </Title>
          </a>
          <PauseIcon
            onClick={() => {
              setIsPlaying(false);
              setIsPaused(true);
              hoverSfx();
            }}
          ></PauseIcon>
          <ShuffleIcon
            onClick={() => {
              shuffleHandler();
              hoverSfx();
            }}
          ></ShuffleIcon>
        </div>
      ) : (
        <div style={{ textAlign: "center", maxWidth: "200px" }}>
          {isPaused && <SubTitle>Paused</SubTitle>}
          {!isPaused && <SubTitle>Click to Play</SubTitle>}
          <a
            href={playList[currentSong]}
            target="_blank"
            style={{ textDecoration: "none", cursor: "pointer" }}
          >
            <Title small style={{ flexWrap: "wrap" }}>
              {songName}
            </Title>
          </a>
          <PlayIcon
            onClick={() => {
              setIsPlaying(true);
              hoverSfx();
            }}
          ></PlayIcon>
          <ShuffleIcon
            onClick={() => {
              shuffleHandler();
              hoverSfx();
            }}
          ></ShuffleIcon>
        </div>
      )}

      <audio ref={playerRef} src={playList[currentSong]}></audio>
    </MusicPlayerWrapper>
  );
};

export default MusicPlayer;
