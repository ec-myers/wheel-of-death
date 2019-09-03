// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you import jQuery into a JS file if you use jQuery in that file

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import data from './data.js';
import Game from './Game.js';
import $ from 'jquery';
import Round from './Round';
import domUpdates from './DomUpdates';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/back.gif'
import './images/background.jpg'


console.log('This is the JavaScript entry file - your code begins here.');

<<<<<<< HEAD
$(document).ready(function () {
  $(".body").css("background-image", "url('https://cdn.dribbble.com/users/948461/screenshots/3913689/dribbble_halloween_animation.gif')");
});

$('#splash__start--button--js').on('click', function() {
  let newGame = new Game(data);
  let playerOne= $('#splash__player--input--one--js').val()
  let playerTwo= $('#splash__player--input--two--js').val()
  let playerThree= $('#splash__player--input--three--js').val()
=======
$('#splash__start--button--js').on('click', () => {
  event.preventDefault();
  let playerOne = $('#splash__player--input--one--js').val();
  let playerTwo = $('#splash__player--input--two--js').val();
  let playerThree = $('#splash__player--input--three--js').val();
>>>>>>> 12af8889e44f86981d368b69920171bd9f69eaa7
  $('#ul__player--one--name--js').text(playerOne);
  $('#ul__player--one--score--js').text('$0');
  $('#ul__player--two--name--js').text(playerTwo);
  $('#ul__player--two--score--js').text('$0');
  $('#ul__player--three--name--js').text(playerThree);
  $('#ul__player--three--score--js').text('$0');
  startGame(data, playerOne, playerTwo, playerThree);
});

function startGame(data, p1, p2, p3) {
  let newGame = new Game(data);
  newGame.createPlayers(p1, p2, p3);
  newGame.createRound(newGame.players[0]);
  // console.log("newGame", newGame.round);
  domUpdates.showPuzzle(newGame.round.puzzle);
}

