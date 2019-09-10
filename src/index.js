import $ from 'jquery';
import Game from './Game.js';
import domUpdates from './DomUpdates';
import './css/base.scss';
import './images/background.png';
import './images/background.png';
import './images/splashGIF.gif';
import './images/splashbackground.png';
import './images/pumpkin.png';

let game; 

fetch(
  "https://fe-apps.herokuapp.com/api/v1/gametime/1903/wheel-of-fortune/data")
  .then(response => response.json())
  .then(dataset => game = new Game(dataset.data))
  .catch(error => console.log(error))

$(document).ready(function () {
  $('.body').css("background-image", "url('https://cdn.dribbble.com/users/948461/screenshots/3913689/dribbble_halloween_animation.gif')");
  $(".splash__player--input").keyup(function () {
    if (
      $("#splash__player--input--one--js").val() !== "" &&
      $("#splash__player--input--two--js").val() !== "" &&
      $("#splash__player--input--three--js").val() !== ""
    ) {
      $(".splash__start--button").prop("disabled", false);
    }
  });
});

$('#splash__start--button--js').on('click', function() {
  let playerOne = $('#splash__player--input--one--js').val();
  let playerTwo = $('#splash__player--input--two--js').val();
  let playerThree = $('#splash__player--input--three--js').val();
  $('#ul__player--one--name--js').text(playerOne);
  $('#ul__player--two--name--js').text(playerTwo);
  $('#ul__player--three--name--js').text(playerThree);
  $('.splash__page').hide();
  $('.hidden').removeClass();
  game.createPlayers(playerOne, playerTwo, playerThree);
  game.startGame();
});

$('.header__btn--quit').click( () => {
  location.reload();
});
  
$('#guess__input--btn--js').on('click', function () {
  let guessInput = $('.guess__input').val().toUpperCase();
  let correctGuess = game.currentRound.checkSolvePuzzle(guessInput);
  
  if (game.roundCounter < 4 && correctGuess) {
    game.currentRound.endRound();
    game.createNewRound(game.currentRound.currentPlayer);
    domUpdates.displayRoundNum(game.roundCounter);
    domUpdates.showPuzzle(game.currentRound.puzzle);
  }
  if (game.roundCounter === 4 && correctGuess) {
    domUpdates.displayPlayerScore();
    game.currentRound.endGame(game.players)
    //prompt user to press quit and start a new game
  }
  if (game.roundCounter < 4 && !correctGuess) {
    game.currentRound.switchPlayer();
    domUpdates.displayPlayerName(game.currentRound.currentPlayer.name);
  }
  //disable submit button
});

$('#guess__input--js').on('keypress', function() {
  if ($('#guess__input--js').val() !== '') {
    $('#guess__input--btn--js').prop('disabled', false)
  } else {
    $('#guess__input--btn--js').prop('disabled', true);
  }
});

$('#btn__spin--js').on('click', () => {
  //disable spin button
  game.currentRound.spinWheel();
  game.currentRound.compareWheelOutput();
  $('.img__pumpkin').addClass('img__pumpkin--rotate');
  setTimeout(() => {
    $('.img__pumpkin').removeClass('img__pumpkin--rotate');
  }, 3500)
});

$('#section__consonants--js').on('click', (e) => {
  e.preventDefault();
  let guessedLetter = $(e.target).closest('.btn__letter').text();
  game.currentRound.compareLetterToAnswer(guessedLetter);
  domUpdates.disableLetterBtns();
});

$('#guess__btn--vowel--js').on('click', () => {
  if (game.currentRound.currentPlayer.hasEnoughMoney()) {
    domUpdates.displayPlayerScore(game.players);
    domUpdates.enableVowelBtns();
  }
    //enable vowels
    //disable used vowels (usedLetters)
});

$('#section__vowels--js').on('click', (e) => {
  e.preventDefault();
  let guessedVowel = $(e.target).closest('.btn__vowel').text();
  game.currentRound.buyAVowel(guessedVowel);
});

