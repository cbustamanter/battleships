const initialState = "other";
export const difficultyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHOOSE":
      state = action.difficulty;
      return state;
    default:
      return state;
  }
};
