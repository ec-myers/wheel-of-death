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