import game from '../index.js';

const gameDesc = 'What is the result of the expression?';
const dataOperator = ['+', '-', '*'];
const randomOperator = (firstNumber, Operator, secondNumber) => {
  switch (Operator) {
    case '+': return firstNumber + secondNumber;
    case '-': return firstNumber - secondNumber;
    case '*': return firstNumber * secondNumber;
  }
};

const calc = () => {
  const firstNumber = Math.floor(Math.random() * 20);
  const secondNumber = Math.floor(Math.random() * 20);
  const Operator = dataOperator[Math.floor(Math.random() * dataOperator.length)];
  const rightAnswer = String(randomOperator(firstNumber, Operator, secondNumber));
  const question = `${firstNumber} ${Operator} ${secondNumber}`;
  return [question, rightAnswer];
};

game(gameDesc, calc);

export default calc;
