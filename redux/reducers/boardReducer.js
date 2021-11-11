export const boardReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_BOARD":
      state.push(action.board);
      return state;
    default:
      return state;
  }
};
