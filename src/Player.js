import domUpdates from './DomUpdates.js';
import Round from './Round.js';

class Player {

  constructor(id, name, currentScore, grandTotal) {
    this.id = id;
    this.name = name;
    this.currentScore = currentScore || 0;
    this.grandTotal = grandTotal || 0;
  }

  hasEnoughMoney() {
    return this.currentScore >= 100;
  }
}


export default Player;
