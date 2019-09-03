// import Player from './Player.js';
// import Game from './Game.js';
// import Puzzle from './Puzzle.js';

import $ from 'jquery';

export default {

  // appendPlayers(players) {
  //   players.forEach(player => {
  //     $(`.player-${player.id}-name`).text(player.name);
  //   })
  // }
  showPuzzle(puzzle) {
    console.log(puzzle.correctAnswer)
    let puzzleAnswer = this.displayPuzzle(puzzle.correctAnswer);
    console.log(puzzleAnswer)
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

