import { useState, createContext } from "react";
import { genConfig } from "react-nice-avatar";

export const GameContext = createContext({});

export function GameContextProvider(props) {
  const [game, setGame] = useState({
    board: [null, null, null, null, null, null, null, null, null],
    player1: {
      choice: "x",
      name: "Player 1",
      score: 0,
      avatarConfig: genConfig(),
    },
    player2: {
      choice: "o",
      name: "Player 2",
      score: 0,
      avatarConfig: genConfig(),
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

  const resetBoard = () => {
    setGame({
      ...game,
      board: [null, null, null, null, null, null, null, null, null],
      turn: "x",
    });
  };

  const toggleChoice = (choice) => (choice === "x" ? "o" : "x");

  const switchTurn = () => {
    setGame((prevGame) => ({
      ...prevGame,
      player1: {
        ...prevGame.player1,
        choice: toggleChoice(prevGame.player1.choice),
      },
      player2: {
        ...prevGame.player2,
        choice: toggleChoice(prevGame.player2.choice),
      },
      turn: "x",
    }));
  };

  const updateScore = (winner) => {
    if (winner === "draw") {
      setGame((prevGame) => ({
        ...prevGame,
        player1: { ...game.player1, score: prevGame.player1.score + 0.5 },
        player2: { ...game.player2, score: prevGame.player2.score + 0.5 },
      }));
    } else {
      setGame((prevGame) => ({
        ...prevGame,
        [winner]: { ...game[winner], score: prevGame[winner].score + 1 },
      }));
    }
  };

  const roundComplete = (winner) => {
    if (winner === game.player1.choice && winner !== "draw") {
      updateScore("player1");
      switchTurn();
      return game.player1.name + " Wins!";
    } else if (winner === game.player2.choice && winner !== "draw") {
      updateScore("player2");
      switchTurn();
      return game.player2.name + " Wins!";
    } else if (winner === "draw") {
      updateScore("draw");
      switchTurn();
      return "It's a draw!";
    }
  };

  const resetScores = () => {
    setGame({
      ...game,
      player1: { ...game.player1, score: 0 },
      player2: { ...game.player2, score: 0 },
    });
  };

  return (
    <GameContext.Provider
      value={{
        game,
        updateBoard,
        resetBoard,
        resetScores,
        roundComplete,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
}
