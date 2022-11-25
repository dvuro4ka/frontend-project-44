import readlineSync from 'readline-sync';
import { welcome } from '../src/cli.js';

export const game = (gameDesc, gameData) => {
    const name = welcome();
    console.log(gameDesc);
    let count = 0;
    while (count < 3) {
        const [question, rightAnswer] = gameData();
        console.log(`Question: ${question}`);
        const answer = readlineSync.question('Your answer: ');
        if (answer === rightAnswer) {
            count += 1;
            console.log('Correct!');
        } else {
            return console.log(`${answer} is wrong answer :(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}!`);
        }
    }
    return console.log(`Congratulations, ${name}!`); 
}
export default game;