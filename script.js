let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

let humanGuess = 0;
let computerGuess = 0;
let targetNumbers = generateTarget();

const getAbsoluteDistance = (guess, target) => 
  Math.abs(target - guess);

/*const compareGuesses = (humanGuess, computerGuess, targetNumbers) => 
     Math.abs(targetNumbers - humanGuess) <= Math.abs(targetNumbers - computerGuess) ? true : false ;*/

const compareGuesses = (humanGuess, computerGuess, targetNumbers) => 
     getAbsoluteDistance(humanGuess, targetNumbers) <= getAbsoluteDistance(computerGuess, targetNumbers) ? true : false ;

const check = humanGuess => {
  if (humanGuess > 9) { window.alert( 'Your number is out of range! Pleas, choose number between 0 and 9.')} 
}

let winner =  compareGuesses(humanGuess, computerGuess, targetNumbers) ? 'human' : 'computer';

const updateScore = (winner) => 
  winner === 'human' ?
    humanScore++ : computerScore++;
  
 const advanceRound = () => {
    return currentRoundNumber ++;
  };  