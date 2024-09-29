console.log('Main loaded');
let playerScore = 0;
let computerScore = 0;
 
const goButton = document.getElementById("go-button");
const lowerButton = document.getElementById("lower-button");
const higherButton = document.getElementById("higher-button");
const resultDisplay = document.getElementById("result-display");
 
let currentDiceSum = 0;
 
goButton.addEventListener('click', function() {
    console.log('Go button clicked');
    let diceOne = Math.floor(Math.random() * 6) + 1;
    let diceTwo = Math.floor(Math.random() * 6) + 1;
    currentDiceSum = diceOne + diceTwo;
   
    console.log("Dobbelsteen 1:", diceOne);
    console.log("Dobbelsteen 2:", diceTwo);
    console.log("Totaal:", currentDiceSum);
    resultDisplay.textContent = `Totaal: ${currentDiceSum}`;
});
 
lowerButton.addEventListener('click', function() {
    console.log('Lower button clicked');
    checkGuess('lower');
});
 
higherButton.addEventListener('click', function() {
    console.log('Higher button clicked');
    checkGuess('higher');
});
 
function checkGuess(guess) {
    if (currentDiceSum) {
        const randomNumber = Math.floor(Math.random() * 12) + 1;
        console.log("Gok:", guess, "Totaal:", currentDiceSum);
 
        if (guess === 'lower' && randomNumber < currentDiceSum) {
            playerScore++;
            console.log("Je hebt gewonnen!");
            resultDisplay.textContent += ` Je hebt gewonnen met: ${randomNumber}`;
        } else if (guess === 'higher' && randomNumber > currentDiceSum) {
            playerScore++;
            console.log("Je hebt gewonnen!");
            resultDisplay.textContent += ` Je hebt gewonnen met: ${randomNumber}`;
        } else {
            computerScore++;
            console.log("Je hebt verloren.");
            resultDisplay.textContent += ` Je hebt verloren met: ${randomNumber}`;
        }
    } else {
        console.log("Klik eerst op de Go-knop!");
    }
}