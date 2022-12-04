import { game } from '../index.js';

const gameDesc = 'Find the greatest common divisor of given numbers.';
const result = (first, second) => {
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
  const rightAnswer = String(result(firstNumber, secondNumber));
  return [question, rightAnswer];
};

game(gameDesc, gcd);

export default gcd;
