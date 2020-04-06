import Tile from '../Tile';
import TileTypes from '../TileTypes';

class Special extends Tile {
  constructor({
    name,
    picture,
    specialType
  }) {
    super({
      type: TileTypes.SPECIAL,
      name,
      picture,
    });

    this.specialType = specialType;
  }

  getSpecialType() {
    return this.specialType;
  }

  setSpecialType(specialType) {
    this.specialType = specialType;
  }

  // eslint-disable-next-line no-unused-vars,class-methods-use-this
  onStepUp(player) {
    throw new Error('Must be implemented in extending classes');
  }
}

export default Special;
