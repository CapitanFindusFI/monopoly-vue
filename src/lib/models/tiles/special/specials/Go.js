import Special from '../Special';
import SpecialTypes from '../SpecialTypes';

class Go extends Special {
  constructor({
    name,
    picture,
    index,
  }) {
    super({
      name,
      picture,
      index,
      specialType: SpecialTypes.GO,
    });
  }

  onStepUp(player) {
    console.log(`Player: ${player.name} stepped up in go!`, this);
  }
}

export default Go;
