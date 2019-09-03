import Player from './Player.js';
import Game from './Game.js';
import Puzzle from './Puzzle.js';
import Wheel from './Wheel.js';
import Turn from './Turn.js';

class Round {
  constructor(player, puzzle, game, wheel, turn) {
    this.players = game.players;
    this.puzzle = this.getNewPuzzle()
    this.wheel = wheel
    this.correctAnswer = puzzle.correctAnswer
    this.spinAgain = turn.spinWheel()
    // this.endRound = game.endGame()
  }

  getCurrentPlayer() {
    // this.player = 
  }

  getNewPuzzle() {
    let randomIndex = Math.floor(Math.random() * game.puzzleBank.length)
    return game.puzzleBank[randomIndex]
  }

  getNewWheel() {

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



}

export default Round;