import data from './data.js';
import Player from './Player.js';
import Round from './Round.js';

class Game {
  constructor(data) {
    this.data = data;
    // this.game = game;
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

  

  // createPuzzles(dataObj) {
  //   let oneWordAnswers = Object.values(dataObj.puzzles.one_word_answers.puzzle_bank)
  //   let twoWordAnswers = Object.values(dataObj.puzzles.two_word_answers.puzzle_bank)
  //   let threeWordAnswers = Object.values(dataObj.puzzles.three_word_answers.puzzle_bank)
  //   let fourWordAnswers = Object.values(dataObj.puzzles.four_word_answers.puzzle_bank)
  //   let fullPuzzleBank = [...oneWordAnswers,...twoWordAnswers,...threeWordAnswers,...fourWordAnswers];
  //   return fullPuzzleBank
  // }



  startGame() {
    this.createPlayers(p1, p2, p3)
    this.createRound()
  }

  createRound() {
    if (this.roundCounter < 4) {
      let round = new Round(this.players, puzzle, wheel)
      this.roundCounter++
    } //else we'll go to bonus round - need condl logic to kick into that
   
  }

  endGame() {

  }

}

export default Game;
