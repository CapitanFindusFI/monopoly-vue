import Tile from '../Tile';
import TileTypes from '../TileTypes';

class Tax extends Tile {
  constructor({
    name,
    picture,
  }) {
    super({
      type: TileTypes.TAX,
      name,
      picture,
    });
  }

  onStepUp(player) {
    console.log(`Player: ${player.name} stepped up on a tax`, this);
  }
}

export default Tax;
