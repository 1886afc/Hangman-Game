// word bank
var wordBank = ["mario", "yoshi", "toad", "bowser", "luigi"];
// guesses remaining
var guessesRemaining = 10;
// variable for random word
//user choices
var userGuess = ["abcdefghijklmnopqrstuvwxyz"];
//var randomWord = 
//push array
var guesses [];


 // var remainingLetters = wordBank.length;

// function starts?
var answerArray = [];
	for (var i = 0; i < wordBank.length; i++) {
	answerArray[i] = "_";
	}
document.onkeyup = function(event) {
// key to start function to 
	var userGuess = event.key;

	var computerGuess = wordBank[Math.floor(Math.random() * wordBank.length)];{
//place holder for word
	var answer = [];

    for (var i = 0; i < computerGuess.length; i++) {

      answer[i] = "_";

	if (computerGuess === "mario"){
		if (userGuess === "m", "a", "r", "i", "o"){}
	else guessesRemaining - 1; 
	}

	}
}





//console logs
	console.log(computerGuess);
	console.log(answerArray)
	document.getElementById("w").innerHTML = answer;
	document.getElementById("gr").innerHTML = guessesRemaining;
	document.getElementById("g").innerHTML = guesses;



	//var html = "<h1>Press any key to start playing!</h1>" + 
	//+
	//"<p>guesses remaining: " + guessesRemaining + "</p>" 
	//"<p>Word!"+ answerArray + "</p>";

	//document.querySelector("#game").innerHTML = html;
}