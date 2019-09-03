import Player from './Player.js';
import Game from './Game.js';
import Puzzle from './Puzzle.js';
import Round from './Round.js';

import $ from 'jquery';


function appendPlayers(players) {
  players.forEach(player => {
    $(`.player-${player.id}-name`).text(player.name);
  })
}