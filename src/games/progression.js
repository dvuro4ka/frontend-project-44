import { generateArithmProgression, generateMaxRandomNumber } from '../helpers.js';
import { gameEngine } from '../index.js';

const gameDescription = 'What number is missing in the progression?';

const ArithProgression = (step, length, RandomNumber) => {
  const result = [];

  for (let i = 0, count = step; i < length; i += 1, count += step) {
    if (i === RandomNumber) { result.push('..'); } else { result.push(`${count}`); }
  }
  const stringResult = result.join(' ');

  return stringResult;
};

export const startGameProgression = () => {
  const step = generateMaxRandomNumber(20);
  let length = generateArithmProgression(5, 20);
  let RandomNumber = generateArithmProgression(1, 10);
  if (RandomNumber > length) [length, RandomNumber] = [RandomNumber, length];
  const question = ArithProgression(step, length, RandomNumber);
  const rightAnswer = String(RandomNumber * step + step);
  return [question, rightAnswer];
};

gameEngine(gameDescription, startGameProgression);

export default startGameProgression;
