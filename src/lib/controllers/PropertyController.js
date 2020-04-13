import TilesGenerator from '../generators/tiles/TilesGenerator';

class PropertyController {
  constructor() {
    this.properties = TilesGenerator.generateOrdered();
  }

  getPropertyByIndex(tileIndex) {
    return this.properties.find((property) => property.tileIndex === tileIndex);
  }
}

export default PropertyController;
