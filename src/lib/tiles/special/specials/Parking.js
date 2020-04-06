import Special from '../Special';
import SpecialTypes from '../SpecialTypes';

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
