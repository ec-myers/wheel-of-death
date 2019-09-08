import data from './data.js';
import Player from './Player.js';
import Round from './Round.js';
import domUpdates from './DomUpdates.js';
import Puzzle from './Puzzle';
import Wheel from './Wheel';

class Game {
  constructor(data) {
    this.puzzleBank = this.createPuzzleBank(data);
    this.wheelData = data.wheel;
    this.currentRound;
    this.players = [];
    this.roundCounter = 0;
  }

  startGame() {
    this.createRound();
    domUpdates.disableSubmitAndVowelBtns(this);
    domUpdates.showPuzzle(this.currentRound.puzzle);
  }

  createPlayers(p1, p2, p3) {
    let playerOne = new Player(1, p1);
    let playerTwo = new Player(2, p2);
    let playerThree = new Player(3, p3);
    this.players.push(playerOne, playerTwo, playerThree);
  }

  //i think this needs to be updated to account for whether or not a round has been played
  //and what to do with the scores
  //propose a two-fold conditional: one for if the round counter is at 0, which would
  //look exactly the same as below, and another if roundCounter is > 0 and < 4, which
  //would use the endRound logic from the Round file
  createRound() {
    if (this.roundCounter < 4) {
      let puzzle = this.createNewPuzzle();
      let wheel = this.createNewWheel(this.wheelData);
      this.currentRound = new Round(this.players, puzzle, wheel);
      this.roundCounter++;
    } //else we'll go to bonus round - need condl logic to kick into that
  }

  createNewPuzzle() {
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

  createNewWheel(data) {
    let wheel = new Wheel();
    const pushMe = () => {
      let randomNum = Math.floor(Math.random() * 22);
      wheel.items.length < 6 ? (wheel.items.push(data[randomNum]) && pushMe()) : wheel;
    };
    pushMe();
    return wheel;
  }

  endGame() {

  }

}

export default Game;
