import Card from '../Card';
import CardTypes from '../CardTypes';

class Possibility extends Card {
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
      cardType: CardTypes.POSSIBILITY,
    });
  }
}

export default Possibility;
