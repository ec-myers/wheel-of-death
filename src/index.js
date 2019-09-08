// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you import jQuery into a JS file if you use jQuery in that file

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import $ from 'jquery';
import data from './data.js';
import Game from './Game.js';
import './images/background.png';
import Round from './Round';
// An example of how you tell webpack to use an image (also need to link to it in the index.html


let game = new Game(data);

console.log('This is the JavaScript entry file - your code begins here.');


$(document).ready(function () {
  $('.body').css("background-image", "url('https://cdn.dribbble.com/users/948461/screenshots/3913689/dribbble_halloween_animation.gif')");
});


$('.header__btn--quit').click( () => {
  location.reload();
});

$('#guess__input--js').on('keypress', function() {
  if ($('#guess__input--js').val() !== '') {
    $('#guess__input--btn--js').prop('disabled', false)
  } else{
    $('#guess__input--btn--js').prop('disabled', true);
  }
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
  $('.splash__page').hide()
  game.createPlayers(playerOne, playerTwo, playerThree);
  game.startGame();

  // fetch(
  //   "https://fe-apps.herokuapp.com/api/v1/gametime/1903/wheel-of-fortune/data"
  // )
  //   .then(response => response.json())
  //   .then(data => startGame(data.data, player1, player2, player3))
  //   .catch(error => console.log(error));
});

$('.guess__input--btn').on('click', function () {
  let guessInput = $('.guess__input').val()
  //removed toUpperCase on the variable assignment because it had to
  //be in the method logic for the test to pass
  console.log("hi")
  game.currentRound.checkSolvePuzzle(guessInput)
  console.log("hello")
    // game.createRound()
})

// guess__input -check solve puzzle = .toUpperCase()

$('#btn__spin--js').on('click', () => {
  //disable spin button
  console.log(game.currentRound);
  game.currentRound.spinWheel();
  game.currentRound.compareWheelOutput();
});

$('#section__consonants--js').on('click', (e) => {
  e.preventDefault();
  let guessedLetter = $(e.target).closest('.btn__letter').val();

  game.currentRound.compareLetterToAnswer(guessedLetter);
});

$('#guess__btn--vowel--js').on('click', () => {
  //enable vowels
  //disable used vowels (usedLetters)
});

$('#section__vowels--js').on('click', (e) => {
  e.preventDefault();
  let guessedVowel = $(e.target).closest('.btn__letter').val();

  if (game.currentRound.currentPlayer.hasEnoughMoney()) {
    game.currentRound.buyAVowel(guessedVowel);
  }
});