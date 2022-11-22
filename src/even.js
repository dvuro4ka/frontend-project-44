import welcome from './src/cli.js';
import readlineSync from 'readline-sync';

export const even = () => { 
const name = welcome();
let count = 0;
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    while (count < 3) {
        let randomNumber =  Math.floor(Math.random() * 20);
        console.log(`Question: ${randomNumber}`);
        let question = readlineSync.question(`Your answer: `);
        if ((randomNumber % 2 === 0 && question === "yes") || (randomNumber %2 !== 0 && question === "no")) {
            count += 1;
            console.log('Correct!');
        }
        else {
            return console.log(`Let's try again, ${name}!`);
        }
    };
    if (count === 3) return console.log(`Congratulations, ${name}!`);
}