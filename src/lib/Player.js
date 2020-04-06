class Player {
  constructor({
    name,
  }) {
    this.name = name;

    this.money = 0;
    this.tile = null;
    this.properties = [];
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  getMoney() {
    return this.money;
  }

  setMoney(money) {
    this.money = money;
  }

  getTile() {
    return this.tile;
  }

  setTile(tile) {
    this.tile = tile;
  }

  getProperties() {
    return this.properties;
  }

  setProperties(properties) {
    this.properties = properties;
  }

  addProperty(property) {
    this.properties.push(property);
  }

  removeProperty(property) {
    const propertyIndex = this.properties.findIndex((p) => p.id === property.id);
    if (propertyIndex === -1) throw new Error(`Invalid property: ${JSON.stringify(property)}`);
    this.properties = this.properties.splice(propertyIndex, 1);
  }
}


export default Player;
