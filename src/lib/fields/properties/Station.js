import Field from './Field';
import FieldTypes from '../../types/field.types.enum';

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

  onStepUp() {
    console.log('Stepped up on a station', this);
  }
}

export default Station;
