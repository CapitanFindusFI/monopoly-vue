import Field from '../Field';
import FieldTypes from '../field.types.enum';

class Station extends Field {
  constructor({
    picture,
    name,
    cost,
    revenue,
  }) {
    super({
      picture,
      name,
      cost,
      revenue,
      fieldType: FieldTypes.STATION,
    });
  }

  onStepUp(player) {
    console.log(`Player ${player.name} stepped up on a station`, this);
  }
}

export default Station;
