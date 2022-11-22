#!/usr/bin/env node.
import readlineSync from 'readline-sync';
import * as welcome from '../src/cli.js';

export const even = () => {
  const name = welcome();
  let count = 0;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (count < 3) {
    const randomNumber = Math.floor(Math.random() * 20);
    console.log(`Question: ${randomNumber}`);
    const question = readlineSync.question('Your answer: ');
    if ((randomNumber % 2 === 0 && question === 'yes') || (randomNumber % 2 !== 0 && question === 'no')) {
      count += 1;
      console.log('Correct!');
    } else {
      return console.log(`Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

export default even;

console.log('Welcome to the Brain Games!');
even();
