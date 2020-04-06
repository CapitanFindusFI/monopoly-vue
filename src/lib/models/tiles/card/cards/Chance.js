import Card from '../Card';
import CardTypes from '../CardTypes';

class Chance extends Card {
  constructor({
    name,
    picture,
    index,
    action,
  }) {
    super({
      name,
      picture,
      index,
      action,
      cardType: CardTypes.CHANCE,
    });
  }
}

export default Chance;
