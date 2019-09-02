import data from './data.js';
import Player from './Player.js';

class Game {
  constructor(data) {
    this.data = data;
    // this.game = game;
    this.players = [];
    // this.roundCounter = 0;
  }

  createPlayers(p1, p2, p3) {
    let playerOne = new Player(1, p1);
    let playerTwo = new Player(2, p2);
    let playerThree = new Player(3, p3);
    this.players.push(playerOne, playerTwo, playerThree);
  }

}

export default Game;
