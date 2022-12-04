import { game } from '../index.js';

const gameDesc = 'What number is missing in the progression?';

const ArithProgression = (step, length, RandomNumber) => {
  const result = [];

  for (let i = 0, count = step; i < length; i += 1, count += step) {
    if (i === RandomNumber) { result.push('..'); } else { result.push(`${count}`); }
  }
  const stringResult = result.join(' ');

  return stringResult;
};

export const progression = () => {
  const step = Math.floor(Math.random() * 20 + 1);
  const length = Math.floor(Math.random() * (20 - 5) + 5);
  const RandomNumber = Math.floor(Math.random() * (10 - 1) + 1);
  const question = ArithProgression(step, length, RandomNumber);
  const rightAnswer = String(RandomNumber * step + step);
  return [question, rightAnswer];
};

game(gameDesc, progression);

export default progression;
