import Player from './Player.js';
import Game from './Game.js';
import Puzzle from './Puzzle.js';
import Wheel from './Wheel.js';

class Round {
  constructor(players, playerOne, playerTwo, playerThree, currentPlayer, puzzle, game, wheel) {
    this.players = game.players;
    this.puzzle = this.getNewPuzzle()
    this.wheel = wheel;
    this.player1 = new Player(playerOne);
    this.player2 = new Player(playerTwo);
    this.player3 = new Player(playerThree);
    this.currentPlayer = currentPlayer; 
    // this.currentTurn = this.startTurn();
  }

  getStartingPlayer() {
    if(game.roundCounter % 2 === 0) {
      return this.player1
    } else {
      return this.swithchPlayer()
    }
  }

  swithchPlayer() {
    if (this.currentPlayer === this.players[0]) {
      return (this.currentPlayer = this.players[1]);
    } else if (this.currentPlayer === this.players[1]) {
      return (this.currentPlayer = this.players[2]);
    } else {
      return (this.currentPlayer = this.players[0]);
    }
  }

  getNewPuzzle() {
    let randomIndex = Math.floor(Math.random() * game.puzzleBank.length)
    return game.puzzleBank[randomIndex]
  }


  getNewWheel() {

  }

}

export default Round;