import Player from './Player.js';
import Game from './Game.js';
import Puzzle from './Puzzle.js';
import Wheel from './Wheel.js';

class Round {
  constructor(players, currentPlayer, puzzles, wheel) {
    this.players = players;
    this.currentPlayer = currentPlayer;
    this.allPuzzles = puzzles;
    this.puzzleBank = [];
    this.puzzle = this.getNewPuzzle();
    this.wheel = wheel;
  }

  getCurrentPlayer() {
    // this.player = 
  }

  getNewPuzzle() {
    this.createPuzzleBank();
    let randomIndex = Math.floor(Math.random() * this.puzzleBank.length)
    return this.puzzleBank[randomIndex];
  }

  createPuzzleBank() {
    let oneWordAnswers = this.puzzles.one_word_answers.puzzle_bank;
    let twoWordAnswers = this.puzzles.two_word_answers.puzzle_bank;
    let threeWordAnswers = this.puzzles.three_word_answers.puzzle_bank;
    let fourWordAnswers = this.puzzles.four_word_answers.puzzle_bank;
    let allPuzzles = [...oneWordAnswers, ...twoWordAnswers, ...threeWordAnswers, ...fourWordAnswers];
    return allPuzzles.forEach(puzzle => this.puzzleBank.push(puzzle));
}

  getNewWheel() {

  }

  buyAVowel(vowel) {
    if (this.currentPlayer.currentScore < 100) {
      //disable buy a vowel
    } else {
      this.currentPlayer.currentScore -= 100;
      this.lettersUsed.push(vowel);
      this.puzzle.correctAnswer.forEach(letter => {
        if (vowel === letter) {
          //updateDom with vowel
        } else {
          //move to next player
        }
      });
    }
  }

}

export default Round;