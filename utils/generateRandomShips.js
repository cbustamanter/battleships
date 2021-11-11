import { getDirections } from "./getDirections";
import { getRandomPosition } from "./getRandomPosition";
import { isFree } from "./isFree";
import { makeClone } from "./makeClone";
import { refillNeighbourCells } from "./refillNeighbourCells";
import { tryDirections } from "./tryDirections";

export const generateRandomShips = (ship, board) => {
  let startPosition = null;
  let continueLoop = true;
  while (continueLoop) {
    startPosition = getRandomPosition();
    if (isFree(board, startPosition)) {
      let x = startPosition[0];
      let y = startPosition[1];
      let directions = getDirections();
      board[x][y] = ship.id * 100;
      board = refillNeighbourCells(board, x, y, ship.id);

      for (let i = 0; i < directions.length; i++) {
        let tempBattlefield = makeClone(board);
        let newBattleField = tryDirections(
          directions[i],
          ship,
          startPosition,
          tempBattlefield
        );
        if (newBattleField !== null) {
          continueLoop = false;
          board = [...newBattleField];
          break;
        } else {
          tempBattlefield = newBattleField = null;
        }
      }
    }
  }
  return board;
};
