import readlineSync from 'readline-sync';
import { welcome } from './cli.js';

export const game = (gameDescription, gameData) => {
  const name = welcome();
  console.log(gameDescription);
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
export default game;
