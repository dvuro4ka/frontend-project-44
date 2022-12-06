import readlineSync from 'readline-sync';
import { welcome } from './cli.js';

const prepareRightAnswer = (name, gameData) => {
  let count = 0;
  while (count < 3) {
    const [question, rightAnswer] = gameData();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer.toLowerCase() === rightAnswer.toLowerCase()) {
      count += 1;
      console.log('Correct!');
    } else {
      return console.log(`${answer} is wrong answer :(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

export const gameEngine = (gameDescription, gameData) => {
  const name = welcome();
  console.log(gameDescription);
  prepareRightAnswer(name, gameData);
};
export default gameEngine;
