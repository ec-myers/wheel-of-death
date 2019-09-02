const expect = chai.expect;

import chai from 'chai';
import Game from '../src/Game.js';
import Round from '../src/Round.js';
import Player from '../src/Player.js';

describe('Game', function() {
  let game;

  beforeEach(function() {
    game = new Game()
  });

  it('should be a function', () => {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', () => {
    expect(game).to.be.an.instanceOf(Game);
  });
})