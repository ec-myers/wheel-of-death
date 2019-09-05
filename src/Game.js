import data from './data.js';
import Player from './Player.js';
import Round from './Round.js';
import domUpdates from './DomUpdates.js';
import Puzzle from './Puzzle';

class Game {
  constructor(data) {
    this.puzzleBank = this.createPuzzleBank(data);
    this.wheelData = data.wheel;
    this.currentRound;
    this.players = [];
    this.roundCounter = 0;
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

  createRound() {
    if (this.roundCounter < 4) {
      let puzzle = this.getNewPuzzle();
      this.currentRound = new Round(this.players, puzzle, this.wheelData);
      this.roundCounter++;
    } //else we'll go to bonus round - need condl logic to kick into that
  }

  getNewPuzzle() {
    let randomNum = Math.floor(Math.random() * this.puzzleBank.length)
    return new Puzzle(this.puzzleBank[randomNum]);
  }

  createPuzzleBank(data) {
    let oneWordAnswers = data.puzzles.one_word_answers.puzzle_bank;
    let twoWordAnswers = data.puzzles.two_word_answers.puzzle_bank;
    let threeWordAnswers = data.puzzles.three_word_answers.puzzle_bank;
    let fourWordAnswers = data.puzzles.four_word_answers.puzzle_bank;
    let allPuzzles = [...oneWordAnswers, ...twoWordAnswers, ...threeWordAnswers, ...fourWordAnswers];
    return allPuzzles;
  }

  endGame() {

  }

}

export default Game;
