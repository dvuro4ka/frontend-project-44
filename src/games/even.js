import game from "../index.js";

const gameDesc = 'Answer "yes" if the number is even, otherwise answer "no".';
export const even = () => {
    const question = Math.floor(Math.random() * 20);
    let rightAnswer = '';
    question % 2 === 0 ? rightAnswer = 'yes': rightAnswer = 'no';
    return [question, rightAnswer];
}

game(gameDesc,even);

export default even;
