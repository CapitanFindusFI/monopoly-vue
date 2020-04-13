import PlayerController from './controllers/PlayerController';
import DieController from './controllers/DieController';
import TileController from './controllers/TileController';
import defaultGameSettings from './settings/game.settings';


class GameController {
  constructor() {
    this.gameSettings = defaultGameSettings;

    this.turnNumber = 0;
    this.playersNumber = 0;
    this.currentPlayerIndex = 0;

    this.gameIsRunning = false;
  }

  getTurnNumber() {
    return this.turnNumber;
  }

  getPlayers() {
    return this.playerController.getPlayers();
  }

  getActivePlayer() {
    return this.playerController.getActivePlayer();
  }

  getPlayerByIndex(playerIndex) {
    return this.playerController.getPlayerByIndex(playerIndex);
  }

  setupGame(playerNames, gameSettings = {}) {
    this.gameSettings = { ...defaultGameSettings, ...gameSettings };
    const { playersInitialMoney } = this.gameSettings;

    this.playerController = new PlayerController(playerNames, playersInitialMoney);
    this.dieController = new DieController();
    this.tileController = new TileController();

    this.playersNumber = playerNames.length;
  }

  beginGame() {
    this.gameIsRunning = true;
    this.nextTurn();
  }

  nextTurn() {
    if (this.turnNumber > 0) {
      if (this.currentPlayerIndex === this.playersNumber) {
        this.currentPlayerIndex = 0;
      } else {
        this.currentPlayerIndex += 1;
      }
    }
    this.playerController.setActivePlayer(this.currentPlayerIndex);

    // roll the dice
    this.dieController.roll();
    this.playerController.moveActivePlayer(this.dieController.getDiceValue());

    const playerPosition = this.playerController.getActivePlayerPosition();
    const playerStandingField = this.tileController.getTileByIndex(playerPosition);

    this.turnNumber += 1;
  }
}

export default GameController;
