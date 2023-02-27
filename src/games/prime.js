import { getRandomNumFromRange } from '../helpers.js';
import { startGame } from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) return false;
  const prime = true;
  for (let i = 2, sum = Math.sqrt(num); i <= sum; i += 1) { if (num % i === 0) return false; }
  return prime;
};

export const startGamePrime = () => {
  const question = getRandomNumFromRange(2);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

startGame(gameDescription, startGamePrime);

export default startGamePrime;
