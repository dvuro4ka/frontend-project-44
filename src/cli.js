import readlineSync from 'readline-sync';

export const welcome = () => {
  const yourname = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${yourname}!`);

  return yourname;
};
export default welcome;
