import readlineSync from 'readline-sync';
import { welcome } from './cli.js';

export const startGame = (gameDescription, gameData) => {
  const name = welcome();
  console.log(gameDescription); let countRound = 0;
  while (countRound < 3) {
    const [question, rightAnswer] = gameData();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ').toLowerCase();
    if (answer === rightAnswer) {
      countRound += 1;
      console.log('Correct!');
    } else {
      return console.log(`${answer} is wrong answer :(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
export default startGame;
