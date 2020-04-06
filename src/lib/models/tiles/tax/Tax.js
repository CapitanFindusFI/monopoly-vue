import Tile from '../Tile';
import TileTypes from '../TileTypes';

class Tax extends Tile {
  constructor({
    name,
    picture,
    index,
  }) {
    super({
      type: TileTypes.TAX,
      name,
      picture,
      index,
    });
  }

  onStepUp(player) {
    console.log(`Player: ${player.name} stepped up on a tax`, this);
  }
}

export default Tax;
