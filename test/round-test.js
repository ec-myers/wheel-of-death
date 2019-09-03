const expect = chai.expect;

import chai from 'chai';
import Game from '../src/Game.js';
import Round from '../src/Round.js';
import Turn from '../src/Turn.js';
import Player from '../src/Player.js';

describe('Round', function () {
  let round;

  beforeEach(function () {
    round = new Round()
  });

  // it('should show the players', () => {
  //   let game = new Game(); 
  //   let round = new Round();
  //   expect(round.getStartingPlayer()).to.equal('kate');
  // });

  // it('should show the current player', () => {
  //   expect(swithchPlayer()).to.equal(Game);
  // });
})