import { generateMaxRandomNumber } from '../helpers.js';
import { gameEngine } from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeAlgorithm = (num) => {
  let isPrime = 'no';
  for (let i = 2, sum = Math.sqrt(num); i <= sum; i += 1) { if (num % i === 0) return isPrime; }
  isPrime = 'yes';
  return isPrime;
};

export const startGamePrime = () => {
  const question = generateMaxRandomNumber(100);
  const rightAnswer = primeAlgorithm(question);
  return [question, rightAnswer];
};

gameEngine(gameDescription, startGamePrime);

export default startGamePrime;
