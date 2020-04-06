import Field from '../Field';
import FieldTypes from '../FieldTypes';

class Society extends Field {
  constructor({
    picture,
    name,
    index,
    cost,
    revenue,
  }) {
    super({
      picture,
      name,
      index,
      cost,
      revenue,
      fieldType: FieldTypes.SOCIETY,
    });
  }

  onStepUp(player) {
    console.log(`Player ${player.name} stepped up on a society`, this);
  }
}

export default Society;
