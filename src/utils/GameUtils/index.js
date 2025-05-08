const checkForSequence = (a, b, c) => {
  return a === b && a === c;
};

export const checkForWinner = (board) => {
  for (let i = 0; i < 9; i += 3) {
    if (checkForSequence(board[i], board[i + 1], board[i + 2])) {
      console.log(`Row Winner: ${board[i]}`);
      return true;
    }
  }
  for (let i = 0; i < 3; i++) {
    if (checkForSequence(board[i], board[i + 3], board[i + 6])) {
      console.log(`Column Winner: ${board[i]}`);
      return true;
    }
  }

  if (board[0] === board[4] && board[0] === board[8]) {
    console.log(`Diagonal Winner: ${board[0]}`);
    return true;
  }
  if (board[2] === board[4] && board[2] === board[6]) {
    console.log(`Diagonal Winner: ${board[2]}`);
    return true;
  }
};
