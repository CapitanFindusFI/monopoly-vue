class Player {
  constructor({
    name,
    money,
  }) {
    this.name = name;
    this.money = money;

    this.tileIndex = null;
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

  getTileIndex() {
    return this.tileIndex;
  }

  setTileIndex(tileIndex) {
    this.tileIndex = tileIndex;
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
