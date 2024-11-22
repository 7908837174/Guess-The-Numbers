let secretNumber;
let attempts = 0;
let maxAttempts = 10;
 
const userInput = document.getElementById('userInput');
const submitBtn = document.getElementById('submitBtn');
const resetBtn = document.getElementById('resetBtn');
const message = document.getElementById('message');
const attemptsDisplay = document.getElementById('attempts');
 
function startGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;  // Random number between 1 and 100
    attempts = 0;
    message.textContent = '';
    userInput.value = '';
    attemptsDisplay.textContent = `Attempts: ${attempts}`;
    submitBtn.disabled = false;
    resetBtn.style.display = 'none';
}
 
function checkGuess() {
    const guess = parseInt(userInput.value);
    attempts++;

    if (isNaN(guess) || guess < 1 || guess > 100) {
        message.textContent = "Please enter a valid number between 1 and 100.";
        message.style.color = "red";
        return;
    }

    if (guess === secretNumber) {
        message.textContent = `Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts!`;
        message.style.color = "green";
        submitBtn.disabled = true;
        resetBtn.style.display = 'block';
    } else if (guess < secretNumber) {
        message.textContent = "Too low! Try again.";
        message.style.color = "orange";
    } else {
        message.textContent = "Too high! Try again.";
        message.style.color = "orange";
    }

    attemptsDisplay.textContent = `Attempts: ${attempts}`;
     
    if (attempts >= maxAttempts) {
        message.textContent = `Game over! The correct number was ${secretNumber}.`;
        message.style.color = "green";
        submitBtn.disabled = true;
        resetBtn.style.display = 'block';
    }
}
 
submitBtn.addEventListener('click', checkGuess);
resetBtn.addEventListener('click', startGame);
 
startGame();

