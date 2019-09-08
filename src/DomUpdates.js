
import $ from 'jquery';

export default {
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

  disableLetterBtns() {
    $('.btn__letter').prop('disabled', true)
  },

  enableVowels() {
    $('.section__vowels').prop('disabled', false);
  },

  showWheelOutput(result) {
    $('#wheel__output--js').text(result);
  },

  showLetter(guess) {
    $(`.${guess}`).show();
  },

  showPuzzle(puzzle) {
    let puzzleAnswer = this.displayPuzzle(puzzle.correctAnswer);
    $('#section__displayPuzzle--js').html(`${puzzleAnswer}`);
    $('.span__displayPuzzle--letter').hide();
    $('#span__category--js').text(puzzle.category);
    $('#span__hint--js').text(puzzle.description);
  },
  
  displayPuzzle(answer) {
    let letterList = `<div class="container__displayPuzzle">`;
    answer.forEach(letter => {
      if (letter === " ") {
        letterList += `<p class="list__displayPuzzle--space"><span class="span__displayPuzzle--space" id="list__displayPuzzle--space">&nbsp</span></p>`;
      } else if (letter === "-" || letter === "'" || letter === "&") {
        letterList += `<p class="list__displayPuzzle--symbol"><span class="span__displayPuzzle--symbol" id="list__displayPuzzle--symbol">${letter}</span></p>`;
      } else {
        letterList += `<p class="list__displayPuzzle--letter"><span class="span__displayPuzzle--letter ${letter}">${letter}</span></p>`;
      }
    });
    letterList += `</div>`;
    return letterList;

  },

  displayPlayerName(currentPlayer) {
    $('#span__player--turn--js').text(currentPlayer);
  },

  displayPlayerScore(players) {
    console.log(players)
    players.forEach(player => {
      console.log(player.id)
      console.log(player.currentScore)
      $(`.span__player--${player.id}--score`).text(player.currentScore);
    })
  },
}

