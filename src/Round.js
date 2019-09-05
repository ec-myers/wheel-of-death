class Round {
  constructor(players, puzzle, wheel) {
    this.players = [];
    this.players = players;
    this.currentPlayer = this.players[0];
    this.puzzle = puzzle;
    this.wheel = wheel;
  }

  switchPlayer() {
    if (this.currentPlayer === this.players[0]) {
      return (this.currentPlayer = this.players[1]);
    } else if (this.currentPlayer === this.players[1]) {
      return (this.currentPlayer = this.players[2]);
    } else {
      return (this.currentPlayer = this.players[0]);
    }
  }

  compareLetterToAnswer(spinResult) {
    //set variable to value of clicked button (let guessedLetter)
    let guessedLetter = 'A';
    this.puzzle.lettersUsed.push(guessedLetter);
    this.puzzle.correctAnswer.forEach(letter => {
      if (guessedLetter === letter) {
        this.puzzle.correctGuesses.push(guessedLetter);
        //append to DOM
        this.currentPlayer.currentScore += spinResult;
        this.spinWheel();
    } else {
      this.switchPlayer();
    }
    })
  }

  spinWheel() {
    let randomIndex = Math.floor(Math.random() * this.wheel.length);
    let spinResult = this.wheel[randomIndex];
    if (typeof spinResult === Number) {
      this.compareLetterToAnswer(spinResult);
      //player makes a guess for a consonant
    } else if (spinResult === 'LOSE A TURN') {
      this.switchPlayer();
    } else {
      this.currentPlayer.currentScore = 0;
      this.switchPlayer();
    }

  }

  buyAVowel(vowel) {
    this.currentPlayer.currentScore -= 100;
    this.puzzle.lettersUsed.push(vowel);
    //can not break execution of forEach, need traditional for loop
    for (let i = 0; i < this.puzzle.correctAnswer.length; i++) {
      if (this.puzzle.correctAnswer[i] === vowel) {
        this.puzzle.correctGuesses.push(vowel);
        return;
      }
    }
    this.switchPlayer();
  }
}


export default Round;
