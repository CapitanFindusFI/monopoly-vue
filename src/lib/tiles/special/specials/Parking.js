import Special from '../Special';
import SpecialTypes from '../special.types.enum';

class Parking extends Special {
  constructor({
    name,
    picture,
  }) {
    super({
      name,
      picture,
      specialType: SpecialTypes.PARKING,
    });
  }

  onStepUp(player) {
    console.log(`Player: ${player.name} stepped up in free parking!`, this);
  }
}

export default Parking;
