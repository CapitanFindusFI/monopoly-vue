import Special from '../Special';
import SpecialTypes from '../SpecialTypes';

class Parking extends Special {
  constructor({
    name,
    picture,
    index,
  }) {
    super({
      name,
      picture,
      index,
      specialType: SpecialTypes.PARKING,
    });
  }

  onStepUp(player) {
    console.log(`Player: ${player.name} stepped up in free parking!`, this);
  }
}

export default Parking;
