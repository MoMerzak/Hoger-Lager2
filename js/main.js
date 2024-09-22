console.log(Main loaded);
let player = 0;
let computer = 0;
let score = 0;
let computerScore = 0;
let round = 0;
let playerGuess = '';
let timer = 0;


const diceOne = Math.round(Math.random() * (6 - 1) + 1);
const diceTwo = Math.round(Math.random() * (6 - 1) + 1);
console.log(diceOne + diceTwo);

winnaar = "player";
print("De winnaar van de ronde is: ${winnaar}");