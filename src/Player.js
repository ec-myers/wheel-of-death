class Player {
  constructor(id, name, currentScore, grandTotal) {
    this.id = id;
    this.name = name;
    this.currentScore = currentScore || 0;
    this.grandTotal = grandTotal || 0;
  }


}




if (typeof module !== 'undefined') {
  module.exports = Player;
}