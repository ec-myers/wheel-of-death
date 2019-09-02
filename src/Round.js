import Player from './Player.js';
import Game from './Game.js';
import Puzzle from './Puzzle.js';
import Wheel from './Wheel.js';

class Round {
  constructor(player, puzzle, game, wheel) {
    this.players = game.players;
    this.puzzle = this.getNewPuzzle()
    this.wheel = wheel
  

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

}

export default Round;