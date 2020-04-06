import Field from './Field';
import FieldTypes from '../../types/field.types.enum';

class Society extends Field {
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
      fieldType: FieldTypes.SOCIETY,
    });
  }

  onStepUp() {
    console.log('Stepped up on a society', this);
  }
}

export default Society;
