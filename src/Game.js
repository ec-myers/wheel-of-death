import data from './data.js';
import Player from './Player.js';
import Round from './Round.js';

class Game {
  constructor(data) {
    this.puzzles = data.puzzles;
    this.wheel = data.wheel;
    this.round;
    this.players = [];
    this.roundCounter = 0;
    // this.puzzleBank = this.createPuzzles(data)
  }

  createPlayers(p1, p2, p3) {
    let playerOne = new Player(1, p1);
    let playerTwo = new Player(2, p2);
    let playerThree = new Player(3, p3);
    this.players.push(playerOne, playerTwo, playerThree);
  }

<<<<<<< HEAD
  

  // createPuzzles(dataObj) {
  //   let oneWordAnswers = Object.values(dataObj.puzzles.one_word_answers.puzzle_bank)
  //   let twoWordAnswers = Object.values(dataObj.puzzles.two_word_answers.puzzle_bank)
  //   let threeWordAnswers = Object.values(dataObj.puzzles.three_word_answers.puzzle_bank)
  //   let fourWordAnswers = Object.values(dataObj.puzzles.four_word_answers.puzzle_bank)
  //   let fullPuzzleBank = [...oneWordAnswers,...twoWordAnswers,...threeWordAnswers,...fourWordAnswers];
  //   return fullPuzzleBank
  // }
=======
>>>>>>> 12af8889e44f86981d368b69920171bd9f69eaa7



  // startGame() {
  //   this.createPlayers(p1, p2, p3)
  //   this.createRound()
  // }

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
