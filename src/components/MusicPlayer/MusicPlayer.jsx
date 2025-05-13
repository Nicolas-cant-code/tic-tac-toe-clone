import React from "react";
import { MusicPlayerWrapper } from "./MusicPlayer.styled";

const MusicPlayer = () => {
  return (
    <MusicPlayerWrapper>
      <button>Play</button>
      <button>Pause</button>
      <button>Shuffle</button>
    </MusicPlayerWrapper>
  );
};

export default MusicPlayer;
