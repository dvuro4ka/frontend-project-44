import { game } from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const parityCheck = (question) => (question % 2 === 0 ? 'yes' : 'no');
export const even = () => {
  const question = Math.floor(Math.random() * 20);
  const rightAnswer = parityCheck(question);
  return [question, rightAnswer];
};

game(gameDescription, even);

export default even;
