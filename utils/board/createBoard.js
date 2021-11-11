import { boardSize } from "../constants/boardSize";
import { shipsTypes } from "../constants/shipsTypes";
import { generateRandomShips } from "../generateRandomShips";

export const createBoard = () => {
  let board = [boardSize];
  for (let i = 0; i < boardSize; i++) {
    board[i] = [boardSize];
    for (let j = 0; j < boardSize; j++) {
      board[i][j] = null;
    }
  }
  for (let i = 0; i < shipsTypes.length; i++) {
    board = generateRandomShips(shipsTypes[i], board);
  }
  return board;
};
