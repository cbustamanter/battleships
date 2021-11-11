/*
 * Returns a random position from 0 to 9. Eg; [0,4]
 *
 */
export const getRandomPosition = () => {
  const max = 9;
  return [Math.floor(Math.random() * max), Math.floor(Math.random() * max)];
};
