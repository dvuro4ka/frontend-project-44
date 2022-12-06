import { gameEngine } from '../index.js';

const gameDescription = 'What is the result of the expression?';
const dataOperator = ['+', '-', '*'];
const switchOperator = (firstNumber, operator, secondNumber) => {
  let resultOperation = 0;
  switch (operator) {
    case '+': resultOperation = firstNumber + secondNumber; break;
    case '-': resultOperation = firstNumber - secondNumber; break;
    case '*': resultOperation = firstNumber * secondNumber; break;
    default: resultOperation = 0; break;
  }
  return resultOperation;
};

export const calc = () => {
  const firstNumber = Math.floor(Math.random() * 20);
  const secondNumber = Math.floor(Math.random() * 20);
  const operator = dataOperator[Math.floor(Math.random() * dataOperator.length)];
  const rightAnswer = String(switchOperator(firstNumber, operator, secondNumber));
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  return [question, rightAnswer];
};

gameEngine(gameDescription, calc);

export default calc;
