console.log('Main loaded');
let playerScore = 0;
let computerScore = 0;
let playerCredits = 0;
let computerCredits = 0;
let currentDiceSum = 0;
let timer;  
let timeLeft = 120;  
let computerDiceSum = 0;
 
const goButton = document.getElementById("go-button");
const lowerButton = document.getElementById("lower-button");
const higherButton = document.getElementById("higher-button");
const resultDisplay = document.getElementById("result-display");
const playerCreditsDisplay = document.querySelector(".player-credits");
const goText = document.querySelector(".message-box");
const computerCreditsDisplay = document.querySelector('.computer-credits');
const timerDisplay = document.querySelector(".timer-display");
 
goButton.addEventListener('click', function() {
    console.log('Go button clicked');
    goButton.remove();
    goText.remove();
 
    currentDiceSum = 0;
    computerDiceSum = 0;
 
    for (let i = 0; i < 2; i++) {
        const diceValue = Math.floor(Math.random() * 6) + 1;
        currentDiceSum += diceValue;
        console.log(`Speler Dobbelsteen ${i + 1}:`, diceValue);
    }
 
    for (let i = 0; i < 2; i++) {
        const computerDiceValue = Math.floor(Math.random() * 6) + 1;
        computerDiceSum += computerDiceValue;
        console.log(`Computer Dobbelsteen ${i + 1}:`, computerDiceValue);    
    }
 
    console.log("Speler Totaal:", currentDiceSum);
    console.log("Computer Totaal:", computerDiceSum);
    resultDisplay.textContent = `Speler Totaal: ${currentDiceSum}, Computer Totaal: ${computerDiceSum}`;
   
    document.querySelector('.comuter-dice-display').textContent = `computer heeft gegooid ${computerDiceSum}`;
    startTimer();
});
 
lowerButton.addEventListener('click', function() {
    console.log('Lower button clicked');
    checkGuess('lower');
});
 
higherButton.addEventListener('click', function() {
    console.log('Higher button clicked');
    checkGuess('higher');
});
 
function startTimer() {
    timerDisplay.textContent = `Tijd over: ${timeLeft} seconden`;
    timer = setInterval(function() {
        timeLeft--;
        timerDisplay.textContent = `Tijd over: ${timeLeft} seconden`;
 
        if (timeLeft <= 0) {
            clearInterval(timer);
            resultDisplay.textContent += ' Tijd is op!';
            goButton.disabled = true;
            lowerButton.disabled = true;
            higherButton.disabled = true;
           
            showWinner();
        }
    }, 1000);
}
 
function showWinner() {
    console.log("player credits:", playerCredits);
    console.log("computer credits:", computerCredits);
    if (playerCredits > computerCredits) {
        resultDisplay.textContent += ' Je hebt gewonen!';
    } else if (playerCredits < computerCredits) {
        resultDisplay.textContent += ' De computer heeft gewonen!';
    } else {
        resultDisplay.textContent += ' Het is gelijkspel';
    }
}
 
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