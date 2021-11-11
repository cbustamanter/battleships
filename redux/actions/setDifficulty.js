export const CHOOSE = "CHOOSE";

export const setDifficulty = (difficulty) => {
  return {
    type: CHOOSE,
    difficulty,
  };
};
