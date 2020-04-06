class Player {
  constructor({
    name,
  }) {
    this.name = name;

    this.money = 0;
    this.tile = null;
    this.active = false;
    this.inGame = true;
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

  getActive() {
    return this.active;
  }

  setActive(flag) {
    this.active = flag;
  }

  getInGame() {
    return this.inGame;
  }

  setInGame(flag) {
    this.inGame = flag;
  }

  getProperties() {
    return this.properties;
  }

  setProperties(properties) {
    this.properties = properties;
  }
}


export default Player;
