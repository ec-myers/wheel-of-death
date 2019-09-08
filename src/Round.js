import domUpdates from './DomUpdates.js';
import Game from './Game.js';

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

  spinWheel() {
    let randomIndex = Math.floor(Math.random() * this.wheel.items.length);
    let result = this.wheel.currentSpinResult = this.wheel.items[randomIndex];
    domUpdates.showWheelOutput(result);
    domUpdates.enableSubmitAndVowelBtns(this);
    return result;
  } 
  
  compareWheelOutput() {
    //only want to enable consonants if it is a number
    if (this.wheel.currentSpinResult === 'LOSE A TURN') {
      this.switchPlayer();
      //update currentPlayer name on DOM
    } else if (this.wheel.currentSpinResult === 'BANKRUPT') {
      this.currentPlayer.currentScore = 0;
      this.switchPlayer();
      // update currentPlayer name on DOM
    } else {
      //enableConsonants
      //disable used consonants
    }
  }

  compareLetterToAnswer(guessedLetter) {
    this.puzzle.lettersUsed.push(guessedLetter);
    //can not break execution of forEach, need traditional for loop
    for (let i = 0; i < this.puzzle.correctAnswer.length; i++) {
      if (guessedLetter === this.puzzle.correctAnswer[i]) {
        this.puzzle.correctGuesses.push(guessedLetter);
        //append to DOM
        this.currentPlayer.currentScore += this.wheel.currentSpinResult;
        return;
      } 
    }
    this.switchPlayer();
  }

  // checkSolvePuzzle(guess) {
  //   console.log("guess", guess.toUpperCase())
  //   console.log("puzzle answer", this.puzzle.correctAnswer.join(""))
  //   if (guess.toUpperCase() === this.puzzle.correctAnswer.join("")) {
  //     console.log("hello")
  //     this.currentPlayer.currentScore += 1000
  //   } else {
  //     console.log("current player now", this.currentPlayer)
  //     this.switchPlayer()
  //     console.log("now player", this.currentPlayer)
  //   }

  // }

  checkSolvePuzzle(guess) {
    guess.toUpperCase() === this.puzzle.correctAnswer.join("") ?
    (this.currentPlayer.currentScore += 1000) : this.switchPlayer();
  }

  endRound() {
    let highScore = this.players.map(player => {
      return player.currentScore
    }).sort((a,b) => b - a)
    console.log("high score", highScore);
    return this.players.forEach(player => {
      if (player.currentScore !== highScore[0]) {
        player.currentScore = 0
      } else {
        player.bank += highScore[0]
        player.currentScore = 0
        console.log("players", this.players)
      }
      Game.createRound();
    })
   
  }
 
//&& endRound() in truthy turnary 

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
