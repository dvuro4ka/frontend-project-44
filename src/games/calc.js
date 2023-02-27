import { getRandomNumFromRange } from '../helpers.js';
import { startGame } from '../index.js';

const gameDescription = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const calculateExpression = (firstNumber, operator, secondNumber) => {
  switch (operator) {
    case '+': return firstNumber + secondNumber;
    case '-': return firstNumber - secondNumber;
    case '*': return firstNumber * secondNumber;
    default: throw new Error(`Unknown operator: '${operator}'!`);
  }
};

export const startGameCalculator = () => {
  const firstNumber = getRandomNumFromRange();
  const secondNumber = getRandomNumFromRange();
  const operator = operators[getRandomNumFromRange(0, 2)];
  const rightAnswer = String(calculateExpression(firstNumber, operator, secondNumber));
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  return [question, rightAnswer];
};

startGame(gameDescription, startGameCalculator);

export default startGameCalculator;
