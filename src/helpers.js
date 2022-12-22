export const getRandomNumFromRange = (min, max) => {
  const generatedNumber = Math.floor(Math.random() * (max - min) + min);
  return generatedNumber;
};

export default getRandomNumFromRange;
