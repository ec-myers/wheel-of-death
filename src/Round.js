import Player from './Player.js';
import Game from './Game.js';
import Puzzle from './Puzzle.js';
import Wheel from './Wheel.js';
import Turn from './Turn.js';

class Round {
  constructor(game, currentPlayer, puzzles, wheel) {
    this.players = game.players;
    this.currentPlayer = currentPlayer;
    this.allPuzzles = puzzles;
    this.puzzleBank = [];
    this.puzzle = this.getNewPuzzle();
    this.wheel = wheel;
    //should we set wheel to the getNewWheel method?
    // this.endRound = game.endGame()
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

  getNewPuzzle() {
    this.createPuzzleBank();
    let randomNum = Math.floor(Math.random() * this.puzzleBank.length)
    return new Puzzle(this.puzzleBank[randomNum]);
  }

  createPuzzleBank() {
    let oneWordAnswers = this.allPuzzles.one_word_answers.puzzle_bank;
    let twoWordAnswers = this.allPuzzles.two_word_answers.puzzle_bank;
    let threeWordAnswers = this.allPuzzles.three_word_answers.puzzle_bank;
    let fourWordAnswers = this.allPuzzles.four_word_answers.puzzle_bank;
    let allPuzzles = [...oneWordAnswers, ...twoWordAnswers, ...threeWordAnswers, ...fourWordAnswers];
    return allPuzzles.forEach(puzzle => this.puzzleBank.push(puzzle));
  }

  getNewWheel() {
    return this.wheel.makeNewWheel();
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
//also multiply value from spinWheel by # of times letter appears in answer
//also grant another turn 
// if not then end the round
//subtrack from their score
//can you go negative?

spinWheel() {
    let currentWheel = this.wheel.makeNewWheel();
    //should we set wheel in this constructor to the result of the
    //makeNewWheel method?
    let randomIndex = Math.floor(Math.random() * currentWheel.length)
    let spinResult = currentWheel[randomIndex];
    if (typeof spinResult === Number) {
      //player makes a guess for a consonant
    } else if (spinResult === 'LOSE A TURN') {
      //this.switchPlayer()
    } else {
      //this.currentPlayer.grandTotal = 0
      //&& this.switchPlayer()
    }

}



}

export default Round;
