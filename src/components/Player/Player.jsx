import React from "react";
import { PlayerContainer, AvatarWrapper } from "./Player.styled";
import Avatar from "react-nice-avatar";
import { useTheme } from "styled-components";

const Player = ({ player, isPlayerActive }) => {
  const theme = useTheme();

  const updatedAvatarConfig = {
    ...player.avatarConfig,
    bgColor: isPlayerActive ? theme.colors.purple : theme.colors.gray,
  };

  return (
    <PlayerContainer isPlayerActive={isPlayerActive ?? false}>
      <AvatarWrapper>
        <Avatar {...updatedAvatarConfig} />
      </AvatarWrapper>
      <div>
        {player.name} ({player.choice.toUpperCase()})
      </div>
      <div>Score: {player.score}</div>
    </PlayerContainer>
  );
};

export default Player;
