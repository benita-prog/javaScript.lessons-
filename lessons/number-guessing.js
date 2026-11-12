
const attempts = 7;

function displayRules() {
    console.log("Welcome to Number Guessing Game!\n");
    console.log("I have selected a number between 1 and 100.");
    console.log("You have 7 attempts to guess it.\n");
}

function playGame(number, attempt = 1) {
    if (attempt > attempts) {
        console.log("\nGame Over!");
        console.log("The correct number was:", number);
        return;
    }

    let guess = prompt(`Attempt ${attempt}/7 - Enter your guess:`);

    guess = Number(guess);

    if (!Number.isInteger(guess)) {
        console.log("Please enter a valid number.\n");
        return playGame(number, attempt);
    }

    if (guess < 1 || guess > 100) {
        console.log("Please enter a number between 1 and 100.\n");
        return playGame(number, attempt);
    }

    // Arrow function equivalent of Python's lambda
    const checkGuess = (x, y) =>
        x === y ? "correct" : x < y ? "low" : "high";

    const result = checkGuess(guess, number);

    if (result === "correct") {
        console.log("\nCongratulations! You guessed the correct number!");
        console.log(`You guessed it in ${attempt} attempt(s).`);
        return;
    }

    if (result === "low") {
        console.log("Too Low! Try a higher number.\n");
    } else {
        console.log("Too High! Try a lower number.\n");
    }

    playGame(number, attempt + 1);
}

// Start the game
displayRules();

const randomNumber = Math.floor(Math.random() * 100) + 1;

playGame(randomNumber);
