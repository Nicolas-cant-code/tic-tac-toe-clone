import React, { useContext, useEffect } from "react";
import { CellStyle } from "./GameCell.styled";
import { GameContext } from "../../context/GameContext";
import { checkForWinner } from "../../utils/GameUtils";
import IconX from "../../assets/svgs/x-symbol.svg?react";
import IconXOutline from "../../assets/svgs/x-symbol-outline.svg?react";
import IconO from "../../assets/svgs/o-symbol.svg?react";
import IconOOutline from "../../assets/svgs/o-symbol-outline.svg?react";

const GameCell = ({ cellItem, index }) => {
  const { updateBoard, game } = useContext(GameContext);

  const cellClickHandler = () => {
    updateBoard(index);
  };
  // Used because it wasn't updating in real time
  useEffect(() => {
    const result = checkForWinner(game.board);
  }, [game.board]);

  if (cellItem === "x") {
    return (
      <CellStyle>
        <IconX />
      </CellStyle>
    );
  } else if (cellItem === "o") {
    return (
      <CellStyle>
        <IconO className="oIcon" />
      </CellStyle>
    );
  }

  return (
    <CellStyle onClick={cellClickHandler}>
      {game.turn === "x" ? (
        <IconXOutline className="outlineIcon" />
      ) : (
        <IconOOutline className="outlineIcon" />
      )}
    </CellStyle>
  );
};

export default GameCell;
