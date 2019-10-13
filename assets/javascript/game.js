// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];

// create variables that reference the html
var userChoiceText = document.getElementById('userchoice-text');
var computerChoiceText = document.getElementById('computerchoice-text');

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {
	// Determines which key was pressed.
	var userGuess = event.key;

	// Randomly chooses a choice from the options array. This is the Computer's guess.
	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

	// run the code when the user guesses a letter
	if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c") || (userGuess === "d") || (userGuess === "e") || (userGuess === "f") || (userGuess === "g") || (userGuess === "h") || (userGuess === "i") || (userGuess === "j") || (userGuess === "j") || (userGuess === "k") || (userGuess === "l") || (userGuess === "m") || (userGuess === "n") || (userGuess === "o") || (userGuess === "p") || (userGuess === "q") || (userGuess === "r") || (userGuess === "s") || (userGuess === "t") || (userGuess === "u") || (userGuess === "v") || (userGuess === "w") || (userGuess === "x") || (userGuess === "y") || (userGuess === "z")) {
		// show user and computer choices.
		userChoiceText.textContent = 'You Chose: ' + userGuess;
		computerChoiceText.textContent = 'The computer chose: ' + computerGuess;
	}

	
};
