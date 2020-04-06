import TilesGenerator from './generators/tiles/TilesGenerator';

class Game {
  constructor() {
    this.tiles = [];
  }

  generateTiles() {
    const tiles = TilesGenerator.generateOrdered();
  }

}

export default Game;
