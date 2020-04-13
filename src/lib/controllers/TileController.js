import TilesGenerator from '../generators/tiles/TilesGenerator';

class TileController {
  constructor() {
    this.tiles = TilesGenerator.generateOrdered();
  }

  getTileByIndex(tileIndex) {
    return this.tiles[tileIndex];
  }

  isTileOwned(tileIndex) {
    return this.getTileByIndex(tileIndex)
      .getOwner() !== null;
  }
}

export default TileController;
