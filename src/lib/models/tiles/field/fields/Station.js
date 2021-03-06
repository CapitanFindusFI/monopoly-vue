import Field from '../Field';
import FieldTypes from '../FieldTypes';

class Station extends Field {
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
      fieldType: FieldTypes.STATION,
    });
  }

  onStepUp(player) {
    console.log(`Player ${player.name} stepped up on a station`, this);
  }
}

export default Station;
