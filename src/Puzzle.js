import Game from './Game.js'
import Round from './Round.js'

class Puzzle {
  constructor(puzzleData) {
    this.category = puzzleData['category'];
    this.numWords = puzzleData['number_of_words'];
    this.totalLetters = puzzleData['total_number_of_letters'];
    this.firstWord = puzzleData['first_word'];
    this.description = puzzleData['description'];
    this.correctAnswer = puzzleData['correct_answer'];

  }

  getNewPuzzle() {

  }
}

export default Puzzle