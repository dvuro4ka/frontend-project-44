export const generateMaxRandomNumber = (max) => Math.floor(Math.random() * max) + 1;
export const generateArithmProgression = (min, max) => {
  const generatedNumber = Math.floor(Math.random() * (max - min) + min);
  return generatedNumber;
};
