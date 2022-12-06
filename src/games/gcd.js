import { gameEngine } from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';
const Euclidean_algorithm = (first, second) => {
  let firstNumber = first;
  let secondNumber = second;
  while (firstNumber && secondNumber) {
    if (firstNumber > secondNumber) firstNumber -= secondNumber;
    else secondNumber -= firstNumber;
  }
  return firstNumber + secondNumber;
};
export const gcd = () => {
  const firstNumber = Math.floor(Math.random() * 20 + 1);
  const secondNumber = Math.floor(Math.random() * 20 + 1);
  const question = `${firstNumber} ${secondNumber}`;
  const rightAnswer = String(Euclidean_algorithm(firstNumber, secondNumber));
  return [question, rightAnswer];
};

gameEngine(gameDescription, gcd);

export default gcd;
