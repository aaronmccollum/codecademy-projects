// Partial project code for Number Guesser project on Codecademy
// Other part of project code provided by Codecademy on their website

let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// function to generate a random number
const generateTarget = () => {
  return Math.floor(Math.random() * 9) + 1;
};

const compareGuesses = (humanGuess, computerGuess, secretNum) => {
  // validate player answer and return error message if it fails
  if (humanGuess < 0 || humanGuess > 9) {
    alert('Guess is out of range. Please select between 0 and 9.');
    return;
  }
  
  // get the absolute value of each player's differences
  const humanGuessDistance = Math.abs(humanGuess - secretNum);
  const computerGuessDistance = Math.abs(computerGuess - secretNum);

  // return 'true' if human guess is equal or lower than computer
  return humanGuessDistance <= computerGuessDistance ? true : false;
}

// updates score by 1 depending on who won
const updateScore = winnerStr => {
  if (winnerStr === 'human') { humanScore += 1; };
  if (winnerStr === 'computer') { computerScore += 1; };
}

// function that advances the round number of the game
const advanceRound = () => {
  currentRoundNumber++;
}
