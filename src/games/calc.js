import { getRandomNumFromRange } from '../helpers.js';
import { startGame } from '../index.js';

const gameDescription = 'What is the result of the expression?';
const dataOperator = ['+', '-', '*'];
const getCalculate = (firstNumber, operator, secondNumber) => {
  switch (operator) {
    case '+': return firstNumber + secondNumber;
    case '-': return firstNumber - secondNumber;
    case '*': return firstNumber * secondNumber;
    default: throw new Error(`Unknown operator: '${operator}'!`);
  }
};

export const startGameCalculator = () => {
  const firstNumber = getRandomNumFromRange(1, 20);
  const secondNumber = getRandomNumFromRange(1, 20);
  const operator = dataOperator[getRandomNumFromRange(0, 2)];
  const rightAnswer = String(getCalculate(firstNumber, operator, secondNumber));
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  return [question, rightAnswer];
};

startGame(gameDescription, startGameCalculator);

export default startGameCalculator;
