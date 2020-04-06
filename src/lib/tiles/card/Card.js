import Tile from '../Tile';
import TileTypes from '../tile.types.enum';

class Card extends Tile {
  constructor({
    name,
    picture,
    cardType,
  }) {
    super({
      type: TileTypes.CARD,
      name,
      picture,
    });

    this.cardType = cardType;
    this.hasBeenPicked = false;
  }

  getCardType() {
    return this.cardType;
  }

  setCardType(cardType) {
    this.cardType = cardType;
  }

  getHasBeenPicked() {
    return this.hasBeenPicked;
  }

  setHasBeenPicked(flag) {
    this.hasBeenPicked = flag;
  }

  // eslint-disable-next-line class-methods-use-this,no-unused-vars
  onStepUp(player) {
    throw new Error('Must be implemented in exteding classes');
  }
}

export default Card;
