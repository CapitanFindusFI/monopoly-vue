import Special from '../Special';
import SpecialTypes from '../SpecialTypes';

class Prison extends Special {
  constructor({
    name,
    picture,
    index,
  }) {
    super({
      name,
      picture,
      index,
      specialType: SpecialTypes.PRISON,
    });
  }

  onStepUp(player) {
    console.log(`Player: ${player.name} stepped up in prison`, this);
  }
}

export default Prison;
