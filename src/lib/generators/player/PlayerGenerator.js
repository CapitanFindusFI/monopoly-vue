import Player from '../../models/Player';

class PlayerGenerator {
  static generatePlayers(playerNames, money) {
    return playerNames.map((name) => new Player({
      name,
      money,
    }));
  }
}

export default PlayerGenerator;
