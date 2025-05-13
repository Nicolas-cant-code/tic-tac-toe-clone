import React, { useContext, useEffect } from "react";
import { CellStyle } from "./GameCell.styled";
import { GameContext } from "../../context/GameContext";
import { checkForWinner } from "../../utils/GameUtils";
import IconX from "../../assets/svgs/x-symbol.svg?react";
import IconXOutline from "../../assets/svgs/x-symbol-outline.svg?react";
import IconO from "../../assets/svgs/o-symbol.svg?react";
import IconOOutline from "../../assets/svgs/o-symbol-outline.svg?react";
import { ModalContext } from "../../context/ModalContext";
import RoundOverModal from "../Modal/RoundOverModal/RoundOverModal";
import { SfxContext } from "../../context/SoundEffectsContext";

const GameCell = ({ cellItem, index }) => {
  const { updateBoard, game, roundComplete } = useContext(GameContext);
  const { handleModal } = useContext(ModalContext);
  const { hoverSfx, winnerSfx, completedSfx } = useContext(SfxContext);

  const cellClickHandler = () => {
    updateBoard(index);
    hoverSfx();
  };

  // Used because it wasn't updating in real time
  useEffect(() => {
    const winner = checkForWinner(game.board);

    if (winner) {
      const winnerMessage = roundComplete(winner);

      if (winner !== "draw") {
        winnerSfx();
      } else {
        completedSfx();
      }

      handleModal(<RoundOverModal winnerMessage={winnerMessage} />);
    }
  }, [game.board[index]]);

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
