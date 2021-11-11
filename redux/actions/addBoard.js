export const ADD_BOARD = "ADD_BOARD";

export const addBoard = (board) => {
  return {
    type: ADD_BOARD,
    board,
  };
};
