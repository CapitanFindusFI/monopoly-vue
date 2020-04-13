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
    houseCost,
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
    this.currentHouses = 0;

    this.setCanHaveHouses(true);
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

  getCurrentHouses() {
    return this.currentHouses;
  }

  setCurrentHouses(houses) {
    this.currentHouses = houses;
  }

  onStepUp(player) {
    console.log(`Player ${player.name} stepped up on a property`, this);
  }
}

export default Property;
