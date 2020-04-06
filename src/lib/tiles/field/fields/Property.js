import Field from '../Field';
import FieldTypes from '../field.types.enum';

class Property extends Field {
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
      fieldType: FieldTypes.PROPERTY,
    });

    this.setCanHaveHouses(true);

    this.MAX_HOUSES = 5;
    this.CURRENT_HOUSES = 0;
  }

  getMaxHouses() {
    return this.MAX_HOUSES;
  }

  setMaxHouses(max) {
    this.MAX_HOUSES = max;
  }

  getCurrentHouses() {
    return this.CURRENT_HOUSES;
  }

  setCurrentHouses(houses) {
    this.CURRENT_HOUSES = houses;
  }

  onStepUp(player) {
    console.log(`Player ${player.name} stepped up on a property`, this);
  }
}

export default Property;
