import data from './data.js';
import Player from './Player.js';
import Round from './Round.js';
import domUpdates from './DomUpdates.js';

class Game {
  constructor(data) {
    this.puzzles = data.puzzles;
    this.wheel = data.wheel;
    this.round;
    this.players = [];
    this.roundCounter = 0;
    // this.puzzleBank = this.createPuzzles(data)
  }

  startGame() {
    this.createRound(this.players[0]);
  }

  createPlayers(p1, p2, p3) {
    let playerOne = new Player(1, p1);
    let playerTwo = new Player(2, p2);
    let playerThree = new Player(3, p3);
    this.players.push(playerOne, playerTwo, playerThree);
  }

  createRound(currentPlayer) {
    if (this.roundCounter < 4) {
      this.round = new Round(this.players, currentPlayer, this.puzzles, this.wheel);
      this.roundCounter++;
    } //else we'll go to bonus round - need condl logic to kick into that
  }

  endGame() {

  }
}

export default Game;
