const expect = chai.expect;

import chai from 'chai';
import Player from '../src/Player.js';

describe('Player', () => {
  let player;

  beforeEach(function() {
    player = new Player(1, 'Lester')
  });

  it('should be a function', () => {
    expect(Player).to.be.a('function');
  });

  it('should be an instance of player', () => {
    expect(player).to.be.an.instanceOf(Player);
  });

  it('should have a name', () => {
    expect(player.name).to.equal('Lester');
  });

  it('should have an id', () => {
    expect(player.id).to.equal(1);
  });
  
  it('should have a default current score of 0', () => {
    expect(player.currentScore).to.equal(0);
  });

  it('should have a default grand total of 0', () => {
    expect(player.grandTotal).to.equal(0);
  });

  it('should keep track of the current score', () => {
    let player = new Player(1, 'Lester', 400, 800);
    expect(player.currentScore).to.equal(400);
  });

  it('should keep track of the grand total', () => {
    let player = new Player(1, 'Lester', 400, 800);
    expect(player.grandTotal).to.equal(800);
  });
});