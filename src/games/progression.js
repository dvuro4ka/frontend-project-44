import { getRandomNumFromRange } from '../helpers.js';
import { startGame } from '../index.js';

const gameDescription = 'What number is missing in the progression?';

const getProgression = (step, length) => {
  const result = [];

  for (let i = 0, count = step; i <= length; i += 1, count += step) {
    result.push(`${count}`);
  }
  const stringResult = result.join(' ');

  return stringResult;
};

const hideNumber = (progression, hiddenNumber) => {
  const result = progression.split(' ');
  for (let i = 0; i <= result.length; i += 1) {
    if (i === hiddenNumber) result[i] = '..';
  }
  return result.join(' ');
};

export const startGameProgression = () => {
  const step = getRandomNumFromRange(1, 20);
  let length = getRandomNumFromRange(5, 20);
  let hiddenNumber = getRandomNumFromRange(1, 10);
  if (hiddenNumber > length) [length, hiddenNumber] = [hiddenNumber, length];
  const progression = getProgression(step, length);
  const question = hideNumber(progression, hiddenNumber);
  const rightAnswer = String(hiddenNumber * step + step);
  return [question, rightAnswer];
};

startGame(gameDescription, startGameProgression);

export default startGameProgression;
