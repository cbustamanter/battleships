export const isFree = (board, pos) => {
  let x = pos[0];
  let y = pos[1];
  return !(board[x][y] > 0);
};
