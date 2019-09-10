const expect = chai.expect;

import chai from 'chai';
import Game from '../src/Game.js';
import Puzzle from '../src/Puzzle.js';
import Wheel from '../src/Wheel.js';
import spies from 'chai-spies';
import domUpdates from '../src/DomUpdates.js';
import data from '../src/data.js';

chai.use(spies);
chai.spy.on(domUpdates, 
  ['startGame', 
  'showPuzzle', 
  'displayPuzzle'], () => {});
  
describe('Game', () => {
  let game;
    
  beforeEach( () => {
    game = new Game(data);
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

  it('should have a round counter that starts at one', () => {
    expect(game.roundCounter).to.equal(1);
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
    expect(game.createNewWheel(data)).to.be.an.instanceOf(Wheel);
  });

  it.only('should display puzzle', () => {
    game.startGame()
    expect(domUpdates.showPuzzle).to.be.spy;
  });

  it('should be able to determine winner of the game', () => {
    let players = [ 
      {id: 1, name: "a", currentScore: 2500, grandTotal: 1100},
      {id: 2, name: "b", currentScore: 1100, grandTotal: 0},
      {id: 3, name: "c", currentScore: 4000, grandTotal: 4000}
    ]
    expect(game.endGame(players)).to.eql({id: 3, name: "c", currentScore: 4000, grandTotal: 4000});
  });
});