import React, { useContext } from "react";
import { Container } from "../../styles/General.styled";
import { GameBoard } from "./Game.styled";
import GameCell from "../../components/GameCell/GameCell";
import { GameContext } from "../../context/GameContext";

const Game = () => {
  const { game } = useContext(GameContext);

  return (
    <Container>
      <GameBoard>
        {game.board.map((item, index) => (
          <GameCell key={index} cellItem={item} index={index} />
        ))}
      </GameBoard>
    </Container>
  );
};

export default Game;
