import game from '../index.js';

const gameDesc = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeAlgo = (num) => {
  let isPrime = 'no';
  for (let i = 2, sum = Math.sqrt(num); i <= sum; i += 1) { if (num % i === 0) return isPrime; }
  return isPrime = 'yes';
};

export const prime = () => {
  const question = Math.floor(Math.random() * 1000 + 1);
  const rightAnswer = primeAlgo(question);
  return [question, rightAnswer];
};

game(gameDesc, prime);

export default prime;
