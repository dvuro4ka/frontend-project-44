import { getRandomNumFromRange } from '../helpers.js';
import { startGame } from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => (number % 2 === 0);

export const startGameEven = () => {
  const question = getRandomNumFromRange();
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

startGame(gameDescription, startGameEven);

export default startGameEven;
