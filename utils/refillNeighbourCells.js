export const refillNeighbourCells = (board, x, y, shipId) => {
  if (y < 9 && board[x][y + 1] === null) {
    board[x][y + 1] = shipId;
  }
  if (x < 9 && y < 9 && board[x + 1][y + 1] === null) {
    board[x + 1][y + 1] = shipId;
  }
  if (x < 9 && board[x + 1][y] === null) {
    board[x + 1][y] = shipId;
  }
  if (x < 9 && y > 0 && board[x + 1][y - 1] === null) {
    board[x + 1][y - 1] = shipId;
  }
  if (y > 0 && board[x][y - 1] === null) {
    board[x][y - 1] = shipId;
  }
  if (x > 0 && y > 0 && board[x - 1][y - 1] === null) {
    board[x - 1][y - 1] = shipId;
  }
  if (x > 0 && board[x - 1][y] === null) {
    board[x - 1][y] = shipId;
  }
  if (x > 0 && y < 9 && board[x - 1][y + 1] === null) {
    board[x - 1][y + 1] = shipId;
  }
  return board;
};
