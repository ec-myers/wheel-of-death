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
    game.currentRound.currentPlayer.currentScore -= 100;
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

$('.btn__instructions').click(showInstructionsModal);

$('.modal__close').click(e) => {
  console.log("Click!!")
  e.target.closest('.help__modal').hide();
}


function showInstructionsModal() {
  $(`<div class='help__modal'>
      <header class='modal__header'>
        <button class='modal__close'>X</button>
         <h4 class='help__modal--header'>How To Play</h5>
      </header>
        <div class='help__modal--content'>
          <ul class='modal__ul'>
            <li>A game is 4 rounds</li>
            <li>There will be a new puzzle and wheel each round</li>
            <li>Spin the wheel when it is your turn</li>
            <li>If the output is a number, you have the opportunity to select a consonant</li>
            <li>If you're right, the value from the wheel is added to your current score and the Reaper stays away
            for another turn</li>
            <li>If you want to guess a vowel, you must sell a piece of your soul for 100 points</li>
            <li>If the wheel output is 'Bankrupt,' you lose all the points you've earned</li>
            <li>If the wheel output is 'Lose a Turn,' you get one step closer to meeting your fate at the Reaper's hand</li>
            <li>Use the input box to solve the whole puzzle, if you dare</li>
            <li>If correct, your score is increased by 1000 points and the round is over</li>
            <li>If this guess is incorrect, you better watch out for the Reaper while the next player spins</li>
            <li>The round is over when the puzzle is solved</li>
            <li>The winner of the round gets to keep all points accrued, which will be moved to their bank</li>
            <li>The losers have their points for the round taken by the Grim Reaper</li>
            <li>The winner of the game is determined by who has the most money in the bank at the end of four rounds</li>
            <li>The losers are sent to the Reaper, never to be seen again</li>
          </ul>
        </div>
      </div>
    `).insertBefore('.results_instructions')
}
