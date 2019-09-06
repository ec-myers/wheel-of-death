
import $ from 'jquery';

export default {
  enableVowels() {
    $('.section__vowels').prop("disabled", false);
  },

  disableVowels() {
    $('.section__vowels').prop("disabled", true);
  },

  enableBuyVowelBtn() {
    $('.').prop("disabled", true);
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
  },

  







}

