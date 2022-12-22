import { getRandomNumFromRange } from '../helpers.js';
import { startGame } from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  let prime = 'no';
  for (let i = 2, sum = Math.sqrt(num); i <= sum; i += 1) { if (num % i === 0) return prime; }
  prime = 'yes';
  return prime;
};

export const startGamePrime = () => {
  const question = getRandomNumFromRange(2, 100);
  const rightAnswer = isPrime(question);
  return [question, rightAnswer];
};

startGame(gameDescription, startGamePrime);

export default startGamePrime;
