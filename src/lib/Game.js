import TilesGenerator from './generators/tiles/TilesGenerator';
import DieController from './controllers/DieController';

class Game {
  constructor() {
    this.tiles = TilesGenerator.generateOrdered();
    this.dice = DieController.generateDice();
  }
}

export default Game;
