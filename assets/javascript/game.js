// Creates an array that lists out all of the options.
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];

// create variables to hold the number of wins, losses, guesses left, guesses so far -- they all start at zero
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guesses = [];

// create variables that reference the html
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesLeft-text");
var guessesText = document.getElementById("guesses-text");


// This function is run whenever the user presses a key.
document.onkeyup = function (event) {
	// Determines which key was pressed.
	var userGuess = event.key.toLowerCase();
	guesses.push(" " + userGuess);

	// Randomly chooses a choice from the options array. This is the Computer's guess.
	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

	// run the code when the user guesses a letter
	if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c") || (userGuess === "d") || (userGuess === "e") || (userGuess === "f") || (userGuess === "g") || (userGuess === "h") || (userGuess === "i") || (userGuess === "j") || (userGuess === "j") || (userGuess === "k") || (userGuess === "l") || (userGuess === "m") || (userGuess === "n") || (userGuess === "o") || (userGuess === "p") || (userGuess === "q") || (userGuess === "r") || (userGuess === "s") || (userGuess === "t") || (userGuess === "u") || (userGuess === "v") || (userGuess === "w") || (userGuess === "x") || (userGuess === "y") || (userGuess === "z")) {

		// if we choose the same as the computer add 1 to wins
		if ((userGuess === computerGuess)) {
			wins++;
			guessesLeft = 9;
			guesses = [];
		}
		if ((userGuess !== computerGuess)) {
			losses++;
			guessesLeft--;
		}
		if (guessesLeft === 0) {
			alert("GAME OVER!!!");
		}


		// show user and computer choices, and wins/losses/guesses left/ guesses so far
		userChoiceText.textContent = "You chose: " + userGuess;
		computerChoiceText.textContent = "The computer chose: " + computerGuess;
		winsText.textContent = "wins: " + wins;
		lossesText.textContent = "losses: " + losses;
		guessesLeftText.textContent = "guesses left: " + guessesLeft;
		guessesText.textContent = "Guesses so far: " + guesses;
	}

};
