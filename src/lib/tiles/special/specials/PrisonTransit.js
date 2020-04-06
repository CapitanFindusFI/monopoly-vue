import Special from '../Special';
import SpecialTypes from '../SpecialTypes';

class PrisonTransit extends Special {
  constructor({
    name,
    picture,
  }) {
    super({
      name,
      picture,
      specialType: SpecialTypes.PRISON_TRANSIT,
    });
  }

  onStepUp(player) {
    console.log(`Player: ${player.name} stepped up in prison transit`, this);
  }
}

export default PrisonTransit;
