import Field from '../Field';
import FieldTypes from '../FieldTypes';

class Property extends Field {
  constructor({
    picture,
    name,
    index,
    cost,
    revenue,
    color,
    houseCost
  }) {
    super({
      picture,
      name,
      index,
      cost,
      revenue,
      fieldType: FieldTypes.PROPERTY,
    });

    this.color = color;
    this.houseCost = houseCost;

    this.setCanHaveHouses(true);

    this.MAX_HOUSES = 5;
    this.CURRENT_HOUSES = 0;
  }

  getColor() {
    return this.color;
  }

  setColor(color) {
    this.color = color;
  }

  getHouseCost() {
    return this.houseCost;
  }

  setHouseCost(cost) {
    this.houseCost = cost;
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
