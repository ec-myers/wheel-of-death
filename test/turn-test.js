const expect = chai.expect;

import chai from 'chai';
import Turn from '../src/Turn';
import Player from '../src/Player.js';

describe('Turn', function () {
  let turn;

  beforeEach(function () {
    turn = new Turn()
  });

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    expect(turn).to.be.an.instanceOf(Turn);
  });
})