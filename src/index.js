// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/.png'

console.log('This is the JavaScript entry file - your code begins here.');

$('#splash__start--button--js').on('click', function() {
  let playerOne= $('#splash__player--input--one--js').val()
  let playerTwo= $('#splash__player--input--two--js').val()
  let playerThree= $('#splash__player--input--three--js').val()
  $('#player__one--name--js').text(playerOne);
  $('#player__one--score--js').text('$0');
  $('#player__two--name--js').text(playerTwo);
  $('#player__two--score--js').text('$0');
  $('#player__three--name--js').text(playerThree);
  $('#player__three--score--js').text('$0');
});

