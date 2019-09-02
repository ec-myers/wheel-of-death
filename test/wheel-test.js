const expect = chai.expect;

import chai from 'chai';
import Wheel from '../src/Wheel.js';

describe('Wheel', () => {
  let wheel;

  beforeEach(() => {
    wheel = new Wheel(
      [
        900,
        'BANKRUPT',
        2500,
        600,
        700,
        600,
        650,
        500,
        700,
        'BANKRUPT',
        600,
        550,
        500,
        600,
        'BANKRUPT',
        'LOSE A TURN',
        700,
        800,
        500,
        650,
        500,
        900
      ])
  });

  it('should be a function', () => {
    expect(Wheel).to.be.a('function');
  });

  it('should be an instance of wheel', () => {
    expect(wheel).to.be.an.instanceOf(Wheel);
  });

  it('should generate a new random wheel with 6 elements', () => {
    expect(wheel.makeNewWheel().length).to.equal(6);
  });
})