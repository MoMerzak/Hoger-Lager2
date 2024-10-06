console.log('Main loaded');
let playerScore = 0;
let computerScore = 0;
let playerCredits = 0;
let computerCredits = 0;
let currentDiceSum = 0;
 
const goButton = document.getElementById("go-button");
const lowerButton = document.getElementById("lower-button");
const higherButton = document.getElementById("higher-button");
const resultDisplay = document.getElementById("result-display");
const playerCreditsDisplay = document.querySelector(".player-credits");
const goText = document.querySelector(".message-box");
 
const computerCreditsDisplay = document.querySelector('.computer-credits');
 
 
goButton.addEventListener('click', function() {
    console.log('Go button clicked');
    goButton.remove();
    goText.remove();
 
    currentDiceSum = 0;
    for (let i = 0; i < 2; i++) {
        const diceValue = Math.floor(Math.random() * 6) + 1;
        currentDiceSum += diceValue;
        console.log(`Dobbelsteen ${i + 1}:`, diceValue);
    }
 
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
            playerCredits++;
            console.log("Je hebt gewonnen!");
            resultDisplay.textContent += ` Je hebt gewonnen met: ${randomNumber}`;
        } else if (guess === 'higher' && randomNumber > currentDiceSum) {
            playerScore++;
            playerCredits++;
            console.log("Je hebt gewonnen!");
            resultDisplay.textContent += ` Je hebt gewonnen met: ${randomNumber}`;
        } else {
            computerScore++;
            computerCredits++;
            console.log("Je hebt verloren.");
            resultDisplay.textContent += ` Je hebt verloren met: ${randomNumber}`;
        }
        playerCreditsDisplay.textContent = playerCredits;
        computerCreditsDisplay.textContent = computerCredits;
 
        console.log("Player Credits:", playerCredits);
        console.log("Computer Credits:", computerCredits);
    } else {
        console.log("Klik eerst op de Go-knop!");
    }
}