//psuedobob
var game = {
    wins: 0,
    losses: 0,
    guessesLeft: 0,
    userGuesses: [],
    wrongGuesses: [],
    Words: ['dogs', "cat", "rabbit", "frog"],
    randWord: "",
    blanks: "",
    startGame: function () {
        this.guessesLeft = 10;
        this.userGuesses = [];
        this.randWord = this.Words[Math.floor(Math.random() * this.Words.length)];

        this.blanks = this.randWord.split('');

        for (var i in this.blanks) {
            if (this.blanks[i] === " ") {
                this.blanks[i] = '&nbsp;';
            } else {
                this.blanks[i] = "_";
            }
        }

        console.log(this.blanks);

        document.getElementById('wordblanks').innerHTML = this.blanks.join(' ');
        document.getElementById('guessesLeft').innerHTML = this.guessesLeft;
        document.getElementById('wrongGuesses').innerHTML = this.wrongGuesses;
    },
    compare: function (letter) {
        var isTrue = false;
        for (var i in this.randWord) {
            if (letter === this.randWord[i]) {
                isTrue = true;
            }
        }

        if (isTrue) {
            for (var i in this.randWord) {
                if (this.randWord[i] === letter) {
                    this.blanks[i] = letter;
                    document.getElementById('wordblanks').innerHTML = this.blanks.join(' ');
                }
            }
            // change the dom to reflect the updated blanks
        } else {
            this.guessesLeft--;
            this.wrongGuesses.push(letter);
            document.getElementById('guessesLeft').innerHTML = this.guessesLeft;
            document.getElementById('wrongGuesses').innerHTML = this.wrongGuesses;
        }

        this.nextRound();
    },
    nextRound: function () {
        if (this.guessesLeft === 0) {
            alert('game over');
            this.losses++;
            document.getElementById('lossCounter').innerHTML = this.losses;
            this.startGame();
        }

        if (this.blanks.indexOf("_") < 0) {
            alert('you won');
            this.wins++;
            document.getElementById('winCounter').innerHTML = this.wins;
            this.startGame();
        }

    }
};

game.startGame();
console.log(game.randWord);
document.onkeyup = function (e) {
    var letterEntry = e.key;
    if (e.keyCode > 64 && e.keyCode < 91) {
        console.log(letterEntry);
        if (game.userGuesses.indexOf(letterEntry) < 0) {
            game.userGuesses.push(letterEntry);
            game.compare(letterEntry);
        }
    }
};