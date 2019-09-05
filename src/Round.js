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

  //multiple letters in one word?
  compareGuessAnswer(guess) {
    this.correctAnswer.toLowerCase().split('')
    this.correctAnswer.forEach(letter => {
      if (guess === letter) {
        //append to DOM
        this.spinAgain
        return 'Winner, Guesss Again...'
    } else {
      
    }
    })
  }
//taking in a guessed letter
//compare that letter to each letter in our this.correct answer array 
//if the guess matches any letters in the array then append to DOM
//also grant another turn 
// if not then end the round
//subtrack from their score
//can you go negative?

spinWheel() {
  //Each time a player spins the wheel we have         
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
