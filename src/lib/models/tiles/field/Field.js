import Tile from '../Tile';
import TileTypes from '../TileTypes';

class Field extends Tile {
  constructor({
    name,
    picture,
    index,
    cost,
    revenue,
    fieldType,
  }) {
    super({
      type: TileTypes.PROPERTY,
      name,
      picture,
      index,
    });
    this.cost = cost;
    this.revenue = revenue;
    this.fieldType = fieldType;

    this.relatives = [];
    this.canHaveHouses = false;

    this.setCanBeBought(true);
  }

  getCost() {
    return this.cost;
  }

  setCost(cost) {
    this.cost = cost;
  }

  getRevenue() {
    return this.revenue;
  }

  setRevenue(revenue) {
    this.revenue = revenue;
  }

  getFieldType() {
    return this.fieldType;
  }

  setFieldType(fieldType) {
    this.fieldType = fieldType;
  }

  getOwner() {
    return this.owner;
  }

  setOwner(owner) {
    this.owner = owner;
  }

  getRelatives() {
    return this.relatives;
  }

  setRelatives(relatives) {
    this.relatives = relatives;
  }

  getCanHaveHouses() {
    return this.canHaveHouses;
  }

  setCanHaveHouses(flag) {
    this.canHaveHouses = flag;
  }

  // eslint-disable-next-line no-unused-vars,class-methods-use-this
  onStepUp(player) {
    throw new Error('Must be implemented in extending classes');
  }
}

export default Field;
