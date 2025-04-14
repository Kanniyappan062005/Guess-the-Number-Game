
const input = document.getElementById("inputBox");
const result = document.getElementById("result");
const guessOption = document.getElementById("guessOption");

let guessesLeft = 3;

function guessNumber() {
    const userGuess = parseInt(input.value);
    const computerChoice = Math.floor(Math.random() * 5) + 1;

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 5) {
        result.textContent = "🚫 Please enter a number between 1 and 5.";
        result.style.color = "#ff4d4d";
        return;
    }

    if (guessesLeft <= 0) {
        result.textContent = "❌ No guesses left. Refresh to play again!";
        result.style.color = "#ff4d4d";
        return;
    }

    if (userGuess === computerChoice) {
        result.textContent = "🎉 Correct! You guessed it!";
        result.style.color = "#00ff88";
        alert("🎉 Your guess is correct!");
    } else {
        guessesLeft--;
        result.textContent = `❌ Wrong! The number was: ${computerChoice}`;
        result.style.color = "#ffa500";
        guessOption.textContent = `Available Guesses: ${guessesLeft}`;

        if (guessesLeft === 0) {
            result.textContent += " 💀 Game Over!";
        }
    }

    input.value = "";
}