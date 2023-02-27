export const getRandomNumFromRange = (min = 1, max = 100) => {
  const generatedNumber = Math.floor(Math.random() * (max - min) + min);
  return generatedNumber;
};

export default getRandomNumFromRange;
