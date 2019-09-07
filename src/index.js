// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you import jQuery into a JS file if you use jQuery in that file

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
// import data from './data.js';
import Game from './Game.js';
import $ from 'jquery';
import Round from './Round';
import domUpdates from './DomUpdates';
// An example of how you tell webpack to use an image (also need to link to it in the index.html

import './images/background.png'
import './images/splashGIF.gif'
import './images/splashbackground.png'


let game; 

console.log('This is the JavaScript entry file - your code begins here.');

$(document).ready(function () {
  $('.body').css("background-image", "url('https://cdn.dribbble.com/users/948461/screenshots/3913689/dribbble_halloween_animation.gif')");
});

$('.header__btn--quit').click(event => {
  location.reload();
});

$('#splash__start--button--js').on('click', function() {
  let playerOne = $('#splash__player--input--one--js').val();
  let playerTwo = $('#splash__player--input--two--js').val();
  let playerThree = $('#splash__player--input--three--js').val();
  $('#ul__player--one--name--js').text(playerOne);
  $('#ul__player--one--score--js').text('$0');
  $('#ul__player--two--name--js').text(playerTwo);
  $('#ul__player--two--score--js').text('$0');
  $('#ul__player--three--name--js').text(playerThree);
  $('#ul__player--three--score--js').text('$0');
  fetch(
    "https://fe-apps.herokuapp.com/api/v1/gametime/1903/wheel-of-fortune/data"
  )
    .then(data => data.json())
    .then(data => startGame(data.data, playerOne, playerTwo, playerThree, console.log(data.data)))
    .catch(error => console.log(error));
  $('.splash__page').hide();
  $('.hidden').removeClass();
    // domUpdates.startGame(game);
  });
  
  $('.guess__input--btn').on('click', function () {
    let guessInput = $('.guess__input').val().toUpperCase();
    game.currentRound.checkSolvePuzzle(guessInput)
    console.log("guessInput", guessInput);
  });
  
 function startGame(data, playerOne, playerTwo, playerThree) {
  console.log("startGame", data, playerOne, playerTwo, playerThree)
    game = new Game(data)
    game.createPlayers(playerOne, playerTwo, playerThree);
    game.createRound()
    domUpdates.buildGameOnDOM(game)
  };
// guess__input -check solve puzzle = .toUpperCase()