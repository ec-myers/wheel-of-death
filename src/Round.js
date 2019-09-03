import Player from './Player.js';
import Game from './Game.js';
import Puzzle from './Puzzle.js';
import Wheel from './Wheel.js';

class Round {
  constructor(players, puzzleBank, wheel) {
    this.players = players;
    this.puzzleBank = puzzleBank;
    this.puzzle = this.getNewPuzzle()
    this.wheel = wheel
  

  }

  getCurrentPlayer() {
    // this.player = 
  }

  getNewPuzzle() {
    let randomIndex = Math.floor(Math.random() * game.puzzleBank.length)
    let returnedPuzzle = this.puzzleBank[randomIndex]
    return new Puzzle(returnedPuzzle)
  }

  getNewWheel() {

  }

}

export default Round;