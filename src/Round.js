import Player from './Player.js';
import Game from './Game.js';
import Puzzle from './Puzzle.js';
import Wheel from './Wheel.js';

class Round {
  constructor(players, currentPlayer, puzzle, wheel) {
    this.players = players;
    this.puzzle = puzzle;
    this.wheel = wheel;
    this.currentPlayer = currentPlayer;
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