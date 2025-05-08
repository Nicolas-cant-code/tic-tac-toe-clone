import React, { useContext } from "react";
import { CellStyle } from "./GameCell.styled";
import { GameContext } from "../../context/GameContext";
import { checkForWinner } from "../../utils/GameUtils";

const GameCell = ({ cellItem, index }) => {
  const { updateBoard, game } = useContext(GameContext);

  const cellClickHandler = () => {
    updateBoard(index);

    const result = checkForWinner(game.board);
  };

  return <CellStyle onClick={cellClickHandler}>{cellItem}</CellStyle>;
};

export default GameCell;
