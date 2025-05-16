const checkForSequence = (a, b, c) => {
  if (a === null || b === null || c === null) {
    return false;
  }
  return a === b && a === c;
};

export const checkForWinner = (board) => {
  for (let i = 0; i < 9; i += 3) {
    if (checkForSequence(board[i], board[i + 1], board[i + 2])) {
      return { winner: board[i], combo: [i, i + 1, i + 2] };
    }
  }
  for (let i = 0; i < 3; i++) {
    if (checkForSequence(board[i], board[i + 3], board[i + 6])) {
      return { winner: board[i], combo: [i, i + 3, i + 6] };
    }
  }
  if (checkForSequence(board[2], board[4], board[6])) {
    return { winner: board[2], combo: [2, 4, 6] };
  }
  if (checkForSequence(board[0], board[4], board[8])) {
    return { winner: board[0], combo: [0, 4, 8] };
  }

  if (!board.includes(null)) {
    return { winner: "draw", combo: [0, 1, 2, 3, 4, 5, 6, 7, 8] };
  }

  return null;
};
