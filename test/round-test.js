const expect = chai.expect;

import chai from 'chai';
import spies from 'chai-spies';
import domUpdates from '../src/DomUpdates.js';
import Round from '../src/Round.js';
import Wheel from '../src/Wheel.js';
import Puzzle from '../src/Puzzle.js';

chai.use(spies);


describe('Round', function () {
  let round;
  let players;
  let currentPlayer;
  let puzzle;
  let wheel;
  
  beforeEach(function () {
    chai.spy.on(domUpdates,
        ['displayPlayerName',
         'displayPlayerScore',
         'enableLetterBtns',
         'disableLettersUsed',
         'enableBuyVowelBtn',
         'disableBuyVowelBtn',
        'showLetter',
        'showWheelOutput',
        'enableSubmitAndVowelBtns'
        ], () => true);
    players = [{ id: 1, name: "Elyse", currentScore: 200, grandTotal: 0 }, { id: 2, name: "Kate", currentScore: 100, grandTotal: 0 }, { id: 3, name: "Sara", currentScore: 400, grandTotal: 0 }];
    currentPlayer = players[0];
    puzzle = new Puzzle({
      category: 'Around The House',
      number_of_words: 1,
      total_number_of_letters: 8,
      first_word: 8,
      description: 'Location or object(s) found within a typical house.',
      correct_answer: 'Armchair',
    });
    wheel = new Wheel();
    wheel.items = [700];
    round = new Round(players, puzzle, wheel);
  });

  afterEach(function () {
    chai.spy.restore(domUpdates);
  });

  it('should have three players', () => {
    expect(round.players).to.equal(players);
  });

  it('should have a current player', () => {
    expect(round.currentPlayer).to.equal(round.players[0]);
  });

  it('should have a puzzle', () => {
    expect(round.puzzle).to.be.an.instanceOf(Puzzle);
  });

  it('should have a wheel', () => {
    expect(round.wheel).to.be.an.instanceOf(Wheel);
  });

  it.only('should decrement player\'s current score by 100 when they buy a vowel', () => {
    round.buyAVowel('e');
    console.log(currentPlayer)
    expect(currentPlayer.currentScore).to.equal(100);
  });

  it('should add guessed vowel to an array', () => {
    round.buyAVowel('E');
    expect(puzzle.lettersUsed).to.eql(['E']);
  });

  it('should add guessed vowel to an array if correct', () => {
    round.buyAVowel('A');
    expect(puzzle.correctGuesses).to.eql(['A']);
  });

  it('should return a value from the wheel when spun ', () => {
    expect(round.spinWheel()).to.equal(700);
  });

  it('should not switch players if the consonant guess is correct ', () => {
    let guessedLetter = 'A';
    round.compareLetterToAnswer(guessedLetter);
    expect(round.currentPlayer).to.eql(round.players[0]);
  });

  it('should switch players if consonant guess is incorrect ', () => {
    let guessedLetter = 'D';
    round.compareLetterToAnswer(guessedLetter);
    expect(round.currentPlayer).to.eql(round.players[1]);
  });

  it('should add guessed letter to array if correct', () => {
    let guessedLetter = 'A';
    round.compareLetterToAnswer(guessedLetter);
    expect(puzzle.correctGuesses).to.eql(['A']);
  });

  it('should add guessed letter to array if incorrect', () => {
    let guessedLetter = 'D';
    round.compareLetterToAnswer(guessedLetter);
    expect(puzzle.lettersUsed).to.eql(['D']);
  });
});
