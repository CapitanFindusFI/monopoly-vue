import Tile from '../Tile';
import TileTypes from '../../types/tile.types.enum';

class Field extends Tile {
  constructor({
    picture,
    name,
    cost,
    revenue,
    fieldType,
  }) {
    super({
      type: TileTypes.PROPERTY,
      name,
      picture,
    });
    this.cost = cost;
    this.revenue = revenue;
    this.fieldType = fieldType;

    this.owner = null;
    this.relatives = [];

    this.canHaveHouses = false;
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

  setCanHaveHouses(can) {
    this.canHaveHouses = can;
  }

  onStepUp() {
    throw new Error('Must be implemented in extending classes');
  }
}

export default Field;
