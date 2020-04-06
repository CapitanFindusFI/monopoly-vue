import Card from '../Card';
import CardTypes from '../CardTypes';

class Chance extends Card {
  constructor({
    name,
    picture
  }) {
    super({
      name,
      picture,
      cardType: CardTypes.CHANCE,
    });
  }

  onStepUp(player) {
    console.log(`Player: ${player.name} picks a Chance card`, this);
  }
}

export default Chance;
