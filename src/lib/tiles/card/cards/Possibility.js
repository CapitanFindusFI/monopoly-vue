import Card from '../Card';
import CardTypes from '../card.types.enum';

class Possibility extends Card {
  constructor({
    name,
    picture
  }) {
    super({
      name,
      picture,
      cardType: CardTypes.POSSIBILITY,
    });
  }

  onStepUp(player) {
    console.log(`Player: ${player.name} picks a Possibility card`, this);
  }
}

export default Possibility;
