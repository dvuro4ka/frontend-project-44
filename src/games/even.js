import { generateMaxRandomNumber } from '../helpers.js';
import { gameEngine } from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const parityCheck = (question) => (question % 2 === 0 ? 'yes' : 'no');
export const startGameEven = () => {
  const question = generateMaxRandomNumber(20);
  const rightAnswer = parityCheck(question);
  return [question, rightAnswer];
};

gameEngine(gameDescription, startGameEven);

export default startGameEven;
