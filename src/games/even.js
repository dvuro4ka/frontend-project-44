import { getRandomNumFromRange } from '../helpers.js';
import { startGame } from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (question) => (question % 2 === 0);
export const startGameEven = () => {
  const question = getRandomNumFromRange(1, 50);
  const parityCheck = isEven(question);
  let rightAnswer = '';
  if (parityCheck) rightAnswer = 'yes';
  else rightAnswer = 'no';
  return [question, rightAnswer];
};

startGame(gameDescription, startGameEven);

export default startGameEven;
