import { isFree } from "./isFree";
import { refillNeighbourCells } from "./refillNeighbourCells";

export const tryDirections = (direction, ship, startPosition, board) => {
  let x = startPosition[0];
  let y = startPosition[1];
  let wrongDirection = false;

  for (let i = 1; i < ship.size; i++) {
    switch (direction) {
      case 0:
        if (y + i > 9) {
          wrongDirection = true;
          break;
        } else if (isFree(board, [x, y + i]) || board[x][y + i] === ship.id) {
          board[x][y + i] = ship.id * 100;
          refillNeighbourCells(board, x, y + i, ship.id);
          wrongDirection = false;
          break;
        } else {
          wrongDirection = true;
          break;
        }
      case 1:
        if (x + i > 9) {
          wrongDirection = true;
          break;
        } else if (isFree(board, [x + i, y]) || board[x + i][y] === ship.id) {
          board[x + i][y] = ship.id * 100;
          refillNeighbourCells(board, x + i, y, ship.id);
          wrongDirection = false;
          break;
        } else {
          wrongDirection = true;
          break;
        }
      case 2:
        if (y - i < 0) {
          wrongDirection = true;
          break;
        } else if (isFree(board, [x, y - i]) || board[x][y - i] === ship.id) {
          board[x][y - i] = ship.id * 100;
          refillNeighbourCells(board, x, y - i, ship.id);
          wrongDirection = false;
          break;
        } else {
          wrongDirection = true;
          break;
        }
      case 3:
        if (x - i < 0) {
          wrongDirection = true;
          break;
        } else if (isFree(board, [x - i, y]) || board[x - i][y] === ship.id) {
          board[x - i][y] = ship.id * 100;
          refillNeighbourCells(board, x - i, y, ship.id);
          wrongDirection = false;
          break;
        } else {
          wrongDirection = true;
          break;
        }

      default:
        break;
    }
  }
  if (wrongDirection) {
    return null;
  } else {
    return board;
  }
};
