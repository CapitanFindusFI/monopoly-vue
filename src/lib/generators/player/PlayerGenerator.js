import Player from '../../models/Player';

class PlayerGenerator {
  static generatePlayers(playerNames, money) {
    return playerNames.map((name) => {
      return new Player({
        name,
        money,
      });
    });
  }
}

export default PlayerGenerator;
