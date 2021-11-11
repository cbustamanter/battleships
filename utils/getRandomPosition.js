export const getRandomPosition = () => {
  const max = 9;
  return [Math.floor(Math.random() * max), Math.floor(Math.random() * max)];
};
