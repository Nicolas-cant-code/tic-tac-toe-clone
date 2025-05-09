const checkForSequence = (a, b, c) => {
  if (a === null || b === null || c === null) {
    return false;
  }
  return a === b && a === c;
};

export const checkForWinner = (board) => {
  for (let i = 0; i < 9; i += 3) {
    if (checkForSequence(board[i], board[i + 1], board[i + 2])) {
      return board[i];
    }
  }
  for (let i = 0; i < 3; i++) {
    if (checkForSequence(board[i], board[i + 3], board[i + 6])) {
      return board[i];
    }
  }
  if (checkForSequence(board[2], board[4], board[6])) {
    return board[2];
  }
  if (checkForSequence(board[0], board[4], board[8])) {
    return board[0];
  }

  if (!board.includes(null)) {
    return "draw";
  }

  return null;
};
