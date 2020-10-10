
//write a function that will take the users guess as a parameter, andhandle 4 different scenarios:
//1. if they winn
//2. if they lose
//3. if they need to be higher
//4.if they need to be lower
const prompt = require('readline-sync');

const maxGuesses = 3;
let currentGuess = 0;
const maxRange = 10;

let randomNumber = Math.floor(Math.random() * maxRange + 1);

let playerGuess = prompt.question(
  `Hi, I've chosen a number between 1 and ${maxRange}, you have ${maxGuesses} tries to guess it.\n`
);

const handleGuess = (userGuess) => {
  for (let guesses = 0; guesses < maxGuesses; guesses++) {
    if (userGuess == randomNumber) {
      console.log('You win! 🏆');
      playAgain();
    } else if (guesses === maxGuesses - 1) {
      console.log(`You lose. 💀\nThe number was ${randomNumber}`);
      playAgain();
    } else if (userGuess > randomNumber) {
      think('lower');
      userGuess = prompt.question('Guess again...\n');
    } else {
      think('higher');
      userGuess = prompt.question('Guess again...\n');
    }
  }
};

const think = (direction) => {
  console.log(`Think ${direction}`);
  currentGuess++;
  console.log('Guesses Left: ', maxGuesses - currentGuess);
};

const playAgain = () => {
  let playAgain = prompt.question('Do you want to play again? y || n \n');
  playAgain = playAgain.toLowerCase();
  if (playAgain === 'y') {
    randomNumber = Math.floor(Math.random() * maxRange + 1);
    let newGuess = prompt.question(
      `I have chosen a number between 1 and ${maxRange}, you have ${maxGuesses} tries to guess it.\n`
    );
    currentGuess = 0;
    guesses = 0;
    handleGuess(newGuess);
  } else {
    console.log('Thanks for playing.\nGoodbye.');
  }
};

handleGuess(playerGuess);