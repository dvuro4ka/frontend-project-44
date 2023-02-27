import { getRandomNumFromRange } from '../helpers.js';
import { startGame } from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getGCD = (first, second) => {
  let firstNumber = first;
  let secondNumber = second;
  while (firstNumber && secondNumber) {
    if (firstNumber > secondNumber) firstNumber -= secondNumber;
    else secondNumber -= firstNumber;
  }
  return firstNumber + secondNumber;
};

export const startGameGCD = () => {
  const firstNumber = getRandomNumFromRange();
  const secondNumber = getRandomNumFromRange();
  const question = `${firstNumber} ${secondNumber}`;
  const rightAnswer = String(getGCD(firstNumber, secondNumber));
  return [question, rightAnswer];
};

startGame(gameDescription, startGameGCD);

export default startGameGCD;
