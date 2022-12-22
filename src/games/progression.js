import { getRandomNumFromRange } from '../helpers.js';
import { startGame } from '../index.js';

const gameDescription = 'What number is missing in the progression?';

const getProgression = (step, length, RandomNumber) => {
  const result = [];

  for (let i = 0, count = step; i <= length; i += 1, count += step) {
    if (i === RandomNumber) { result.push('..'); } else { result.push(`${count}`); }
  }
  const stringResult = result.join(' ');

  return stringResult;
};

export const startGameProgression = () => {
  const step = getRandomNumFromRange(1, 20);
  let length = getRandomNumFromRange(5, 20);
  let RandomNumber = getRandomNumFromRange(1, 10);
  if (RandomNumber > length) [length, RandomNumber] = [RandomNumber, length];
  const question = getProgression(step, length, RandomNumber);
  const rightAnswer = String(RandomNumber * step + step);
  return [question, rightAnswer];
};

startGame(gameDescription, startGameProgression);

export default startGameProgression;
