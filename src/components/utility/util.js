export const generateRandomNumbers = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export function generateNewInput(inputRange) {
  const t = [];
  for (let i = 0; i < inputRange; i++) t.push(generateRandomNumbers(10, 500));
  return t;
}
