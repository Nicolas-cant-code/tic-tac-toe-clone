import { useState, createContext } from "react";

export const GameContext = createContext({});

export function GameContextProvider(props) {
  const [game, setGame] = useState({
    board: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    player1: {
      choice: "x",
      name: "Player 1",
    },
    player2: {
      choice: "o",
      name: "Player 2",
    },
    turn: "x",
  });

  const updateBoard = (index) => {
    let updatedBoard = [...game.board];
    updatedBoard[index] = game.turn;
    setGame({
      ...game,
      board: updatedBoard,
      turn: game.turn === "x" ? "o" : "x",
    });
  };

  return (
    <GameContext.Provider value={{ game, updateBoard }}>
      {props.children}
    </GameContext.Provider>
  );
}
