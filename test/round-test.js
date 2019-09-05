const expect = chai.expect;

import chai from 'chai';
import Round from '../src/Round.js';
import Wheel from '../src/Wheel.js';
import Puzzle from '../src/Puzzle.js';

describe('Round', function () {
  let round;
  let players;
  let puzzle;
  let wheel;

  beforeEach(function () {
    players = ['Royce', 'Cliff', 'Jasper'];
    puzzle = new Puzzle({
      category: 'Around The House',
      number_of_words: 1,
      total_number_of_letters: 8,
      first_word: 8,
      description: 'Location or object(s) found within a typical house.',
      correct_answer: 'Armchair',
    });
    wheel = new Wheel(
      [700,
      600,
      650,
      500,
      700,
      'BANKRUPT']);
    round = new Round(players, puzzle, wheel);
    });


  // it('should show the players', () => {
  //   let game = new Game(); 
  //   let round = new Round();
  //   expect(round.getStartingPlayer()).to.equal('kate');
  // });

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
})
