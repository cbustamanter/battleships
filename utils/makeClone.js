/*
 * make a clone board
 *
 */
export const makeClone = (board) => {
  let clone = [10];
  for (let i = 0; i < 10; i++) {
    clone[i] = [10];
    for (let j = 0; j < 10; j++) {
      clone[i][j] = board[i][j];
    }
  }
  return clone;
};
