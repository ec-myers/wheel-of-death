const expect = chai.expect;

import chai from 'chai';
import Round from '../src/Round.js';
import Turn from '../src/Turn.js';
import Player from '../src/Player.js';
import data from '../src/data.js';

describe('Round', function () {
  let round;

  beforeEach(function () {
    let players = ['Royce', 'Cliff', 'Jasper'];
    let currentPlayer = {};
    let puzzles = data.puzzles;
    let wheel = data.wheel;
    round = new Round(players, currentPlayer, puzzles, wheel)
  });

  it.only('should create a puzzle bank', () => {
    round.createPuzzleBank();
    expect(round.puzzleBank.length).to.eql(192)
  });

})