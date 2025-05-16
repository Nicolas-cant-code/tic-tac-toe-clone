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
    winningCombo: [],
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
      winningCombo: [],
    });
  };

  const restartGame = () => {
    setGame({
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

  const updateScore = (winner, combo) => {
    if (winner === "draw") {
      setGame((prevGame) => ({
        ...prevGame,
        player1: { ...prevGame.player1, score: prevGame.player1.score + 0.5 },
        player2: { ...prevGame.player2, score: prevGame.player2.score + 0.5 },
        winningCombo: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      }));
    } else if (winner === "player1" || winner === "player2") {
      setGame((prevGame) => ({
        ...prevGame,
        [winner]: {
          ...prevGame[winner],
          score: prevGame[winner].score + 1,
        },
        winningCombo: combo,
      }));
    }
  };

  const roundComplete = (winner, combo) => {
    if (game.turn === game.player2.choice && winner !== "draw") {
      updateScore("player1", combo);
      return game.player1.name + " Wins!";
    } else if (game.turn === game.player1.choice && winner !== "draw") {
      updateScore("player2", combo);
      return game.player2.name + " Wins!";
    } else if (winner === "draw") {
      updateScore("draw");
      return "It's a draw!";
    }
  };

  return (
    <GameContext.Provider
      value={{
        game,
        updateBoard,
        resetBoard,
        roundComplete,
        restartGame,
        switchTurn,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
}
