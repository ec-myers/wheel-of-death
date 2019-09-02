const expect = chai.expect;

import chai from 'chai';
import Puzzle from '../src/Puzzle.js';

describe('Puzzle', () => {
  let puzzle;

  beforeEach(() => {
    puzzle = new Puzzle({
      category: 'Around The House',
      number_of_words: 1,
      total_number_of_letters: 8,
      first_word: 8,
      description: 'Location or object(s) found within a typical house.',
      correct_answer: 'Armchair',
    });
  });

  it('should be a function', () => {
    expect(Puzzle).to.be.a('function');
  });

  it('should be an instance of puzzle', () => {
    expect(puzzle).to.be.an.instanceOf(Puzzle);
  });

  it('should have a category', () => {
    expect(puzzle.category).to.equal('Around The House');
  });

  it('should have a number of words', () => {
    expect(puzzle.numWords).to.equal(1);
  });

  it('should have a total number of letters', () => {
    expect(puzzle.totalLetters).to.equal(8);
  });

  it('should have a first word', () => {
    expect(puzzle.firstWord).to.equal(8);
  });

  it('should have a description', () => {
    expect(puzzle.description).to.equal('Location or object(s) found within a typical house.');
  });

  it('should have a correct answer', () => {
    expect(puzzle.correctAnswer).to.equal('Armchair');
  });
})
