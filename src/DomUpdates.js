
import $ from 'jquery';

export default {

  buildGameOnDOM(game) {
    // game.startGame();
    this.showPuzzle(game.currentRound.puzzle)

  disableSubmitAndVowelBtns() {
    $('#guess__btn--vowel--js').prop('disabled', true);
    $('#guess__input--btn--js').prop('disabled', true);
  },
  
  enableSubmitAndVowelBtns() {
    $('#guess__btn--vowel--js').prop('disabled', false);
    $('#guess__input--btn--js').prop('disabled', false);
    $('#btn__spin--js').prop('disabled', false);

  },

  enableLetterBtns() {
    $('.btn__letter').prop('disabled', false)
  },

  enableVowels() {
    $('.section__vowels').prop('disabled', false);
  },

  showWheelOutput(result) {
    $('#wheel__output--js').text(result);
  },

  showLetter() {
    $('.container__displayPuzzle').show();
  },

  showPuzzle(puzzle) {
    let puzzleAnswer = this.displayPuzzle(puzzle.correctAnswer);
    $('#section__displayPuzzle--js').html(`${puzzleAnswer}`);
    // $('#list__displayPuzzle--letter').hide();
    $('#span__category--js').text(puzzle.category);
    $('#span__hint--js').text(puzzle.description);
  },
  
  displayPuzzle(answer) {
    let letterList = `<ul class="container__displayPuzzle">`;
    answer.forEach(letter => {
      if (letter === " ") {
        letterList += `<li class="list__displayPuzzle"><span class="span__displayPuzzle--space" id="list__displayPuzzle--letter">&nbsp</span></p>`;
      } else if (letter === "-" || letter === "'" || letter === "&") {
        letterList += `<li class="list__displayPuzzle"><span class="span__displayPuzzle--symbol" id="list__displayPuzzle--symbol">${letter}</span></p>`;
      } else {
        letterList += `<li class="list__displayPuzzle"><span class="span__displayPuzzle--letter" id="list__displayPuzzle--${letter}">${letter}</span></p>`;
      }
    });
    letterList += `</ul>`;
    return letterList;
  }


}

