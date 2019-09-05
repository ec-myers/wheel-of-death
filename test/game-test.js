const expect = chai.expect;

import chai from 'chai';
import Game from '../src/Game.js';
import Puzzle from '../src/Puzzle.js';
import Wheel from '../src/Wheel.js';
import Round from '../src/Round.js';
import Player from '../src/Player.js';
import spies from 'chai-spies';
import domUpdates from '../src/DomUpdates.js';
import data from '../src/data.js';

chai.use(spies)
chai.spy.on(domUpdates, 
  ['startGame', 
  'showPuzzle', 
  'displayPuzzle'], () => {});

describe('Game', function() {
  let game;
  
  beforeEach(function() {
    game = new Game(data)
  });

  it('should be a function', () => {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', () => {
    expect(game).to.be.an.instanceOf(Game);
  });

  it('should have no players before the game starts', () => {
    expect(game.players.length).to.eql(0);
  });

  it('should have a round counter that starts at zero', () => {
    expect(game.roundCounter).to.equal(0);
  });

  it('should have three players when game starts', () => {
    game.createPlayers('Royce', 'Cliff', 'Jasper');
    expect(game.players.length).to.eql(3);
  });

  it('should create a puzzle bank', () => {
    game.createPuzzleBank(data);
    expect(game.puzzleBank.length).to.eql(96);
  });

  it('should choose a random puzzle', () => {
    game.createNewPuzzle();
    expect(game.createNewPuzzle(data)).to.be.an.instanceOf(Puzzle);
  });

  it('should choose a random wheel', () => {
    // game.createNewWheel();
    expect(game.createNewWheel(data)).to.be.an.instanceOf(Wheel);
  });

  it('should display puzzle', () => {
    domUpdates.startGame(game);
    expect(domUpdates.startGame).to.have.been.called(1);
  });

});