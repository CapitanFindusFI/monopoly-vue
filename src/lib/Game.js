import TilesGenerator from './generators/tiles/TilesGenerator';

class Game {
  constructor() {
    this.tiles = TilesGenerator.generateOrdered();
  }
}

export default Game;
