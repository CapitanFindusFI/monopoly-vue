import Tile from '../Tile';
import TileTypes from '../TileTypes';

class Card extends Tile {
  constructor({
    name,
    picture,
    index,
    action,
    cardType,
  }) {
    super({
      type: TileTypes.CARD,
      name,
      picture,
      index,
    });

    this.cardType = cardType;
    this.action = action;

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

  onStepUp(player) {
    console.log(player, this.action);
  }
}

export default Card;
