
import $ from 'jquery';

export default {
  disableSubmitBtn() {
    $('#guess__input--btn--js').prop('disabled', true);
  },
  
  enableSubmitAndVowelBtns() {
    $('#guess__input--btn--js').prop('disabled', false);
    $('#btn__spin--js').prop('disabled', false);
  },

  enableBuyVowelBtn() {
    $('#guess__btn--vowel--js').prop('disabled', false);
  },

  disableBuyVowelBtn() {
    $('#guess__btn--vowel--js').prop('disabled', true);
  },

  enableVowelBtns() {
    $('.btn__vowel').prop('disabled', false);
  },

  disableVowelBtns() {
    $('.btn__vowel').prop('disabled', true);
  },

  enableLetterBtns() {
    $('.btn__letter').prop('disabled', false);
  },

  disableLetterBtns() {
    $('.btn__letter').prop('disabled', true);
  },

  showWheelOutput(result) {
    $('#wheel__output--js').text(result);
  },

  showLetter(guess) {
    $(`.${guess}`).show();
  },

  disableLettersUsed(lettersUsed) {
    lettersUsed.forEach(letter => {
      $(`#cons${letter}`).prop('disabled', true);
    });
  },

  disableVowelUsed(lettersUsed) {
    lettersUsed.forEach(letter => {
      $(`#vowel${letter}`).prop('disabled', true);
    });
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

  displayRoundNum(currentRound) {
    $('#span__round--js').text(currentRound);
  },

  displayPlayerScore(players) {
    players.forEach(player => {
      $(`.span__player--${player.id}--score`).text(player.currentScore);
      $(`.ul__player--${player.id}--total--score`).text(player.grandTotal);
    })
  },


  
}

