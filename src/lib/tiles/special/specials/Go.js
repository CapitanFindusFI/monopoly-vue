import Special from '../Special';
import SpecialTypes from '../special.types.enum';

class Go extends Special {
  constructor({
    name,
    picture,
  }) {
    super({
      name,
      picture,
      specialType: SpecialTypes.GO,
    });
  }

  onStepUp(player) {
    console.log(`Player: ${player.name} stepped up in go!`, this);
  }
}

export default Go;
