import React from "react";
import { PlayerContainer } from "./Player.styled";

const Player = ({ player, isPlayerActive }) => {
  return (
    <PlayerContainer isPlayerActive={isPlayerActive ?? false}>
      <div>
        {player.name} ({player.choice})
      </div>
      <div>Score: {player.score}</div>
    </PlayerContainer>
  );
};

export default Player;
